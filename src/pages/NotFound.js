import React from 'react';
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
          <h1>Erreur 404</h1>
          <NavLink exact  to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
        </div>
    );
};

export default NotFound;