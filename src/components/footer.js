import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer row mt-5 align-items-center justify-content-around py-4">
            <div className="col-12 col-lg-2 mb-3 mb-md-0 text-center text-md-start">
                <h5 className="mb-3">My Account</h5>
                <div className="row">
                    <div className="col-12 mb-3">
                        <span>Wallet</span>
                    </div>
                    <div className="col-12 mb-3">
                        <span>My Orders</span>
                    </div>
                    <div className="col-12 mb-3">
                        <span>Manage Addresses</span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-2 mb-3 mb-md-0 text-center text-md-start align-items-center justify-content-center">
                <h5 className="mb-3">Contact </h5>
                <div className="row">
                    <div className="col-12 mb-3 d-flex justify-content-center justify-content-md-start align-items-center">
                        <div className="mobile"></div>
                        <span>000-00000</span>
                    </div>
                    <div className="col-12 mb-3 d-flex justify-content-center justify-content-md-start align-items-center">
                        <div className="mobile"></div>
                        <span>Whatsapp us</span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 mb-3 mb-md-0 text-center text-md-start align-self-start justify-content-center">
                <h5 className="mb-3"> Download our app</h5>
                <button className="app border-0">App Label</button>
                <span></span>
            </div>

        </div>
    );
}

export default Footer;
