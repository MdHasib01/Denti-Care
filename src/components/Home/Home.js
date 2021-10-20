import React from 'react';
import WhyUs from './WhyUS/WhyUs';
import './Home.css'
import Blogs from '../Blogs/Blogs';
import GetApointment from '../GetApointment/GetApointment';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/*--------------------------
                why choose us section  
             ----------------------------*/}
            <div className="why-us my-5">
                <div className="container">
                <div className="text-center">
                <p className="why-us-text">WHY CHOOSE US</p>
                <h2 className="my-3 heading-txt">Reasons why we're widely favored</h2>
                </div>
                <div className="mt-5">
                <WhyUs></WhyUs>
                </div>
                </div>
            </div>
            <GetApointment></GetApointment>
            <Blogs></Blogs>
            
            
        </div>
    );
};

export default Home;