import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Woollen from "../../assetes/Woollen.png";
import Button from 'react-bootstrap/Button';
import "./ShoppingCart.css";
import winterWear from "../../assetes/winterWear.png";
import hangingShirt from "../../assetes/hangingShirt.png";
import hangingCloth from "../../assetes/hangingCloth.png";


function Shopping() {
    return (
        <Container fluid>
            <Row className='winter'>
                <Col sm={6}style={{backgroundColor: "rgba(211, 211, 211, 0.511)"}}>
                    <img src={Woollen} alt="" className='hanging' />
                </Col>
                <Col sm={6} style={{marginTop:"6%"}}>
                   <h4>Neprock Clothing Rack, Hanging Clothes Rods</h4>
                   <p>100+ bought in past month<br/>+5 colors/patterns</p>
                   <p>₹399</p>
                   <p style={{backgroundColor:"#1edb1ea1",width:"6rem",textAlign:"center"}}>Save 10% </p>
                   <Button variant="warning" className='button'>Add to Cart</Button>
                </Col>
            </Row>
            <Row className='winter'>
                <Col sm={6} style={{backgroundColor: "rgba(211, 211, 211, 0.511)"}}>
                    <img src={winterWear} alt="" className='hanging' />
                </Col>
                <Col sm={6}style={{marginTop:"6%"}}>
                   <h4>KDF Women's Fleece Jeans Women High Waisted Straight Jeans</h4>
                   <p>80+ bought in past month<br/>+2 colors/patterns</p>
                   <p>₹300</p>
                   <p style={{backgroundColor:"#1edb1ea1",width:"6rem",textAlign:"center"}}>Save 15%</p>
                   <Button variant="warning" className='button'>Add to Cart</Button>
                </Col>
            </Row>
            <Row className='winter'>
                <Col sm={6} style={{backgroundColor: "rgba(211, 211, 211, 0.511)"}}>
                    <img src={hangingShirt} alt="" className='hanging' />
                </Col>
                <Col sm={6} style={{marginTop:"6%"}}>
                   <h4>Double Rod Clothing Garment, Rack, Rolling Clothes Organizer on Wheels for Hanging Clothes</h4>
                   <p>100+ bought in past month<br/>+5 colors/patterns</p>
                   <p>₹499</p><br/>
                   <p style={{backgroundColor:"red", color:"white",width:"8rem",textAlign:"center"}}>Limited time deal</p>
                   <Button variant="warning" className='button'>Add to Cart</Button>
                </Col>
            </Row>
            <Row className='winter'>
                <Col sm={6} style={{backgroundColor: "rgba(211, 211, 211, 0.511)"}}>
                    <img src={hangingCloth} alt="" className='hanging' />
                </Col>
                <Col sm={6} style={{marginTop:"6%"}}>
                   <h4>Heavy Duty Rolling Garment Rack,Portable Clothes Rack for Hanging Clothes</h4>
                   <p>100+ bought in past month<br/>+5 colors/patterns</p>
                   <p>₹599</p>
                   <p style={{backgroundColor:"#1edb1ea1",width:"6rem",textAlign:"center"}}>Save 40%</p>
                   <Button variant="warning" className='button'>Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Shopping;