import Carousel from 'react-bootstrap/Carousel';
import kurti from "../../assetes/kurti.png";
import kurta from "../../assetes/kurta.png";
import saree from "../../assetes/saree.png";
import shirt from "../../assetes/shirt.png";
import kids from "../../assetes/kids.png";
import ethenic from "../../assetes/ethenic.png";
import huddy from "../../assetes/huddy.png";


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={kurta} alt="" style={{width:"1500px",height:"700px"}}/>
        <Carousel.Caption>
          New Arivals<br/> Men's kurta
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={kurti} alt=""  style={{width:"1500px",height:"600px"}}/>
        <Carousel.Caption>
          Trendy Kurti
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={saree} alt="" style={{width:"1000px",height:"700px",marginLeft:"240px"}}/>
        <Carousel.Caption>
          New designer Saree
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={kids} alt=""style={{width:"1500px",height:"600px"}} />
        <Carousel.Caption>
          Baby girl Top
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={shirt} alt="" style={{width:"1500px",height:"600px"}}/>
        <Carousel.Caption>
          Slim Fit Fromal Shirt
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={ethenic} alt="" style={{width:"1500px",height:"600px"}}/>
        <Carousel.Caption>
          trending ethenic wear
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={huddy} alt="" style={{width:"1500px",height:"600px"}}/>
        <Carousel.Caption>
          Hooded Sweatshirt
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;