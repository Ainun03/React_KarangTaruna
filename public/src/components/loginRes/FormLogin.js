import React, { Fragment, useState } from "react";

import { Link, useNavigate} from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLogin () {
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };
    return(
        <Fragment>
            <Container className="py-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username or Email Address</Form.Label>
                        <Form.Control required type="email" placeholder="email@email" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        Please choose a Email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        Please choose a Password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        required
                        label="gree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button onClick={() => navigate('/')} variant="primary" type="submit">
                        Submit
                    </Button>            
                </Form>
                <p className="auth-link pt-2">Belum punya Akun? <Link to="/register">Register</Link></p>
            </Container>

        </Fragment>
    )
}
export default FormLogin;