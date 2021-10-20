import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const {id, name, details, image} = props.service;
    const history = useHistory();

    const handleService = () => {
        history.push(`/service/${id}`)
    }
    return (
        <div>
            <Col>
            <div className="blog-card">
            <Card>
                <Card.Img variant="top" height="230px" src={image} />
                <Card.Body>
                <h2 className="my-4 blog-card-title">{name.slice(0,32)}</h2>
                <p>{details.slice(0,100)}...</p>
                <button onClick={handleService} className="primary-btn" >Get Service <FontAwesomeIcon icon={faArrowRight}/></button>
                </Card.Body>
            </Card>
            </div>
            
            </Col>
        </div>
    );
};

export default Service;