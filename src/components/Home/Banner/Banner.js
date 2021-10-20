import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="container mb-5">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 carucel-img"
                    src="/assets/service-image/service-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Work with Hearts</h3>
                    <p>We care for your dental health with a great</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carucel-img"
                    src="/assets/service-image/service-2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Serve with Smile</h3>
                    <p>The smile never fades on our doctors</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carucel-img"
                    src="/assets/service-image/service-3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Help at Hand</h3>
                    <p>We are ready to check for any teeth issue at our</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;