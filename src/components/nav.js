import React from 'react';
import './nav.css';
import logo from '../images/logo.png';

function Nav() {
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar header navbar-expand-lg navbar-light">
                    <div className="d-md-flex justify-content-md-around align-items-md-center w-100">
                        <div className="row">

                            <div className="logo col-12 col-md-4 mb-5 mb-md-0">
                                <a className="navbar-brand" href="logo">
                                    <img src={logo} alt="SunnyBee" className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-12 col-md-8 d-flex align-items-center">
                                <a className="text-dark me-3" href="home">HOME</a>
                                <p className="text-decoration-none text-dark m-0">2/718,Kazura Garen 2nd street
                                </p>
                                <span className="material-icons">
                                    expand_more
                                </span>

                            </div>
                        </div>
                        <div className="row my-3 mt-md-0">
                            <div className="col-12">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNav">

                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link text-dark " href="search">Search</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-dark" href="list">My List</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-dark" href="account">My Account</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-dark" href="cart">Cart</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default Nav;
