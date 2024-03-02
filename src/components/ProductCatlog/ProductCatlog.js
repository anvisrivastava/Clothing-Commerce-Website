import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./ProductCatlog.css";
import OrgenzaFrock from "../../assetes/OrgenzaFrock.png";
import gown from "../../assetes/gown.png";
import PureSilk from "../../assetes/PureSilk.png";
import casualTop from "../../assetes/casualTop.png";
import designerSaree from "../../assetes/designerSaree.png";
import lehnga from "../../assetes/lehnga.png";
import Women from "../../assetes/Women.png";
// import OrgenzaFrock from "../../assetes/OrgenzaFrock.png";
// import lehnga from "../../assetes/lehnga.png";

function ProductCatlog () {
    return(
        <Container>
            <Row>
                <Col sm >
                <a href="#"><img src={OrgenzaFrock} alt="" className="women" /><br/>Orgenza Gown frock</a>
                
                </Col>
                <Col sm>
                <a href="#"><img src={casualTop} alt="" className="women" /><br/>Tops,tees & jeans set</a>
                </Col>
                <Col sm>
                <a href="#"><img src={PureSilk} alt="" className="women"/><br/>Chanderi Silk Sarees</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={gown} alt=" " className="womens"/><br/>Printed pure Cotton Gowns</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={designerSaree} alt="" className="womens" /><br/>Designer Saree Collection</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={lehnga} alt=""className="womens" /><br/>Jaipuri Lehnga Design</a>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <a href="#"><img src={Women} alt=" " className="womens"/><br/>Bel botton Long Gowns</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={OrgenzaFrock} alt="" className="womens" /><br/>Designer Orgenza Collection</a>
                </Col>
                <Col sm={4}>
                <a href="#"><img src={casualTop} alt=""className="womens" /><br/>New Casual Top Collection</a>
                </Col>
                </Row>
        </Container>
    )
}
export default ProductCatlog;