import React,{Fragment} from "react";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'


function KantorComp() {
    return(
        <Fragment>
            <Container className="py-4">
                <Row >
                    <Col className="pb-2">
                        <Image
                            style={{width:"100%"}}
                            variant="top" 
                            src="/images/avan.jpg" />
                        
                        <div className="py-4">
                            <p>Kantor Sekretariat Karang Taruna Kota Administrasi Jakarta Utara yang berada di Blok T Komplek Kantor Walikota Kota Administrasi Jakarta Utara resmi beroperasi, Jumat (12/11). Ketua Karang Taruna Kota Administrasi Jakarta Utara, Shidik Andiyansah menyatakan kesiapannya untuk berkolaborasi dan berkarya dalam membangun wilayah dan mengatasi permasalahan yang ada.</p>
                            <p>Kantor Sekretariat Karang Taruna Kota Administrasi Jakarta Utara yang berada di Blok T Komplek Kantor Walikota Kota Administrasi Jakarta Utara resmi beroperasi, Jumat (12/11). Ketua Karang Taruna Kota Administrasi Jakarta Utara, Shidik Andiyansah menyatakan kesiapannya untuk berkolaborasi dan berkarya dalam membangun wilayah dan mengatasi permasalahan yang ada.</p>
                            <p>Kantor Sekretariat Karang Taruna Kota Administrasi Jakarta Utara yang berada di Blok T Komplek Kantor Walikota Kota Administrasi Jakarta Utara resmi beroperasi, Jumat (12/11). Ketua Karang Taruna Kota Administrasi Jakarta Utara, Shidik Andiyansah menyatakan kesiapannya untuk berkolaborasi dan berkarya dalam membangun wilayah dan mengatasi permasalahan yang ada.</p>
                        </div>
                    </Col>
                    <Col md="auto" >
                        <Card border="dark">
                            <Container className="p-4">
                                <h3>Search</h3>
                                <Form className="pt-4">
                                    <Form.Group className="mb-3" htmlFor="inlineFormInputGroupUsername">                                   
                                        <Form.Control type="name" placeholder="Search" />
                                    </Form.Group>
                                    <Button variant="outline-primary" className="w-100"  type="submit">
                                        Search
                                    </Button>
                                </Form>
                                
                            </Container>
                        </Card>

                        <Card border="dark" className="mt-4">
                            <Container className="p-4">
                                <h3>Categories</h3>
                                <div className="py-2 ">
                                    
                                    <tr >Baksos</tr>
                                    <hr></hr>
                                    <tr>Baksos</tr>
                                    
                                </div>
                                
                            </Container>
                        </Card>

                        <Card border="dark" className="mt-4">
                            <Container className="p-4">
                                <h3>Popular Tags</h3>
                                    <div className="py-3">
                                        <Button variant="secondary" type="submit">
                                            Bintang
                                        </Button>
                                        <Button className="ms-2 me-2" variant="secondary" type="submit">
                                            Padang
                                        </Button>
                                        <Button variant="secondary" type="submit">
                                            Bulan
                                        </Button>
                                    </div>                    
                                
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </Fragment>
    )
}
export default KantorComp;