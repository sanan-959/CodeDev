// import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const CradPage =()=> {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3 p-3">
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem' }} className='mx-auto'>
          <Card.Img variant="top" src={product.image} height="200" style={{ objectFit: 'contain' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}




export default CradPage;
