import "./Register.css";
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

function Register() {
  return (
    <div className="reg-items">
      <div className="wrap">
        <img src={require("./wrap-background - 1.jpg")} alt={""}></img>
      </div>
      <div>
        <span className="title">Singup</span>
      </div>
      <div className="loginpanel">
        <form method="POST">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              className="NameInput"
              required
            ></input>
            <label className="NameReg">
              <span className="NameRegText">Username</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="PasswordInput"
              required
            ></input>
            <label className="PasswordReg">
              <span className="PasswordRegText">Password</span>
            </label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              className="RePasswordInput"
              required
            ></input>
            <label className="RePassword">
              <span className="RePasswordText">Verify Password</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="Email"
              required
            ></input>
            <label className="Email">
              <span className="EmailText">Email</span>
            </label>
            <div>
              <input className="loginbutton" type="submit" value="Sing Up" />
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
