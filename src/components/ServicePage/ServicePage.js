import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import useServiceFetch from '../../hooks/useServiceFetch';
import Blogs from '../Blogs/Blogs';
import GetApointment from '../GetApointment/GetApointment';
import './ServicePage.css'

const ServicePage = () => {
    const {serviceId} = useParams();
    const [services] = useServiceFetch();

    return (
        <div>
            {/* service banner containre  */}
            {
                services.filter(service => service.id === serviceId).map((service,index) => <div
                    key={index}
                    className="service-banner"
                >   
                    <h2>{service.name}</h2>
                    <p>Home <FontAwesomeIcon icon={faChevronRight}/> Service <FontAwesomeIcon icon={faChevronRight}/> {service.name}</p>
                </div>)
            }

            {/* service related dynamic content */}
            {
                services.filter(service => service.id === serviceId).map((service,index) => <div className="container service-details"
                    key={index}
                >   
                    <h2>{service.name}</h2>
                    <p>{service.details}</p>
                   <img src={service.image} alt="" />
                    <p>{service.details}</p>
                </div>)
            }
            <div className="container set-apointment my-5">
                <GetApointment/>
            </div>
            

            {/* personal care  */}
            <div className="container">
            <div className="row">
                <div className="col-sm-6 personal-care">
                <h3>Personal care</h3>
                <ul>
                    <li>Teeth whitening</li>
                    <li>Dental bonding</li>
                    <li>Ceramic Veneers</li>
                    <li>Dental Crowns</li>
                    <li>Dental bridge</li>
                </ul>
                </div>
                <div className="col-sm-6 personal-care">
                <h3>Lifestyle support</h3>
                <ul>
                    <li>Plague prevention</li>
                    <li>Cavity filling</li>
                    <li>Tooth protection</li>
                    <li>Decayed teeth removal</li>
                    <li>Periodontics plastic procedures</li>
                </ul>
                </div>
            </div>
            </div>
            {/* ---------------------------------------------- */}

            <div className="blog-div">
            <Blogs></Blogs>
            </div>
        </div>
    );
};

export default ServicePage;