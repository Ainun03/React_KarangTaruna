import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './foto.css'

function Foto () {
    return(
        <Fragment>
            <Container >
                <h2 
                style={{
                    color:"lightskyblue"
                }} 
                className="pt-5 pb-3">
                    Foto Kegiatan Karangtaruna
                </h2>
                <div className="text-center pb-4">
                    <Button size="lg" 
                    style={{
                        width:"5rem"
                    }} 
                    variant="primary">All</Button>{' '}
                </div>
                <Row xs={3} md={4} className="g-4">
                        <Col>
                            <Card.Img 
                            className="transf"
                            style={{
                                width:"100%",
                                height:"100%",
                                borderTopRightRadius:"30px",
                                borderTopLeftRadius:"30px",
                            }} 
                            variant="top" 
                            src="/images/publi1.jpg" />
                        </Col>
                        <Col>
                            <Card.Img 
                            className="transf"
                            style={{
                                width:"100%",
                                height:"100%",
                                borderTopRightRadius:"30px",
                                borderTopLeftRadius:"30px",
                                borderBottomRightRadius:"30px",
                                borderBottomLeftRadius:"30px",
                            }} 
                            // variant="top" 
                            src="/images/publi2.jpg" />

                        </Col>
                        <Col>
                            <Card.Img 
                            className="transf"
                            style={{
                                width:"100%",
                                height:"100%",
                                borderTopRightRadius:"30px",
                                borderTopLeftRadius:"30px",
                            }} 
                            variant="top" 
                            src="/images/publi3.jpg" />                            
                        </Col>
                        <Col >
                            <Card.Img  
                            className="transf "
                            style={{
                                width:"100%",
                                height:"100%",
                                borderTopRightRadius:"30px",
                                borderTopLeftRadius:"30px",
                            }} 
                            variant="top" 
                            src="/images/panjat.jpg" />

                        </Col>
                </Row>
            </Container>
        </Fragment>
    )

}
export default Foto;