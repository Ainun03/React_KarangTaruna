import React, { Fragment } from "react";

import Container from "react-bootstrap/esm/Container";
import Image from 'react-bootstrap/Image'

function RegisterResearch () {
    return(
        <Fragment>
                <div className="position-relative">
                <Container className="">
                    <div className="position-absolute d-inline-flex h-100 justify-content-start align-items-center">   
                           <div>
                                <div>
                                    <h1 className="text-warning" > Register</h1>                 
                                </div>
                                <div className="d-flex" >
                                    <p className="text-warning">Karangtaruna</p>
                                    <p className="text-white px-2"> {'>'} </p>
                                    <p className="text-white">   Register </p>
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
        </Fragment>
    )
}
export default RegisterResearch;