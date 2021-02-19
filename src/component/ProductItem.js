import React, { Component } from 'react';
import image from '../img/Clock.jpg'

const ProductItem =(props)=> {
    
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <button onClick={props.consoleItem} href="#" className="btn btn-primary"><i className="fa fa-shopping-cart"></i></button>
                </div>
        </div>
    );
};

export default ProductItem;