import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';

import { FaRestroom } from 'react-icons/fa';
import {IoSchoolSharp} from 'react-icons/io5'
import {BsCheckAll} from 'react-icons/bs'


import './content.css'

function Content () {
    return(
        <Fragment>
            <Container className="p-2 mt-3 mb-3" >
                <div className="text-center">
                    <h2>Selamat datang di Desa Pondok Kelor</h2>
                    <p className="pt-2">Karang Taruna merupakan organisasi kepemudaan di Indonesia. Karang Taruna tersebar di berbagai wilayah Indonesia, tidak terkecuali di DKI Jakarta. Karang Taruna adalah wadah pengembangan generasi muda nonpartisan, yang tumbuh berdasarkan kesadaran dan rasa tanggung jawab sosial dari, oleh, serta untuk masyarakat, khususnya generasi muda di wilayah Desa/Kelurahan atau komunitas sosial sederajat.</p>
                </div>
            <Row xs={1} md={3} className="g-4">
                {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
                    <Col>
                        <div className="badge hover-overlay w-100 text-center">
                            <Badge  pill className="rounded-circle p-4 d-inline-flex align-items-center justify-content-center w-80" text="dark" >
                                <FaRestroom size={50}/>
                            </Badge>
                        </div>
                        <div className="pt-2">
                            <Card.Body className="text-center">
                                <Card.Title >Keanggotaan</Card.Title>         
                                <Card.Text text="sm">
                                Keanggotaan Karang Taruna menganut stelsel pasif. Artinya seluruh anggota masyarakat yang berusia 13-45 tahun dalam Iingkungan Kelurahan merupakan Warga Karang Taruna.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                {/* ))} */}
                    <Col>
                            <div className="badge hover-overlay w-100 text-center">
                                <Badge  pill className="rounded-circle p-4 d-inline-flex align-items-center justify-content-center w-80" text="dark" >
                                    <IoSchoolSharp size={50}/>
                                </Badge>
                            </div>
                            <div className="pt-2">
                                <Card.Body className="text-center">
                                    <Card.Title >Tugas Pokok</Card.Title>         
                                    <Card.Text text="sm">
                                    Karang Taruna memiliki tugas pokok secara bersama-sama dengan Pemerintah, Pemerintah Daerah, Pemerintah Kota Administrasi/Kabupaten Administrasi, serta masyarakat dalam pembinaan generasi muda dan kesejahteraan sosial.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col>
                            <div className="badge hover-overlay w-100 text-center">
                                <Badge  pill className="rounded-circle p-4 d-inline-flex align-items-center justify-content-center w-80" text="dark" >
                                    <BsCheckAll size={50}/>
                                </Badge>
                            </div>
                            <div className="pt-2">
                                <Card.Body className="text-center">
                                    <Card.Title >Program Kerja</Card.Title>         
                                    <Card.Text text="sm">
                                    Karang Taruna bertanggung jawab untuk menetapkan program kerja berdasarkan mekanisme, potensi, sumber, kemampuan, dan kebutuhan Karang Taruna setempat.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default Content;