import React, { useState } from "react";
import PropTypes from 'prop-types'
function Navbar(props) {

   

    return (
        <div>
            <nav className={`navbar w-full navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextForm</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3 className={`text-${props.mode==="dark"?"light":"dark"} mx-4  `}>Anurag Singh</h3>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"Enable":"Disable"} Dark Mode</label>
                    </div>
                </div>
            </nav>

        </div>
    );
}
export default Navbar
Navbar.propTypes = {  //this can define the type of any reuired dattypes in our page 
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {  //this will set the  default itle if we not pass the value of the title
    title: 'Stranger'

}