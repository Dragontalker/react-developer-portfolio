import React from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;