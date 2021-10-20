import React from 'react';
import { Row } from 'react-bootstrap';
import useServiceFetch from '../../hooks/useServiceFetch';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServiceFetch();
    return (
        <div className="container">
            <h2 className="heading-txt text-center my-5">Our services</h2>
            <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service 
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </Row>
        </div>
    );
};

export default Services;