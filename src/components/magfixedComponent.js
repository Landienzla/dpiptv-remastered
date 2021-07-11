import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function magfixedComponent() {
  return (
    <Container>
      <Row className="mt-5 mb-4" style={{}}>
        Die Hersteller des Mag Box hat die Adresse unseres Portals gesperrt. Es
        gibt eine Anleitung, die sperrung wieder aufzuschließen. The
        manufacturer of the Mag Box has blocked the address of our portal. In
        order to unblock your MAG device, you can watch the relevant video.
      </Row>
      <Row>
        <Col xs="4" className="m-2">
          <div style={{ backgroundColor: "#8EFECE" }} className="text-center">
            USB Disk Video
          </div>
        </Col>
        <Col xs="4" className="m-2">
          <div style={{ backgroundColor: "#8EFECE" }} className="text-center">
            MAG 250/254/270 USB Upgrade
          </div>
        </Col>
        <Col xs="4" className="m-2">
          <div style={{ backgroundColor: "#8EFECE" }} className="text-center">
            MAG 322/324/349/351 USB Upgrade
          </div>
        </Col>
      </Row>
    </Container>
  );
}
