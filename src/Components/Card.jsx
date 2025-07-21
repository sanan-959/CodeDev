
import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CradPage =()=> {

  return (
    <Container>
      <div className='row py-5 '>
        <div className='col-12 col-sm-6 col-lg-4 pb-3 pb-lg-0'>
          <Card className='bg-dark text-white'>
            <div className='mt-3 d-flex justify-content-center'>
              <i className="bi bi-laptop fs-1"></i>
            </div>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
              <Card.Title>Virtual</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus, tenetur ut ipsa id itaque esse maiores temporibus quidem alias atque, illo culpa.</Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-12 col-sm-6 col-lg-4 pb-3 pb-lg-0'>
          <Card className='bg-secondary text-white'>
            <div className='mt-3 d-flex justify-content-center'>
              <i className="bi bi-person-bounding-box fs-1"></i>
            </div>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
              <Card.Title>Hybrid</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus, tenetur ut ipsa id itaque esse maiores temporibus quidem alias atque, illo culpa.</Card.Text>
              <Button variant='dark'>Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-12 col-sm-6 col-lg-4 pb-3 pb-lg-0'>
          <Card className='bg-dark text-white'>
            <div className='mt-3 d-flex justify-content-center'>
              <i className="bi bi-person fs-1"></i>
            </div>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center'>
              <Card.Title>In Person</Card.Title>
              <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae. Repellendus exercitationem nisi beatae quam placeat necessitatibus, tenetur ut ipsa id itaque esse maiores temporibus quidem alias atque, illo culpa.</Card.Text>
              <Button variant='primary'>Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}




export default CradPage;
