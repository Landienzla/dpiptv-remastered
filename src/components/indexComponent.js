import React from "react";
import { Carousel, Button } from "react-bootstrap";
export default function indexComponent() {
  return (
    <div>
      <Carousel fade="true">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            width="100vh"
            height="800px"
            src="https://dpiptv.com/wp-content/uploads/2020/06/connectedworld.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>QUALITY IPTV SERVICE</h3>
            <p>
              Watch 7000+ channels and thousands of movies hassle-free with
              DPIPTV
            </p>
            <Button> DISCOVER NOW </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            width="100vh"
            height="800px"
            src="https://dpiptv.com/wp-content/uploads/2020/06/FedererSmall.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>YOUR FAVOURITE SPORT? IT'S HERE</h3>
            <p>
              Tennis or football, golf or snooker, whichever your favourite
              sports is, you can find it on DPIPTV
            </p>
            <Button> DISCOVER NOW </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            width="100vh"
            height="800px"
            src="https://dpiptv.com/wp-content/uploads/2020/06/shawshank2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>COUNTLESS OPTIONS FOR FILMLOVERS</h3>
            <p>
              From latest blockbusters to all-time classics, you can find
              thousands of movies on DPIPTV
            </p>
            <Button> DISCOVER NOW </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
