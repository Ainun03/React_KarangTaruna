import React, { Fragment } from "react";

import Container from "react-bootstrap/esm/Container";
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

function AgendaComp(){
    return(
        <Fragment>
            <div className="position-relative">
                <Container className="">
                    <div className="position-absolute d-inline-flex h-100 justify-content-start align-items-center">   
                           <div>
                                <div>
                                    <h1 className="text-warning" > Event</h1>                 
                                </div>
                                <div className="d-flex" >
                                    <p className="text-warning">Karangtaruna</p>
                                    <p className="text-white px-2"> {'>'} </p>
                                    <p className="text-white">   Event </p>
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

            <Container className="py-5">
                <h1 className="pt-4 pb-4">
                    Upcoming Events
                </h1>
                <Form.Group className="mb-3">
                    <Form.Control 
                    style={{
                        height:"4rem"
                    }} 
                    placeholder="No Events Available" disabled />
                </Form.Group>
            </Container>
        </Fragment>
    )
}
export default AgendaComp;