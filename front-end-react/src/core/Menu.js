import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';






const Menu = () => (
    
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin">Signin</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                    <li className="nav-item">
                        <span   className="nav-link" 
                                style={{cursor:'pointer', color:'black' }} 
                                onClick={() => signout(() => {
                                    //back to home after sign out (might not a good solution yet, cannot deal with react-router-dom for now)
                                    window.location.href = '/';
                                })}>
                        Signout</span>
                    </li>
            )}



        </ul>
    </div>
);

export default Menu;