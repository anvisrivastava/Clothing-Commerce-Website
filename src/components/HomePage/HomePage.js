import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./HomePage.css";
import shirt from "../../assetes/shirt.png";
import borderedSaree from "../../assetes/borderedSaree.png";
import Women from "../../assetes/Women.png";
import frock from "../../assetes/frock.png";
import Men from "../../assetes/Men.png";
import Orgenza from "../../assetes/Orgenza.png";
import OrgenzaFrock from "../../assetes/OrgenzaFrock.png";
import pants from "../../assetes/pants.png";


function HomePage() {
  return (
    <>
    <Container fluid className='style'>
      <Row>
        <Col>
        <h2 className='Trendy'>Trendy Desi Style<br/> On a Budget</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={3} className='trends'>
        <Card style={{ width: '19rem',marginLeft:"95px" }} >
      <Card.Img variant="top" src={borderedSaree} style={{width:"19rem",height:'250px'}}/>
      <Card.Body>
        <Card.Title>borderedSaree</Card.Title>
        <Card.Text>
        Fine wear, Vilagius
        </Card.Text>
        <Button variant="primary" style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={3}  className='trends'>
        <Card style={{ width: '19rem',marginLeft:"45px" }}>
      <Card.Img variant="top" src={shirt} style={{width:"19rem",height:'250px'}}/>
      <Card.Body>
        <Card.Title>EVIQE</Card.Title>
        <Card.Text>
        Men Regular Fit Formal Shirt
        </Card.Text>
        <Button variant="primary"style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={3} className='trends'>
        <Card style={{ width: '19rem',marginLeft:"-4px" }}>
      <Card.Img variant="top" src={Women} style={{width:"19rem",height:'250px'}} />
      <Card.Body>
        <Card.Title>Gulmohar Jaipur</Card.Title>
        <Card.Text>
       Pure Cotton Kurta(Yellow)
        </Card.Text>
        <Button variant="primary"style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={3} className='trends'>
        <Card style={{ width: '19rem',marginLeft:"-50px"}}>
      <Card.Img variant="top" src={Men} style={{width:"19rem",height:'250px'}}/>
      <Card.Body>
        <Card.Title>T-shirt</Card.Title>
        <Card.Text>
       New lool styles
        </Card.Text>
        <Button variant="primary" style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={3} className='trends'>
        <Card style={{ width: '19rem',marginLeft:"90px" }}>
      <Card.Img variant="top" src={frock} style={{width:"19rem",height:'250px'}} />
      <Card.Body>
        <Card.Title>frock</Card.Title>
        <Card.Text>
       Kids frock
        </Card.Text>
        <Button variant="primary" style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg={3}  className='trends'>
        <Card style={{ width: '19rem',marginLeft:"45px" }}>
      <Card.Img variant="top" src={Orgenza}  style={{width:"19rem",height:'250px'}}/>
      <Card.Body>
        <Card.Title>Orgenza</Card.Title>
        <Card.Text>
       Net Orgenza Saree
        </Card.Text>
        <Button variant="primary" style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg={3} className='trends'>
        <Card style={{ width: '19rem',marginLeft:"-5px" }}>
      <Card.Img variant="top" src={OrgenzaFrock}  style={{width:"19rem",height:'250px'}}/>
      <Card.Body>
        <Card.Title>OgenzaFrockr</Card.Title>
        <Card.Text>
       Trending OrgenzaFrock
        </Card.Text>
        <Button variant="primary" style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg={3} className='trends'>
        <Card style={{ width: '19rem',marginLeft:"-50px" }}>
      <Card.Img variant="top" src={pants}  style={{width:"19rem",height:'250px'}}/>
      <Card.Body>
        <Card.Title>Casual Pants</Card.Title>
        <Card.Text>
       Men track Pants
        </Card.Text>
        <Button variant="primary" style={{marginLeft:"50px"}}>Add to carts</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    
    </>
  );
}

export default HomePage;