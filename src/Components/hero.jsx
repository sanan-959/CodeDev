import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CustomModal from "./Modal";


const HeroSection = ()=>{
    const [showModal, setShowModal] = useState(false)
    
    const handleOpen = ()=> setShowModal(true)
    const handleClose =()=> setShowModal(false)
    const handleSave = ()=>{
        console.log('Model Save');
        setShowModal(false)   
    }
    return(
        <div className="bg-dark">
            <CustomModal show={showModal} handleClose={handleClose} title='My Modal' onSave={handleSave}>
                <p>My Name is Sanan Nawaz</p>
            </CustomModal>
            <Container className="bg-dark text-white">
            <div className="row py-5 align-items-center ">
                <div className="col-12 col-md-6">
                    <h2>Become a <span>Web Developer</span></h2>
                    <p className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus, tenetur ut ipsa id itaque esse maiores temporibus quidem alias atque, illo culpa.</p>
                    <button className="btn btn-primary" onClick={handleOpen}>Start the Enrollment</button>
                </div>
                <div className="col-12 col-md-6 py-5 py-md-0">
                    <figure>
                        <img className="img-fluid" src="https://static.vecteezy.com/system/resources/thumbnails/011/153/363/small_2x/3d-web-developer-working-on-project-illustration-png.png" alt="" />
                    </figure>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default HeroSection;