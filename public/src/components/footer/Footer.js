import React, { Fragment } from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaRss } from 'react-icons/fa';
import {BiCopyright} from 'react-icons/bi';

import "./Footer.css"

function Footer (){
    return(
        <Fragment>
            <div className="bg-secondary pt-4">
                <Container className="text-center pt-5 pb-2 ">
                              
                        <div className="d-flex justify-content-center "> 
                            <div className="px-2 ">
                                <Badge pill className="rounded d-inline-flex align-items-center justify-content-center"  text="dark" variant="outline-primary" >
                                    <FaFacebookF size={20}/>                       
                                </Badge>
                            </div >
                            <div className="px-2">
                                <Badge pill className="rounded d-inline-flex align-items-center justify-content-center" text="dark" variant="outline-primary" >
                                    <BsTwitter size={20}/>                       
                                </Badge>                  
                            </div>
                            <div className="px-2">
                                <Badge pill className="rounded d-inline-flex align-items-center justify-content-center" text="dark" variant="outline-primary" >
                                    <BsYoutube size={20}/>                       
                                </Badge>    
                            </div>
                            <div className="px-2">
                                <Badge pill className="rounded d-inline-flex align-items-center justify-content-center" text="dark" variant="outline-primary" >
                                    <BsInstagram size={20}/>                       
                                </Badge> 
                            </div>
                            <div className="px-2">
                                <Badge pill className="rounded d-inline-flex align-items-center justify-content-center" text="dark" variant="outline-primary" >
                                    <FaRss size={20}/>                       
                                </Badge>
                            </div>
                        </div>
                </Container>
                    <Container className="pb-4">
                        <Row className="text-center">
                                <Col xs lg="2" >
                                    <div className="pt-3">
                                        <Image
                                        alt=""
                                        src="/images/logoK.jpg"
                                        width="30"
                                        height="25"
                                        className="d-inline-block"
                                        />{" "}
                                        <span text-lg className="">
                                        Karang Taruna
                                        </span>
                                    </div>
                                    </Col>
                                    <Col md={{ span: 8, offset: 1 }}>
                                    <div className="pt-3">
                                        <p>
                                        <BiCopyright size={15} className="mx-1"/>                             
                                            Copyright Karangtarunapondokkelor 2022. Designed and Developed by Karangtaruna Pondok Kelor
                                        </p>
                                        <p>
                                            
                                        </p>
                                    </div>
                                </Col>
                        </Row>      
                    </Container>
            </div>
        </Fragment>
    )
}
export default Footer;