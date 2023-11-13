import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
