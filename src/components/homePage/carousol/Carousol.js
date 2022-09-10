import React, {Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import './Caro.css'

function FadeCarousel () {
    return(
        <Fragment>
            <Carousel >
                <Carousel.Item interval={10000}>
                    <Image
                    className="d-block w-100"
                    src="/images/caro1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption >
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image
                    className="d-block w-100"
                    src="/images/caro1.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image
                    className="d-block w-100"
                    src="/images/caro2.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </Fragment>
    )

}
export default FadeCarousel