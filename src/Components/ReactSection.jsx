import React from "react";
import { Container } from "react-bootstrap";

const ReactPage = ()=>{
    return(
        <div className="bg-dark">
            <Container className="bg-dark text-white">
            <div className="row align-items-center mt-3 mt-lg-0 pt-3 pt-lg-0 ">
                <div className="col-12 col-md-6">
                    <h2>Learn React</h2>
                    <p className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus, tenetur ut ipsa id itaque esse maiores temporibus quidem alias atque, illo culpa.</p>
                    <button className="btn btn-secondary">Read More</button>
                </div>
                <div className="col-12 col-md-6 pt-5 pb-0 py-md-0">
                    <figure>
                        <img className="img-fluid" src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small_2x/3d-website-developer-working-on-laptop-illustration-png.png" alt="" />
                    </figure>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default ReactPage;