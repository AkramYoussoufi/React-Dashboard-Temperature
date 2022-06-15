import "./Login.css";
import { useRef, useState, useEffect } from "react";
import AuthContext from "../../../context/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

//THIS IS NATIVE JS FOR THE ANIMATIONS
const showhide1 = function () {
  //LOGIN BUTTON
  const size = document.querySelector("body");
  const image = document.querySelector(".reg-items .wrap img");
  const button = document.querySelector(".registerbutton");
  const image2 = document.querySelector(".container .wrap img");
  const button2 = document.querySelector(".loginbut");
  if (size.clientWidth >= 661) {
    image.style.transform = "translateX(0%)";
    button2.style.display = "none";
    setTimeout(function () {
      image2.style.transform = "translateX(-100%)";
    }, 500);
    setTimeout(function () {
      button.style.display = "block";
      button.style.opacity = 1;
    }, 1000);
  }
};

const switcher = function () {
  const container = document.querySelector(".reg-items");
  if (container.style.transform === "rotateY(90deg)") {
    container.style.transform = "rotateY(0deg)";
  } else if (container.style.transform === "rotateY(0deg)") {
    container.style.transform = "rotateY(90deg)";
  } else {
    container.style.transform = "rotateY(0deg)";
  }
};

const LOGIN_URL = "api/Users/Login";
const EMAIL_REGEX =
  /^[a-zA-Z0-9-_.]{2,23}[@][a-zA-Z]([a-zA-Z0-9-_]{0,15})[.][a-zA-z]{2,5}$/;
const PWD_REGEX = /^.{8,24}$/;

function Login() {
  const { auth, setAuth } = useAuth();
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [allValid, setAllvalid] = useState(false);
  const [errMsg, setErrMsg] = useState({ message: "", active: false });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    const result2 = PWD_REGEX.test(password);
    setValidEmail(result);
    setValidPassword(result2);
    if (result && result2) {
      setAllvalid(true);
    } else {
      setAllvalid(false);
    }
  }, [email, password]);

  const submitHandlerLog = async (e) => {
    //setErrMsg({ active: true, message: "loading" }); EXAMPLE OF LOADING SCREEN
    e.preventDefault();

    try {
      let date = new Date();

      if (validEmail && validPassword) {
        const response = await axios.post(
          LOGIN_URL,
          {
            email,
            password,
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
        console.log(response?.data);
        const accesToken = response?.data?.token;
        const user = response?.data?.user.userName;
        setAuth({ user, accesToken });
        setEmail("");
        setPassword("");
        navigate(from, { replace: true });
      } else {
        setErrMsg({ active: true, message: "Nice try" });
      }
    } catch (err) {
      if (err.response.status === 400) {
        setErrMsg({
          message: "Your Password or Email are wrong or dosen't exist.",
          active: true,
        });
        console.log(err);
      } else {
        setErrMsg({
          message: "Something went wrong please try again.",
          active: true,
        });
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, [email]);

  return (
    <div className="auth-items">
      <div className="wrap">
        <img src={require("./wrap-background - 2.jpg")} alt={""}></img>
      </div>
      <div>
        <span className="title">LogIn</span>
      </div>{" "}
      <div
        ref={errRef}
        className="errMsg"
        style={{
          height: errMsg.active ? "auto" : "0px",
          padding: errMsg.active ? "10px" : "0px",
        }}
      >
        <div className="errBg"></div>
        <div className="Msg">{errMsg.message}</div>
      </div>{" "}
      <div className="loginpanel">
        <form onSubmit={submitHandlerLog}>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              className="EmailInput"
              autoComplete="off"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            ></input>
            <label className="Name" htmlFor="email">
              <span className="NameText">Email</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="PasswordInput"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            ></input>
            <label className="Password" htmlFor="password">
              <span className="PasswordText">Password</span>
            </label>
            <div>
              <input
                className="loginbutton"
                type="submit"
                value="Log In"
                disabled={email && password && !allValid}
                style={
                  email !== "" && password !== "" && allValid
                    ? { cursor: "pointer", opacity: "1" }
                    : {
                        opacity: "0.5",
                        pointerEvents: "none",
                      }
                }
              />
            </div>
          </div>
        </form>
      </div>
      <button className="loginbut" onClick={showhide1}>
        <span>Log In Now</span>
      </button>
      <button className="switcher1" onClick={switcher}>
        <span></span>
      </button>
    </div>
  );
}

export default Login;
