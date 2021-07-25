import React from 'react';
import './banner.css';


function Banner() {
    return (
        <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center text-center banner-card">
            <h3>Hello, Good Morning</h3>
          </div>
  
        </div>
        <div className="col-12">
          <div className="text-center">
            <input type="text" className="p-3 w-50 border-dark banner-content" id="search" placeholder="Search" />
          </div>
        </div>
      </div>
  
    );
}

export default Banner;
