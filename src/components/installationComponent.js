import React from "react";
import { Col, Card, Button, Row, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
export default function installationComponent() {
  return (
    <div>
      <Container>
        <Row className="border-top border-dark mt-4 mb-4 border-bottom">
          <Col xs="2" className="mr-4">
            <Card style={{ width: "13rem" }} className="mt-4 border-0">
                <a  href="https://www.youtube.com/watch?v=CT55TmhVonE">
              <Card.Img
                variant="top"
                src="https://dpiptv.com/wp-content/uploads/2020/06/8514-Enigma2-Logo-1-1024x568.jpg"
               
              /></a>
              <Card.Body
                className="text-center"
                style={{ backgroundColor: "#EFEFEF" }}
              >
                <Card.Title>
                  <a href="https://www.youtube.com/watch?v=CT55TmhVonE">
                    ENIGMA
                  </a>
                </Card.Title>
                <Button
                  variant="primary"
                  href="https://www.youtube.com/watch?v=CT55TmhVonE"
                >
                  <Icon.Play size={25} /> Watch Tutorial
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
        <Row className="border-top border-dark mt-4 mb-4 border-bottom">
          <Col xs="2" className="mr-4">
            <Card style={{ width: "13rem" }} className="mt-4 border-0">
                <a  href="https://www.youtube.com/watch?v=CT55TmhVonE">
              <Card.Img
                variant="top"
                src="https://dpiptv.com/wp-content/uploads/2020/06/8514-Enigma2-Logo-1-1024x568.jpg"
               
              /></a>
              <Card.Body
                className="text-center"
                style={{ backgroundColor: "#EFEFEF" }}
              >
                <Card.Title>
                  <a href="https://www.youtube.com/watch?v=CT55TmhVonE">
                    ENIGMA
                  </a>
                </Card.Title>
                <Button
                  variant="primary"
                  href="https://www.youtube.com/watch?v=CT55TmhVonE"
                >
                  <Icon.Play size={25} /> Watch Tutorial
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
