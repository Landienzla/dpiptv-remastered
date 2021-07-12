import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import CountUp from "react-countup";
import "./indexComponent.css"
export default function indexComponent() {
  return (
    <div>
      <CarouselComponent />
      <FeaturesComponent />
      <CustomerSatisfactionComponent />
      <SecurePaymentsComponent />
      <PricingComponent />
    </div>
  );
}

function CarouselComponent() {
  return (
    <Carousel fade="true">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carouseImg"
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
    <div className="border-bottom border-grey">
      <Container>
        <h1 className="border-bottom border-grey" style={{ color: "#ACC59A" }}>
          <b>DPIPTV FEATURES</b>
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
                We support MAG, Android, iOS, XBMC/KODI, Enigma, PC, Smart TV
                and more...
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
    </div>
  );
}
function CustomerSatisfactionComponent() {
  return (
    <div className="border-bottom border-grey mt-3 ">
      <Container className="mb-5">
        <h1 className="border-bottom border-grey" style={{ color: "#ACC59A" }}>
          <b>CUSTOMER SATISFACTION</b>
        </h1>
        <Row>
          <Col>
            <Container fluid className="text-center mt-5">
              <h3>
                <CountUp start={0} end={3500} separator="," />+
              </h3>
              <Icon.People /> Customers
            </Container>
          </Col>
          <Col>
            <Container fluid className="text-center mt-5">
              <h3>
                <CountUp start={0} end={5000} separator="," suffix=" +" />
              </h3>
              <Icon.Tv /> Device Connections
            </Container>
          </Col>
          <Col>
            <Container fluid className="text-center mt-5">
              <h3>
                <CountUp start={0} end={24} />
              </h3>
              <Icon.Clock /> Hours Support
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
function SecurePaymentsComponent() {
  return (
    <div className=" mt-3 ">
      <Container>
        <h1 className="border-bottom border-grey mt-3" style={{ color: "#ACC59A" }}>
          <b>SECURE PAYMENTS WITH DPIPTV</b>
        </h1>
        <Row>
          <Col className="text-center" style={{ fontSize: "18px" }}>
            <p>
              We use industry-standart, 256-bit SSL encryption for secure
              connections. You can pay easily with <b>MasterCard, VISA</b> or{" "}
              <b>Discover</b>. Also, if you like you can make your payments with{" "}
              <b>Bitcoin</b> as well.
            </p>
            <img
              src="https://dpiptv.com/wp-content/uploads/2020/06/Payments-withPaypal4.png"
              alt="PaymentMethodsImage"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
function PricingComponent() {
  return (
    <div className=" bg-dark">
      <Container>
        <Row>
          <Col className="text-center">
            <h3
              style={{ color: "#ACC59A" }}
              className="border-bottom border-grey m-2 pb-2"
            >
              <b>PLANS & PRİCİNG</b>
            </h3>
            <p style={{ color: "#9AC2C5", fontSize: "18px" }}>
              All of our plans include
            </p>
            <p style={{ color: "white" }}>
              <Icon.Check style={{ color: "#FE968E" }} size={35} /> +7700
              channels (New Channel Updates)
            </p>
            <p style={{ color: "white" }}>
              <Icon.Check style={{ color: "#FE968E" }} size={35} />{" "}
              Multi-language VOD (New Movie Updates)
            </p>
            <p style={{ color: "white" }}>
              <Icon.Check style={{ color: "#FE968E" }} size={35} /> VPN is
              implementiert
            </p>
            <p style={{ color: "white" }}>
              <Icon.Check style={{ color: "#FE968E" }} size={35} /> Support all
              devices
            </p>
            <p style={{ color: "white" }}>
              <Icon.Check style={{ color: "#FE968E" }} size={35} /> Smart
              routing & load balancing
            </p>
            <p style={{ color: "white" }}>
              <Icon.Check style={{ color: "#FE968E" }} size={35} /> 24/7/365
              support
            </p>
            <p style={{ color: "white" }}>
              <Icon.Check style={{ color: "#FE968E" }} size={35} /> Dedicated &
              Different Server
            </p>
          </Col>
          <Row>
            <Col className="text-center" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>1 Week</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€10</h2>
                  </b>{" "}
                </p>
                <p>One Connection</p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3 pb-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>1 Month</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€20</h2>
                  </b>{" "}
                </p>
                <p>One Connection</p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3 pb-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>2 Months</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€30</h2>
                  </b>{" "}
                </p>
                <p>One Connection</p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
          </Row>

          <Row className="mt-5 mb-5">
            <Col className="text-center pb-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>3 Months</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€40</h2>
                  </b>{" "}
                </p>
                <p>One Connection</p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3 pb-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>6 Months</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€60</h2>
                  </b>{" "}
                </p>
                <p>One Connection</p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>12 Months</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€90</h2>
                  </b>{" "}
                </p>
                <p>One Connection</p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center">
            <h3
              style={{ color: "#ACC59A" }}
              className="border-bottom border-grey m-2 pb-2"
            >
              <b>PLANS FOR 2 DEVICES & 2 CONNECTIONS</b>
            </h3>
          </Col>
          <Row className="mt-2">
            <Col className="text-center" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>1 WEEK</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€20</h2>
                  </b>{" "}
                </p>
                <p>
                  <Icon.Check /> All features
                </p>
                <p>
                  <Icon.Check /> 2 Connections
                </p>
                <p>
                  <Icon.Check /> 2 Devices
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>1 MONTH</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€35</h2>
                  </b>{" "}
                </p>
                <p>
                  <Icon.Check /> All features
                </p>
                <p>
                  <Icon.Check /> 2 Connections
                </p>
                <p>
                  <Icon.Check /> 2 Devices
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>2 MONTHS</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€45</h2>
                  </b>{" "}
                </p>
                <p>
                  <Icon.Check /> All features
                </p>
                <p>
                  <Icon.Check /> 2 Connections
                </p>
                <p>
                  <Icon.Check /> 2 Devices
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
          </Row>
        </Row>
        <Row className="mt-5">
          <Row>
            <Col className="text-center" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>3 MONTHS</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€65</h2>
                  </b>{" "}
                </p>
                <p>
                  <Icon.Check /> All features
                </p>
                <p>
                  <Icon.Check /> 2 Connections
                </p>
                <p>
                  <Icon.Check /> 2 Devices
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3" style={{ backgroundColor: "#9AC2C5" }}>
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>6 MONTHS</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€90</h2>
                  </b>{" "}
                </p>
                <p>
                  <Icon.Check /> All features
                </p>
                <p>
                  <Icon.Check /> 2 Connections
                </p>
                <p>
                  <Icon.Check /> 2 Devices
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
            <Col className="text-center ml-3" style={{ backgroundColor: "#9AC2C5" }}>
            <div className="bestoffer bg-success " stlye={{  transform: `translateX(${50}px) translateY(${50}%)`}}>Best Offer</div>
            {/* Need to transform best offer div */}
              <Container>
                <p className="mt-5" style={{ fontSize: "24px" }}>
                  <b>
                    <h2>12 MONTHS</h2>
                  </b>
                </p>
                <p style={{ fontSize: "24px" }}>
                  <b>
                    <h2>€148</h2>
                  </b>{" "}
                </p>
                <p>
                  <Icon.Check /> All features
                </p>
                <p>
                  <Icon.Check /> 2 Connections
                </p>
                <p>
                  <Icon.Check /> 2 Devices
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">Buy Now</Button>
                </p>
                <div className="border border-info m-3 w-25 mx-auto" />
                <p>
                  <Button className="bg-info">
                    <Icon.CurrencyBitcoin /> Pay With Bitcoin
                  </Button>
                </p>
              </Container>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
