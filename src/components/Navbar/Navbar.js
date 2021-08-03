import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.scss'
import { IconContext } from "react-icons/lib";
import logo from '../../logo.svg'

function Navbar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    // const showButton = () => {
    //     if (window.innerWidth <= 768) {
    //     setButton(false);
    //     } else {
    //     setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);
    
    // window.addEventListener('resize', showButton)
    return (
        <>
            <IconContext.Provider value={{ color: "#212121" }}>
        <div className="navbar fadeInDown">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img className="navbar-logo-img" src={logo} alt="IPEA 215 Raúl Scalabrini Ortiz" />
                <h1 className="navbar-logo-title">IPEA 215<br /> <span className="navbar-logo-subtitle">Raúl Scalabrini Ortiz</span></h1>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                {" "}
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Nuestra Institución
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  to="/staff"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Equipo Docente
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
        </>
    )
}

export default Navbar
