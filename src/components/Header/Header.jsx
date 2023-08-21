import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container d-flex">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="menu ms-auto">
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/orders">Orders</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
