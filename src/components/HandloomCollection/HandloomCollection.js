import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./HandloomCollection.css";
import bedsheet from "../../assetes/bedsheet.png";
import floorMates from "../../assetes/floorMates.png";
import curtains from "../../assetes/curtains.png";
import blanket from "../../assetes/blanket.png";
import kitchenApron from "../../assetes/kitchenApron.png";
import towel from "../../assetes/towel.png";
import pillow from "../../assetes/pillow.png";
import tableCloth from "../../assetes/tableCloth.png";

function HandloomCollection () {
    return(
        <Container>
            <Row>
                <Col sm >
                <a href="#"><img src={bedsheet} alt="" className="handloom" /><br/>Cotton Jaipuri Print Bedsheet </a>
                </Col>
                <Col sm>
                <a href="#"><img src={blanket} alt="" className="handloom" /><br/>Blanket for Heavy Winter </a>
                </Col>
                <Col sm>
                <a href="#"><img src={curtains} alt="" className="handloom"/><br/>Darkening Window Curtain</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={floorMates} alt=" " className="handlooms"/><br/>Microfiber,Polyster Floor Mat</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={kitchenApron} alt="" className="handlooms" /><br/>JMI Cotton, Polyster Chef's Apron</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={towel} alt=""className="handlooms" /><br/>MicroFiber Bath Towel</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={tableCloth} alt=" " className="handlooms"/><br/>Dinning Table Polyster Cloth</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={pillow} alt="" className="handlooms" /><br/>JMI Cotton, Polyster Pillow</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={bedsheet} alt=""className="handlooms" /><br/>Handllom Jaipuri Bedsheet</a>
                </Col>
                </Row>
        </Container>
    )
}
export default HandloomCollection;