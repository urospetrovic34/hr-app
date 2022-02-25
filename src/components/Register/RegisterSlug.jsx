/* eslint-disable react-hooks/exhaustive-deps */
//OVO IZNAD JE HTELO DA NAM KOMPROMITUJE CITAV TRUD
import React, { useEffect, useState, useRef } from "react";
//import { Link } from 'react-router-dom'
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
//import { clearErrors } from '../../redux/actions/errorActions'
import { useNavigate } from "react-router-dom";
import { FileUpload } from "../Elements/FileUpload/FileUpload";
import { Link } from "react-router-dom";
import useCompanies from "../../hooks/useCompanies";
import useAuthProfile from "../../hooks/useAuthProfile";
import { Spinner } from "../Elements/Spinner/Spinner";
//import {setCompanyUser,setCompanyAdmin} from '../../redux/actions/userActions'
import ThemeContext from "../../context/useTheme";

export const RegisterSlug = () => {
  const { value, value3 } = React.useContext(ThemeContext);
  const [stateValue] = value;
  const [stateValue3] = value3;
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [nameCheck, setNameCheck] = useState(false);
  const [imageCheck, setImageCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const authProfile = useAuthProfile();
  let authProfileCheck = false;

  if (authProfile.status === "success") {
    console.log("USPEH");
    if (!authProfileCheck) {
      authProfileCheck = true;
    }
  }

  const roleOptions = [
    { value: "company_user", label: "Company User" },
    { value: "company_admin", label: "Company Admin" },
  ];

  const companies = useCompanies();
  const companyOptions = [];
  let companyCheck = false;

  if (companies.status === "success") {
    companies.data.data.data.map((company, index) =>
      companyOptions.push({ value: company.id, label: company.attributes.name })
    );
    if (!companyCheck) {
      companyCheck = true;
    }
  }

  const [fileName, setFileName] = useState("Choose file");
  const user = useSelector((state) => state.user);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    username: "",
    formData: null,
    userRole: roleOptions[0].value,
    company: window.location.pathname.split("/")[2],
    name: "",
    slug: "",
  });

  console.log(credentials);

  const fileInput = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCredentialsChange = (event) => {
    if (event.target.name === "email") {
      setEmailCheck(false);
    } else if (event.target.name === "password") {
      setPasswordCheck(false);
    } else if (event.target.name === "name") {
      setNameCheck(false);
    }
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (!regex.test(credentials.email)) {
      setEmailCheck(true);
    }
    if (!credentials.email) {
      setEmailCheck(true);
    } else if (credentials.email && regex.test(credentials.email)) {
      setEmailCheck(false);
    }
    if (!credentials.username) {
      setNameCheck(true);
    } else {
      setNameCheck(false);
    }
    if (!credentials.password) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
    if (!credentials.formData) {
      setImageCheck(true);
    } else {
      setImageCheck(false);
    }
    if (
      credentials.username &&
      credentials.email &&
      credentials.password &&
      credentials.formData &&
      regex.test(credentials.email)
    ) {
      dispatch(registerUser(credentials));
    }
  };

  const handleFileClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const fileUploaded = event.target.files[0];
    setFileName(fileUploaded.name);
    const formData = new FormData();
    formData.append("files", fileUploaded);
    setCredentials({ ...credentials, formData: formData });
  };

  useEffect(() => {
    if (companyCheck) {
      setCredentials({ ...credentials, company: companyOptions[0].value });
    }
  }, [companyCheck]);

  useEffect(() => {
    console.log(user);
  }, []);

  useEffect(() => {
    if (user.user && user.type) {
      navigate("/");
    }
  }, [user, navigate]);

  /*useEffect(() =>{
        if(authProfileCheck){
            console.log(user)
            console.log(authProfile)
        }
        //            authProfile.data.data.data[0].attributes.userRole==='company_user' ? (dispatch(setCompanyUser())) : dispatch(setCompanyAdmin())
    },[authProfileCheck])

    useEffect(() => {
        if (user.isAuthenticated && user.type==='companyUser') {
            navigate('/')
        }
        else if (user.isAuthenticated && user.type==='companyAdmin'){
            navigate('/admin')
        }
    }, [user, navigate])*/

  return (
    <div>
      {companies.status === "loading" && (
        <div className="control-center">
          <Spinner />
        </div>
      )}
      {companies.status === "success" && (
        <div className="register-form-container">
          <p className="form-type">REGISTER</p>
          <form className="register-form">
            <label htmlFor="" style={stateValue3}>
              Name<span>{nameCheck && " - No name entered"}</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="username"
              onChange={handleCredentialsChange}
              style={stateValue}
              className={`${nameCheck ? "error-input" : ""} ${stateValue ? "dark-placeholder" : ""}`}
            />
            <label htmlFor="" style={stateValue3}>
              Email{" "}
              <span>
                {emailCheck && !credentials.email
                  ? " - Email is a required field"
                  : emailCheck &&
                    !regex.test(credentials.email) &&
                    " - Email address is not valid"}
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleCredentialsChange}
              style={stateValue}
              className={`${emailCheck ? "error-input" : ""} ${stateValue ? "dark-placeholder" : ""}`}
            />
            <label htmlFor="" style={stateValue3}>
              Password{" "}
              <span>{passwordCheck && " - Password is a required field"}</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleCredentialsChange}
              style={stateValue}
              className={`${passwordCheck ? "error-input" : ""} ${stateValue ? "dark-placeholder" : ""}`}
            />
            <label htmlFor="" style={stateValue3}>
              Image <span>{imageCheck && " - No image sent"}</span>
            </label>
            <FileUpload
              fileName={fileName}
              fileInput={fileInput}
              handleFileClick={handleFileClick}
              handleFileChange={handleFileChange}
            />
            <button className="submit-button" onClick={handleRegisterSubmit}>
              Register
            </button>
            <div className="small-text-right">
              <Link
                to="/login"
                className="small-text-anchor"
                style={stateValue3}
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
