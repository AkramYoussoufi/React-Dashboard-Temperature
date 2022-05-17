import "./Login.css";

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

function Login() {
  return (
    <div className="auth-items">
      <div className="wrap">
        <img src={require("./wrap-background - 2.jpg")} alt={""}></img>
      </div>
      <div>
        <span className="title">LogIn</span>
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
            <label className="Name">
              <span className="NameText">Username</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="PasswordInput"
              required
            ></input>
            <label className="Password">
              <span className="PasswordText">Password</span>
            </label>
            <div>
              <input className="loginbutton" type="submit" value="Log In" />
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
