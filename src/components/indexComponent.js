import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
export default function indexComponent() {
  return (
    <div>
      <CarouselComponent />
      <FeaturesComponent />
    </div>
  );
}

function CarouselComponent() {
  return (
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
            Watch 7000+ channels and thousands of movies hassle-free with DPIPTV
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
            Tennis or football, golf or snooker, whichever your favourite sports
            is, you can find it on DPIPTV
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
  );
}
function FeaturesComponent() {
  return (
    <Container>
      <h1 className="border-bottom border-dark" style={{ color: "red" }}>
        DPIPTV FEATURES
      </h1>
      <Row>
        <Col>

            <Container
              fluid
              className="text-center"
              style={{ backgroundColor: "#9AC2C5", color: "#fafafa" }}
            >
              <Icon.LifePreserver
                width="100px"
                height="%100"
                className="mt-4 mb-4"
              />
              <h3>
                <b style={{ fontSize: "23px" }}>SUPPORT</b>
              </h3>
              <p style={{ fontSize: "15px" }} className="pb-5">
                We provide 7/24 support for our customers
              </p>
            </Container>

        </Col>
        <Col>

          <Container
            flex
            className="text-center"
            style={{ backgroundColor: "#B39AC5", color: "#fafafa" }}
          >
            <Icon.GearWideConnected
              width="100px"
              height="%100"
              className="mt-4 mb-4"
            />
            <h3>
              <b style={{ fontSize: "23px" }}>COMPATIBLE</b>
            </h3>
            <p style={{ fontSize: "15px" }} className="pb-4">
              We support MAG, Android, iOS, XBMC/KODI, Enigma, PC, Smart TV and
              more...
            </p>
          </Container>

        </Col>
        <Col>

          <Container
            flex
            className="text-center"
            style={{ backgroundColor: "#C59D9A", color: "#fafafa" }}
          >
            <Icon.Play width="100px" height="%100" className="mt-4 mb-4" />
            <h3>
              <b style={{ fontSize: "23px" }}>FAST ZAPPING</b>
            </h3>
            <p style={{ fontSize: "15px" }} className="pb-5">
              Incredible channel zapping time, about 0.5 seconds!
            </p>
          </Container>

        </Col>
        <Col>
        
          <Container
            flex
            className="text-center"
            style={{ backgroundColor: "#ACC59A", color: "#fafafa" }}
          >
            <Icon.HddRack width="100px" height="%100" className="mt-4 mb-4" />
            <h3>
              <b style={{ fontSize: "23px" }}>POWERFUL SERVERS</b>
            </h3>
            <p style={{ fontSize: "15px" }} className="pb-5">
              Powerful servers and load balancers across Europe
            </p>
          </Container>

        </Col>
      </Row>
    </Container>
  );
}
