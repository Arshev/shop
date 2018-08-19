import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { mainPath,  contactsPath } from '../helpers/routes';
import Cart from './Cart';
export const MainMenu = () => (
    <React.Fragment>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Shop</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={mainPath()} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={contactsPath()} className="nav-link">Contacts</Link>
                        </li>
                    </ul>
                </div>
                <Cart />
            </nav>
        </Router>
    </React.Fragment>
);
