import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./ProductsDetail.css";
import pants from "../../assetes/pants.png";
import menCoat from "../../assetes/menCoat.png";
import kurta from "../../assetes/kurta.png";
import Boys from "../../assetes/Boys.png";
import colorShirt from "../../assetes/colorShirt.png";
import trackSuit from "../../assetes/trackSuit.png";
import Men from "../../assetes/Men.png";
import shirt from "../../assetes/shirt.png";

function ProductsDetail () {
    return(
        <Container>
            <Row>
                <Col sm >
                <a href="#"><img src={pants} alt="" className="mens" /><br/>Men Solid Track Pant</a>
                
                </Col>
                <Col sm>
                <a href="#"><img src={kurta} alt="" className="mens" /><br/>Printed Cotton Blend kurta</a>
                </Col>
                <Col sm>
                <a href="#"><img src={Boys} alt="" className="mens"/><br/>Kids Causal T-shirts Shorts</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={menCoat} alt=" " className="mens1"/><br/>Solid Men Waistcoat</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={colorShirt} alt="" className="mens1" /><br/>Men Coloblock Polo Neck</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={trackSuit} alt=""className="mens1" /><br/>Solid Men Track Suit</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={Men} alt=" " className="mens1"/><br/>Solid Men T-shirts</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={pants} alt="" className="mens1" /><br/>Stylish Cotton Track Pant</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={shirt} alt=""className="mens1" /><br/>Formal plane Shirts</a>
                </Col>
                </Row>
        </Container>
    )
}
export default ProductsDetail;