import React from "react";
import { Container, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const NewsLetter = () => {
    return (
        <div className="bg-primary">
            <Container>
                <div className="row py-5 align-items-center justify-content-center">
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">Sign Up For Our Newsletter</h3>
                    </div>
                    <div className="col-12 col-md-6">
                        <form>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Enter email"
                                />
                                <Button variant="dark">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewsLetter;