import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Blog.css'
const Blog = (props) => {
  const {id, title, date , image} = props.blog;

  const history = useHistory();

  const handleRoute = () => {
    history.push(`/blog/${id}`)
  }
    return (
        <div >
            <Col>
            <div className="blog-card">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <h2 className="my-4 blog-card-title">{title.slice(0,32)}...</h2>
                <button className="primary-btn" onClick={handleRoute}>Read more <FontAwesomeIcon icon={faArrowRight}/></button>
                <p className="mt-2">{date}</p>
                </Card.Body>
            </Card>
            </div>
            
            </Col>
        </div>
    );
};

export default Blog;