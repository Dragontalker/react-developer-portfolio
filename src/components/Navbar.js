import React from 'react';
import logo from '../react-redux-log.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#homeTitle">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutTitle">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolioTitle">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contactTitle">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;