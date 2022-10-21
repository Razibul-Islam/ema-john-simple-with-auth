import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/About">About</Link>
        {user?.uid ? (
          <button className="btn-logout" onClick={logOut}>Log Out</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
        {/* <span>{ user?.email}</span> */}
      </div>
    </nav>
  );
};

export default Header;
