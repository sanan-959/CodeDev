import React from "react";
import { Container } from "react-bootstrap";


const FundamantelPage = ()=>{
    return(
        <Container className="">
            <div className="row py-1 align-items-center ">
                <div className="col-12 col-md-6 pb-0 py-md-0">
                    <figure>
                        <img className="img-fluid" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?semt=ais_hybrid&w=740" alt="" />
                    </figure>
                </div>
                <div className="col-12 col-md-6">
                    <h2>Learn The Fundamentals</h2>
                    <p className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus, tenetur ut ipsa id itaque esse maiores temporibus quidem alias atque, illo culpa.</p>
                    <button className="btn btn-secondary"><i className="bi bi-caret-right"></i> Read More</button>
                </div>
                
            </div>
        </Container>
    )
}

export default FundamantelPage;