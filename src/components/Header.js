import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  // If No Dependency array => UseEffect is called on every component render
  // If Dependency array is empty [] => UseEffect is called on intial render (just once)
  // If Dependency array is => called every time btnNameReact is updated
  useEffect(() => {
    console.log("Use Effect Header");
  }, [btnNameReact]);

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
