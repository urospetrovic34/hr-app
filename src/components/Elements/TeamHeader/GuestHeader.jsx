import React from "react";
import '../Select/Select.css'
import { customStyles, customStylesDark } from '../Select/customStyles'
import Select from 'react-select'
import ThemeContext from "../../../context/useTheme";

export const GuestHeader = (props) => {
  const { value2, value3 } = React.useContext(ThemeContext);
  const [stateValue2] = value2;
  const [stateValue3] = value3;

  console.log(props.companyData);

  const sortOptions = [
    { value: "asc", label: "First joined" },
    { value: "desc", label: "Last joined" },
  ];

  return (
    <div className="guest-header">
      <div className="guest-header-row-one">
        <div>
          <img
            className="company-avatar"
            src={props.companyData.attributes.logo.data.attributes.url}
            alt="#"
          />
        </div>
        <div>
          <h2 style={stateValue3}>{props.companyData.attributes.name}</h2>
        </div>
      </div>
      <div className="guest-header-row-two">
        <div>
          <input
            placeholder="Filter by name"
            onKeyUp={(event) => props.handleFilter(event.target.value)}
            style={stateValue2}
            className={stateValue2 ? "dark-placeholder" : null}
          />
        </div>
        <div>
          <Select
            defaultValue={sortOptions[0]}
            className="custom-select"
            styles={stateValue2 ? customStylesDark : customStyles}
            options={sortOptions}
            onChange={props.handleSort}
          />
        </div>
      </div>
    </div>
  );
};
