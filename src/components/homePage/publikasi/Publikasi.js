import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

import {useNavigate} from 'react-router-dom'

import './publikasi.css'

function Publikasi () {
    const navigate = useNavigate();
    return(
        <Fragment>
            <div className="bg-secondary pb-4">
                <Container className="py-4  ">
                    <h2 className="font pt-2">Publikasi Karangtaruna Pondok Kelor</h2>
                    <Row xs={1} md={3} className="pt-2 g-4">
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                        <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                        // variant="top" 
                                        src="/images/avan.jpg" />
                                            <Card.Body 
                                                onClick={() => navigate('/kantor-sekretariat')}
                                                style={{
                                                    borderTopRightRadius:"30px",
                                                    borderTopLeftRadius:"30px",
                                                    borderBottomRightRadius:"30px",
                                                    borderBottomLeftRadius:"30px",
                                                }}
                                                className=" back text-center">
                                                <Card.Title >Kantor Sekretariat</Card.Title>         
                                                <Card.Text>
                                                Keanggotaan Karang Taruna menganut stelsel pasif. Artinya seluruh anggota masyarakat yang berusia 13-45 tahun dalam Iingkungan Kelurahan merupakan Warga Karang Taruna.
                                                </Card.Text>
                                            </Card.Body>                         
                                        
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                        <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                        // variant="top" 
                                        src="/images/nyet.jpg" />
                                        <Card.Body 
                                            style={{
                                                borderTopRightRadius:"30px",
                                                borderTopLeftRadius:"30px",
                                                borderBottomRightRadius:"30px",
                                                borderBottomLeftRadius:"30px",
                                            }}
                                            className=" back text-center">
                                            <Card.Title >title</Card.Title>         
                                            <Card.Text>
                                            Keanggotaan Karang Taruna menganut stelsel pasif. Artinya seluruh anggota masyarakat yang berusia 13-45 tahun dalam Iingkungan Kelurahan merupakan Warga Karang Taruna.
                                            </Card.Text>
                                        </Card.Body>                         
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                        <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                        // variant="top" 
                                        src="/images/bung.jpg" />
                                        <Card.Body 
                                            style={{
                                                borderTopRightRadius:"30px",
                                                borderTopLeftRadius:"30px",
                                                borderBottomRightRadius:"30px",
                                                borderBottomLeftRadius:"30px",
                                            }}
                                            className=" back text-center">
                                            <Card.Title >title</Card.Title>         
                                            <Card.Text>
                                            Keanggotaan Karang Taruna menganut stelsel pasif. Artinya seluruh anggota masyarakat yang berusia 13-45 tahun dalam Iingkungan Kelurahan merupakan Warga Karang Taruna.
                                            </Card.Text>
                                        </Card.Body>                         
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                        <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                        // variant="top" 
                                        src="/images/avan.jpg" />
                                        <Card.Body 
                                            style={{
                                                borderTopRightRadius:"30px",
                                                borderTopLeftRadius:"30px",
                                                borderBottomRightRadius:"30px",
                                                borderBottomLeftRadius:"30px",
                                            }}
                                            className=" back text-center">
                                            <Card.Title >title</Card.Title>         
                                            <Card.Text>
                                            Keanggotaan Karang Taruna menganut stelsel pasif. Artinya seluruh anggota masyarakat yang berusia 13-45 tahun dalam Iingkungan Kelurahan merupakan Warga Karang Taruna.
                                            </Card.Text>
                                        </Card.Body>                         
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                        <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                        // variant="top" 
                                        src="/images/nyet.jpg" />
                                        <Card.Body 
                                            style={{
                                                borderTopRightRadius:"30px",
                                                borderTopLeftRadius:"30px",
                                                borderBottomRightRadius:"30px",
                                                borderBottomLeftRadius:"30px",
                                            }}
                                            className=" back text-center">
                                            <Card.Title >title</Card.Title>         
                                            <Card.Text>
                                            Keanggotaan Karang Taruna menganut stelsel pasif. Artinya seluruh anggota masyarakat yang berusia 13-45 tahun dalam Iingkungan Kelurahan merupakan Warga Karang Taruna.
                                            </Card.Text>
                                        </Card.Body>                         
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                        <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                        // variant="top" 
                                        src="/images/bung.jpg" />
                                        <Card.Body 
                                            style={{
                                                borderTopRightRadius:"30px",
                                                borderTopLeftRadius:"30px",
                                                borderBottomRightRadius:"30px",
                                                borderBottomLeftRadius:"30px",
                                            }}
                                            className=" back text-center">
                                            <Card.Title >title</Card.Title>         
                                            <Card.Text>
                                            Keanggotaan Karang Taruna menganut stelsel pasif. Artinya seluruh anggota masyarakat yang berusia 13-45 tahun dalam Iingkungan Kelurahan merupakan Warga Karang Taruna.
                                            </Card.Text>
                                        </Card.Body>                         
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}
export default Publikasi;