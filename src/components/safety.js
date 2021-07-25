import React from 'react';
import './safety.css';
import delivery from '../images/delivery.png';
import thermal from '../images/thermal.png';
import sanitized from '../images/sanitized.png';
import handwash from '../images/handwash.png';
import mask from '../images/mask.png';
import social from '../images/social-distance.png';
import limited from '../images/limited.png';

function Safety() {
    return (
        // safe to shop 
        <div class="row  safety justify-content-center">
            <div class="col-8 container">
                <div class="row m-auto">
                    <h2 class="fw-bold text-center my-5">We are #SafeToShop </h2>

                    <div class="col-12 col-md-6 col-lg-3 mb-5 ">
                        <div class="safety-box">
                            <img src={delivery} alt="home delivery" />
                        </div>
                        <span>Zero-contact home delivery available</span>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-5 ">
                        <div class="safety-box">
                            <img src={thermal} alt="home delivery" />
                        </div>
                        <span>Non-contact thermal scanning of staff</span>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-5 ">
                        <div class="safety-box">
                            <img src={social} alt="home delivery" />
                        </div>
                        <span>Social distancing norms followed</span>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-5 ">
                        <div class="safety-box">
                            <img src={limited} alt="home delivery" />
                        </div>
                        <span>Limited number of people allowed inside the store</span>
                    </div>
                    <div class="row m-auto justify-content-center">
                        <div class="col-12 col-md-6 col-lg-3 mb-5 ">
                            <div class="safety-box">
                                <img src={handwash} alt="home delivery" />
                            </div>
                            <span>Staff trained on precautionary measures & hygiene</span>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-5 ">
                            <div class="safety-box">
                                <img src={mask} alt="home delivery" />
                            </div>
                            <span>Mandatory face mask and hand sanitisation for staffs and customers</span>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 mb-5 ">
                            <div class="safety-box">
                                <img src={sanitized} alt="home delivery" />
                            </div>
                            <span>Store completely sanitized twice every day</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            );
}

            export default Safety;
