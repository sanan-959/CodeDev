import React from "react";
import { Card, Container,  } from "react-bootstrap";

const TeacherSection = () => {
    return (
        <div className="bg-primary mt-5">
            <Container>
                <div className="row pt-4 text-white">
                    <div className="col-12 col-lg-8 mx-auto">
                        <h3 className="text-center">Our Instructors</h3>
                        <p className="text-center ">Our instructors all have 5+ years working as a web developer in the Industry</p>
                    </div>
                </div>
                <div className="row py-4 gy-3">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <Card className=''>
                            <div className='mt-3 d-flex justify-content-center'>
                                <i className="bi bi-person-bounding-box fs-1"></i>
                            </div>
                            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus.</Card.Text>
                                <div className="d-flex align-items-center gap-3 ">
                                    <a href="#"><i className="bi bi-twitter text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-facebook text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-linkedin text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-instagram text-secondary"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <Card className=''>
                            <div className='mt-3 d-flex justify-content-center'>
                                <i className="bi bi-person-bounding-box fs-1"></i>
                            </div>
                            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus.</Card.Text>
                                <div className="d-flex align-items-center gap-3 ">
                                    <a href="#"><i className="bi bi-twitter text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-facebook text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-linkedin text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-instagram text-secondary"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <Card className=''>
                            <div className='mt-3 d-flex justify-content-center'>
                                <i className="bi bi-person-bounding-box fs-1"></i>
                            </div>
                            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus.</Card.Text>
                                <div className="d-flex align-items-center gap-3 ">
                                    <a href="#"><i className="bi bi-twitter text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-facebook text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-linkedin text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-instagram text-secondary"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <Card className=''>
                            <div className='mt-3 d-flex justify-content-center'>
                                <i className="bi bi-person-bounding-box fs-1"></i>
                            </div>
                            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
                                <Card.Title>John Doe</Card.Title>
                                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus.</Card.Text>
                                <div className="d-flex align-items-center gap-3 ">
                                    <a href="#"><i className="bi bi-twitter text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-facebook text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-linkedin text-secondary"></i></a>
                                    <a href="#"><i className="bi bi-instagram text-secondary"></i></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TeacherSection;