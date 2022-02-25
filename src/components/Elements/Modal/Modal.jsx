import React from "react";
import "./Modal.css";
import ThemeContext from "../../../context/useTheme";

export const Modal = (props) => {
  const { value } = React.useContext(ThemeContext);
  const [stateValue] = value;

  console.log(props.answers);

  return (
    <div className="modal">
      <div className="modal-relative-oblast" style={stateValue}>
        <div>
          <h1 className="modal-title">{props.profile.attributes.name}</h1>
        </div>
        <div className="modal-user-section">
          <img
            className="modal-avatar"
            src={props.profile.attributes.profilePhoto.data?.attributes.url}
            alt="$"
          />
        </div>
        <div className="modal-question-section">
          {props.answers.data.data.data.length === 0 && <div>No questions have been answered by this user</div>}
          {props.answers.data.data.data?.map((x) => (
            <div>
              <div className="question-text">
                {" "}
                • {x.attributes.question.data?.attributes.text}
              </div>
              <div>
                {x.attributes.question.data?.attributes.type === "image" ? (
                  <img src={x.attributes.answer} alt="#" />
                ) : (
                  <p className="answer-text">{x.attributes.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
