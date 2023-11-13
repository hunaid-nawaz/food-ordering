import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Button");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              updatedBtnName = btnNameReact === "Login" ? "Logout" : "Login";

              setBtnNameReact(updatedBtnName);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
