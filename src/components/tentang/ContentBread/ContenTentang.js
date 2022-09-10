import React, { Fragment } from "react";

import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';

function TentangBread() {
    return(
        <Fragment>
            <div className="position-relative">
                <Container className="">
                    <div className="position-absolute d-inline-flex h-100 justify-content-start align-items-center">   
                           <div>
                                <div>
                                    <h1 className="text-warning" > Tentang</h1>                 
                                </div>
                                <div className="d-flex" >
                                    <p className="text-warning">Karangtaruna</p>
                                    <p className="text-white px-2"> {'>'} </p>
                                    <p className="text-white">   Tentang </p>
                                </div>
                                
                           </div>
                    </div>
                </Container>            
                <div className="bg-secondary">
                    <Image 
                    src="/images/event1.jpg"
                    alt="bg"
                    style={{
                    width:"100%",
                    height:"100%"
                    }}
                    />
                </div>           
            </div>
            <Container className="py-4">
                <Row xs={1} md={2} >
                    <Col>
                        <div className="">
                            <h1>Karang Taruna Jakarta Utara</h1>
                            <p>Karang Taruna merupakan organisasi kepemudaan di Indonesia. Karang Taruna tersebar di berbagai wilayah Indonesia, tidak terkecuali di Jakarta Utara. Karang Taruna adalah wadah pengembangan generasi muda nonpartisan, yang tumbuh berdasarkan kesadaran dan rasa tanggung jawab sosial dari, oleh, serta untuk masyarakat, khususnya generasi muda di wilayah Desa/Kelurahan atau komunitas sosial sederajat.</p>
                            <h1>Karang Taruna Jakarta Utara</h1>
                            <p>Karang Taruna merupakan organisasi kepemudaan di Indonesia. Karang Taruna tersebar di berbagai wilayah Indonesia, tidak terkecuali di Jakarta Utara. Karang Taruna adalah wadah pengembangan generasi muda nonpartisan, yang tumbuh berdasarkan kesadaran dan rasa tanggung jawab sosial dari, oleh, serta untuk masyarakat, khususnya generasi muda di wilayah Desa/Kelurahan atau komunitas sosial sederajat.</p>
                        </div>
                        </Col>
                    <Col>
                        <Card.Img src="/images/nyet.jpg" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default TentangBread;