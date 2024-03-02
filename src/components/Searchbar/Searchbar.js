import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./Searchbar.css";
import Men from "../../assetes/Men.png";
import Women from "../../assetes/Women.png";
import kids from "../../assetes/kids.png";
import clothes from "../../assetes/clothes.png";
import Dropdown from 'react-bootstrap/Dropdown';
import Boys from "../../assetes/Boys.png";
import handloom from "../../assetes/handloom.png";

function Searchbar({ onSubmit }) {
    const [userwish, setUserWish] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(userwish);
    }
    const handleChange = (e) => {
        setUserWish(e.target.value);
        console.log(e)
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <a href="#" className="fashion">Fashion</a>
                <img src={clothes} alt="" style={{ width: "80px", borderRadius: "10px" }} />
                <input value={userwish} onChange={handleChange} placeholder="search" className="search" />

                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        <a href="./LogIn">LogIn</a>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Flipkart Plus Zone</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Orders</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Wishlist</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Rewards</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Gift Cards</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Container fluid className="cloth">
                    <Row>
                        <Col sm>
                            <a href="./ProductsDetail"><img src={Men} alt="" className="img1" />Men</a>
                        </Col>
                        <Col sm>
                            <a href="./ProductCatlog"><img src={Women} alt="" className="img1" />Women</a>
                        </Col>
                        <Col sm>
                            <a href="./KidsCollection"><img src={kids} alt="" className="img1" />kids</a>
                        </Col>
                        <Col sm>
                        <a href="./BoysCollections"><img src={Boys} alt="" className="img1" />Boys</a>
                        </Col>
                        <Col sm>
                        <a href="./HandloomCollection"><img src={handloom} alt="" className="img2" />handloom</a>
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    )
}
export default Searchbar;