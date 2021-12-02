import React, { useReducer } from "react";
import boyImage from "../../../assets/images/boy.png";
import EditIcon from "../../../assets/svg/EditIcon";
import "./ProfileTab.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "FIRSTNAME_INPUT":
      return { ...state, firstname: action.payload };
    case "LASTNAME_INPUT":
      return { ...state, lastname: action.payload };
    case "EMAIL_INPUT":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const ProfileTab = () => {
  const [state, reducerDispatch] = useReducer(reducer, {
    firstname: "Balamurali",
    lastname: "A",
    email: "13bala90@gmail.com",
  });
  return (
    <div className="Profile">
      <div className="Profile__image">
        <img
          src={boyImage}
          height="100px"
          width="100px"
          className="Profile__image--round"
          alt=""
        />
        <EditIcon />
      </div>

      <form
        className="Profile__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className="Profile__form--fname-control form-control">
          <label className="Profile__form--fname-label" forHtml="profile-fname">
            First Name
          </label>
          <input
            className="Profile__form--fname"
            type="text"
            placeholder="Enter your firstname"
            name="firstname"
            value={state.firstname}
            required
            id="profile-fname"
            onChange={(e) =>
              reducerDispatch({
                type: "FIRSTNAME_INPUT",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="Profile__form--lname-control form-control">
          <label className="Profile__form--lname-label" forHtml="profile-lname">
            Last Name
          </label>
          <input
            className="Profile__form--lname"
            type="text"
            placeholder="Enter your lastname"
            name="lastname"
            value={state.lastname}
            required
            id="profile-lname"
            onChange={(e) =>
              reducerDispatch({
                type: "LASTNAME_INPUT",
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="Profile__form--email-control form-control">
          <label className="Profile__form--email-label" forHtml="profile-email">
            Email
          </label>
          <input
            className="Profile__form--email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={state.email}
            required
            id="profile-email"
            onChange={(e) =>
              reducerDispatch({
                type: "EMAIL_INPUT",
                payload: e.target.value,
              })
            }
          />
        </div>
        <button className="Profile__form--submit btn btn-success" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileTab;
