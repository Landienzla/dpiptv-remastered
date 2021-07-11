import React from "react";
import { Container, Form, Button,  Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function testlinkComponent() {
  return (
    <Container className="mt-5" style={{ backgroundColor: "#EFEFEF" }}>
      <Form className="m-5 p-5">
        <Col className="mb-5" style={{ fontSize: "20px" }}>
          Nach erhalt der Test Account E-Mail ist dieses 24 Stunden lang gültig,
          danach wird es deaktiviert
        </Col>
        <Form.Group as={Col} controlId="Name">
          <Form.Label className="">Name & Surname </Form.Label>
          <Form.Control
            className=""
            style={{ backgroundColor: "#EFEFEF" }}
            type="text"
            placeholder=""
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label className="">Email </Form.Label>
          <Form.Control
            className=""
            style={{ backgroundColor: "#EFEFEF" }}
            type="email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select your device</Form.Label>
          <Form.Control
            as="select"
            style={{ backgroundColor: "#EFEFEF" }}
            defaultValue="M3U / Smart TV / Kodi / VLC / Firestick / Android Box / Smartphone"
            custom
          >
            <option>
              M3U / Smart TV / Kodi / VLC / Firestick / Android Box / Smartphone
            </option>
            <option>Vu / Enigma / Dreambox</option>
            <option>Mag Box & TVIP</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicEmail">
          <Form.Label className="">MAC Address</Form.Label>
          <Form.Control
            style={{ backgroundColor: "#EFEFEF" }}
            className=""
            type="email"
            placeholder="Type the MAC address written under the box"
          />
        </Form.Group>

        <div className="text-center">
          <Button className="bg-info pl-5 pr-5 mt-2" size="lg">
            <Icon.Cursor className="mr-1" size={24} />
            <b>SEND</b>
          </Button>
        </div>
      </Form>
    </Container>
  );
}
