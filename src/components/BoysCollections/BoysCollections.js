import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./BoysCollections.css";
import huddy from "../../assetes/huddy.png";
import quaterPant from "../../assetes/quaterPant.png";
import trackSuit from "../../assetes/trackSuit.png";
import Tshirts from "../../assetes/Tshirts.png";
import boysKurta from "../../assetes/boysKurta.png";
import comboTshirts from "../../assetes/comboTshirts.png";
import Men from "../../assetes/Men.png";
import Boys from "../../assetes/Boys.png";


function BoysCollections () {
    return(
        <Container>
            <Row>
                <Col sm >
                <a href="#"><img src={huddy} alt="" className="women" /><br/>Printed Hooded Sweatshirt</a>
                
                </Col>
                <Col sm>
                <a href="#"><img src={Tshirts} alt="" className="women" /><br/>Woollen wear Sweatshirt</a>
                </Col>
                <Col sm>
                <a href="#"><img src={trackSuit} alt="" className="women"/><br/>Comfortable Track suit </a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={quaterPant} alt=" " className="womens"/><br/>Pure Cotton dailywear Pant</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={boysKurta} alt="" className="womens" /><br/>Festive Kurta Collection</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={comboTshirts} alt=""className="womens" /><br/>ComboPacks T-shirts</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={Men} alt=" " className="womens"/><br/>Cotton dailywear T-shirts</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={Boys} alt="" className="womens" /><br/>Boys Daily Wear set</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={huddy} alt=""className="womens" /><br/>Yellow huddy collections</a>
                </Col>
                </Row>
        </Container>
    )
}
export default BoysCollections;