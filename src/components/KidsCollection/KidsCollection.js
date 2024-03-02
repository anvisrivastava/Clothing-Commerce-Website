import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./KidsCollection.css";
import Boys from "../../assetes/Boys.png";
import kidsGown from "../../assetes/kidsGown.png";
import kidsTop from "../../assetes/kidsTop.png";
import frock from "../../assetes/frock.png";
import kidsWear from "../../assetes/kidsWear.png";
import kidsEthenic from "../../assetes/kidsEthenic.png";
import kids from "../../assetes/kids.png";

function  KidsCollection() {
    return(
        <Container>
            <Row>
                <Col sm >
                <a href="#"><img src={Boys} alt="" className="kid" /><br/>Comfortable dailywear sets </a>
                
                </Col>
                <Col sm>
                <a href="#"><img src={frock} alt="" className="kid" /><br/>Casual Kids Frock Dailywear</a>
                </Col>
                <Col sm>
                <a href="#"><img src={kidsTop} alt="" className="kid"/><br/>New Styles Printed Tops</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={kidsGown} alt=" " className="kids"/><br/>Baby Girls Red Gowns</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={kidsWear} alt="" className="kids" /><br/>Ethenic Fashion Wear</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={kidsEthenic} alt=""className="kids" /><br/>Kids Ethenic Partywear</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={kidsTop} alt=" " className="kids"/><br/>Kids cotton Black Tops</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={kids} alt="" className="kids" /><br/>Fashion Wear trends Top</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={frock} alt=""className="kids" /><br/>Pure Cotton Kids frock</a>
                </Col>
                </Row>
        </Container>
    )
}
export default KidsCollection;