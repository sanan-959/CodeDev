import React from "react";
import { Container } from "react-bootstrap";


const FooterSection = ()=>{
    return(
        <div className="bg-dark">
            <Container>
                <div className="row py-3">
                    <div className="col-12 col-lg-8 mx-auto">
                        <p className="text-white text-center">Copyright@2025CodeDev</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FooterSection;