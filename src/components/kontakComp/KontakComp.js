import React, { Fragment } from "react";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {FaMapMarkerAlt} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';

function KontakComp() {
    return(
        <Fragment>
            <Container className="py-4">
                <Row xs={1} md={3}>
                    <Col className="pb-2">
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="d-flex position-relative">
                                        <div className="">
                                            <Card.Body>
                                                <Card.Title >Address</Card.Title>         
                                                <Card.Text>
                                                    Blok T Komplek Kantor Paiton Probolinggo
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="px-2 position-absolute h-100 w-100 align-items-center d-inline-flex justify-content-end " >
                                            <FaMapMarkerAlt size={25}/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex position-relative">
                                        <div className="">
                                            <Card.Body>
                                                <Card.Title >Email</Card.Title>         
                                                <Card.Text>
                                                    Pondok@yyy
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="px-2 position-absolute h-100 w-100 align-items-center d-inline-flex justify-content-end " >
                                            <MdOutlineEmail size={25}/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex position-relative">
                                        <div className="">
                                            <Card.Body>
                                                <Card.Title >Phone</Card.Title>         
                                                <Card.Text>
                                                   +6661111
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="px-2 position-absolute h-100 w-100 align-items-center d-inline-flex justify-content-end " >
                                            <BsTelephoneFill size={25}/>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="">
                                        <Card.Body>
                                            <Card.Title >Find Us</Card.Title>         
                                            <Card.Link className=" text-dark border  px-1 pb-1 border-dark" href="#"><FaFacebookF size={18}/></Card.Link>
                                            <Card.Link className=" text-dark border ms-2 px-1 pb-1 border-dark" href="#"><AiOutlineTwitter size={20}/></Card.Link>
                                            <Card.Link className=" text-dark border ms-2 px-1 pb-1 border-dark" href="#"><AiOutlineGooglePlus size={20}/></Card.Link>
                                            <Card.Link className=" text-dark border ms-2 px-1 pb-1 border-dark" href="#"><AiFillYoutube size={20}/></Card.Link>
                                            <Card.Link  className=" text-dark border ms-2 px-1 pb-1 border-dark" href="#"><AiOutlineInstagram size={20}/></Card.Link>
                                        </Card.Body>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <h1>Contact With Us</h1>
                        <Form>
                            <Form.Group className="mb-3" htmlFor="inlineFormInputGroupUsername">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" htmlFor="inlineFormInputGroupSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="name" placeholder="Enter Subject" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Massage (optional)</Form.Label>
                                <Form.Control as="textarea" rows={5} type="textarea" placeholder="Enter Massage" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default KontakComp;