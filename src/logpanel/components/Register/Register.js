import "./Register.css";

import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../../api/axios";

//NATIVE JS ANIMATION JS CONTROLLER
const size = document.querySelector("body");
const showhide = function () {
  //SIGN UP BUTTONN
  const size = document.querySelector("body");
  const image = document.querySelector(".reg-items .wrap img");
  const button = document.querySelector(".registerbutton");
  const image2 = document.querySelector(".container .wrap img");
  const button2 = document.querySelector(".loginbut");
  if (size.clientWidth >= 661) {
    image2.style.transform = "translateX(0%)";
    button.style.display = "none";
    setTimeout(function () {
      image.style.transform = "translateX(100%)";
    }, 500);
    setTimeout(function () {
      button2.style.display = "block";
      button2.style.opacity = 1;
    }, 1000);
  }
};

const fix = function () {
  const button = document.querySelector(".registerbutton");
  const button2 = document.querySelector(".loginbut");
  const container = document.querySelector(".reg-items");
  if (size.clientWidth <= 660) {
    button.style.opacity = "0";
    button2.style.opacity = "0";
  } else if (
    size.clientWidth >= 661 &&
    button.style.opacity === "0" &&
    container.style.transform === "rotateY(90deg)" &&
    button2.style.opacity === "0"
  ) {
    //window.location.reload(false);
    container.style.transform = "rotateY(0deg)";
    button.style.opacity = "1";
    button2.style.opacity = "1";
  } else if (
    size.clientWidth >= 661 &&
    button.style.opacity === "0" &&
    button2.style.opacity === "0"
  ) {
    button.style.opacity = "1";
    button2.style.opacity = "1";
  }
};

window.addEventListener("resize", fix);

const switcher = function () {
  const container = document.querySelector(".reg-items");
  if (container.style.transform === "rotateY(90deg)") {
    container.style.transform = "rotateY(0deg)";
  } else if (container.style.transform === "rotateY(0deg)") {
    container.style.transform = "rotateY(90deg)";
  }
};

