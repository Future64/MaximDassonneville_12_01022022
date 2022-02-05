import React from "react"
import './MainNavBar.css'
import {Link} from 'react-router-dom';


const MainNavBar = () => {
    return   <nav className="mainNavBar">
                <Link to="/" className="linkHeader">Accueil</Link>
                <Link to="/" className="linkProfil">Profil</Link> 
                <Link to="/" className="linkReglages">Réglages</Link>
                <Link to="/" className="linkCommunaute">Communauté</Link>
            </nav>
}

export default MainNavBar