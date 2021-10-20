import React from 'react';
import { Link } from 'react-router-dom';
import './GetApointment.css'
const GetApointment = () => {
    return (
        <div className="get-apointment-section pt-5 pb-5">
            <div className="container">
                <div className=" d-flex justify-content-between align-items-center">
                    <div className=" w-50">
                        <h2 className="heading-txt">Premium Quality, Advanced Dental Technologies with Flat Prices</h2>
                    </div>
                    <div className="">
                        <Link to="/apointment"><button className="primary-btn">Get Apointment</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetApointment;