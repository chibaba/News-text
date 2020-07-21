import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavLinks.css';


const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/">List of Authors</NavLink>
        </li>
        <li>
            <NavLink to="/ui/news">Available News
            </NavLink>
        </li>
        <li>
            <NavLink to="/news/new">Add News
            </NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate
            </NavLink>
        </li>
    </ul>
}

export default NavLinks