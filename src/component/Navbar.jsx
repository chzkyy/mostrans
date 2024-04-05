import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes/index';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container">
                    <Link to="/" className="navbar-brand">Mostrans</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link " aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/location" className="nav-link active" aria-current="page" href="#">Location</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes />
        </>
    );
};

export default Navbar;