import React from 'react';
import {NavLink} from 'react-router-dom';



const Menu = () => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/signin">Signin</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
        </ul>
    </div>
);

export default Menu;