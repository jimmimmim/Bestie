import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav id="navbar">
                <div class='gnb-box'>
                    <ul id="links">
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default NavBar;