import React from 'react';
import './category.css';

 function createElements(number){
    var elements = [];
    for(let i =0; i < number; i++){
        elements.push(<div className="col-12 col-md-6 col-lg-3 mb-5 d-flex align-items-center">
        <div className="category-box"></div>
        <span>Category Name</span>
      </div>);
    }
    return elements;
}

function Category() {
    return (
        // Shop by category 
         <div className="row container">
          <h5 className="my-5">Shop by Category</h5>
          {createElements(20)}
          
        </div>
    );
}

export default Category;
