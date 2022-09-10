import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Event () {
    return(
        <Fragment>
            <Container className="py-3">
                <h1 className="pt-4 pb-2">
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
export default Event;