const REGISTER_URL = "api/Users/Register";
const USER_REGEX = /^[a-zA-z]{1,15}[a-zA-Z0-9-_'.][a-zA-Z0-9]{1,15}$/;
const PWD_REGEX = /^.{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9-_.]{2,23}[@][a-zA-Z]([a-zA-Z0-9-_]{0,15})[.][a-zA-z]{2,5}$/;

function Register() {
  const errRefreg = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [passwordReg, setPasswordreg] = useState("");
  const [validPasswordreg, setValidPasswordreg] = useState(false);

  const [matchPasswordreg, setMatchPasswordreg] = useState("");
  const [validMatchreg, setValidMatchreg] = useState(false);

  const [emailreg, setEmailReg] = useState("");
  const [validEmailreg, setValidEmailreg] = useState(false);

  const [errMsgreg, setErrMsgreg] = useState({
    active: false,
    message: "",
  });
  const [allValid, setAllValid] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
    if (!result && user !== "") {
      setErrMsgreg({
        active: true,
        message:
          "Your username must include a valid username  with more then 4 characters.",
      });
    } else {
      setErrMsgreg({ active: false, checkuser: false });
    }
  }, [user]);
  useEffect(() => {
    const result = PWD_REGEX.test(passwordReg);

    setValidPasswordreg(result);
    const match = passwordReg === matchPasswordreg;
    setValidMatchreg(match);
    if (!result && passwordReg !== "") {
      setErrMsgreg({
        active: true,
        message: "Your password is too weak.",
      });
    } else if (
      result &&
      !match &&
      passwordReg !== "" &&
      matchPasswordreg !== ""
    ) {
      setErrMsgreg({
        active: true,
        message: "Please, your second password must match the previous one.",
      });
    } else {
      setErrMsgreg({ active: false });
    }
  }, [passwordReg, matchPasswordreg]);
  useEffect(() => {
    const result = EMAIL_REGEX.test(emailreg);

    setValidEmailreg(result);

    if (!result && emailreg !== "") {
      setErrMsgreg({
        active: true,
        message: "Your email must include a valid Email Adresse",
      });
    } else {
      setErrMsgreg({ active: false });
    }
  }, [emailreg]);

  useEffect(() => {
    if (validEmailreg && validMatchreg && validName && validPasswordreg) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  });

  const submitHandlerReg = async (e) => {
    e.preventDefault();
    try {
      let date = new Date();
      if (allValid) {
        const response = await axios.post(
          REGISTER_URL,
          {
            email: emailreg,
            username: user,
            password: passwordReg,
            confirmedPassword: matchPasswordreg,
          },
          {
            header: {
              "Content-Type": "application/json",
              date: date.getDate(),
              Accept: "application/json",
              server: "Microsoft-IIS/10.0 ",
              xpoweredby: "ASP.NET ",
            },
          }
        );
        console.log(JSON.stringify(response));
        setEmailReg("");
        setMatchPasswordreg("");
        setPasswordreg("");
        setUser("");
        setSuccess(true);
      }
    } catch (err) {
      setErrMsgreg({
        message: "Something went Wrong",
        active: true,
      });
    }
  };

  return (
    <div className="reg-items">
      <div className="wrap">
        <img src={require("./wrap-background - 1.jpg")} alt={""}></img>
      </div>
      <div>
        <span className="title">Singup</span>
      </div>
      <div
        ref={errRefreg}
        className="errMsgreg"
        style={{
          height: errMsgreg.active ? "auto" : "0px",
          padding: errMsgreg.active ? "10px" : "0px",
        }}
      >
        <div className="errBgreg"></div>
        <div className="Msgreg">
          <FontAwesomeIcon
            style={{ display: errMsgreg.active ? "inline" : "none" }}
            icon={faInfoCircle}
          />{" "}
          {errMsgreg.message}
        </div>
      </div>{" "}
      <div className="loginpanel">
        <form onSubmit={submitHandlerReg}>
          <div>
            <input
              type="text"
              id="usernamereg"
              name="usernamereg"
              className="NameInput"
              autoComplete="off"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={user}
              required
            ></input>
            <label className="NameReg" htmlFor="usernamereg">
              <span
                className="NameRegText"
                style={{
                  color:
                    validName && user //MUST CHANGE
                      ? "green"
                      : user
                      ? "red"
                      : "#767676",
                }}
              >
                Username{" "}
                <FontAwesomeIcon
                  icon={validName ? faCheck : faTimes} //MUST CHANGE
                  style={{
                    display: user ? "inline" : "none",
                  }}
                />
              </span>
            </label>
            <input
              type="password"
              id="passwordReg"
              name="passwordReg"
              autoComplete="off"
              value={passwordReg}
              onChange={(e) => {
                setPasswordreg(e.target.value);
              }}
              className="PasswordInput"
              required
            ></input>
            <label className="PasswordReg" htmlFor="passwordReg">
              <span
                className="PasswordRegText"
                style={{
                  color:
                    validPasswordreg && passwordReg //MUST CHANGE
                      ? "green"
                      : passwordReg
                      ? "red"
                      : "#767676",
                }}
              >
                Password{" "}
                <FontAwesomeIcon
                  icon={validPasswordreg ? faCheck : faTimes} //MUST CHANGE
                  style={{
                    display: passwordReg ? "inline" : "none",
                  }}
                />
              </span>
            </label>
            <input
              type="password"
              id="repasswordreg"
              name="repasswordreg"
              value={matchPasswordreg}
              autoComplete="off"
              onChange={(e) => {
                setMatchPasswordreg(e.target.value);
              }}
              className="RePasswordInput"
              required
            ></input>
            <label className="RePassword">
              <span
                className="RePasswordText"
                style={{
                  color:
                    validMatchreg && matchPasswordreg //MUST CHANGE
                      ? "green"
                      : matchPasswordreg
                      ? "red"
                      : "#767676",
                }}
              >
                Confirm Password{" "}
                <FontAwesomeIcon
                  icon={validMatchreg ? faCheck : faTimes} //MUST CHANGE
                  style={{
                    display: matchPasswordreg ? "inline" : "none",
                  }}
                />
              </span>
            </label>
            <input
              type="text"
              id="regemail"
              name="regemail"
              className="Email"
              value={emailreg}
              autoComplete="off"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
              required
            ></input>
            <label className="Email" htmlFor="regemail">
              <span
                className="EmailText"
                style={{
                  color:
                    validEmailreg && emailreg //MUST CHANGE
                      ? "green"
                      : emailreg
                      ? "red"
                      : "#767676",
                }}
              >
                Email{" "}
                <FontAwesomeIcon
                  icon={validEmailreg ? faCheck : faTimes} //MUST CHANGE
                  style={{
                    display: emailreg ? "inline" : "none",
                  }}
                />
              </span>
            </label>
            <div>
              <input
                className="loginbutton"
                type="submit"
                disabled={!allValid}
                style={
                  allValid
                    ? { cursor: "pointer", opacity: "1" }
                    : { pointerEvents: "none", opacity: "0.5" }
                }
                value="Sing Up"
              />
            </div>
          </div>
        </form>
      </div>
      <button className="registerbutton" onClick={showhide}>
        <span>Sign Up Now</span>
      </button>
      <button className="switcher" onClick={switcher}>
        <span></span>
      </button>
    </div>
  );
}

export default Register;
