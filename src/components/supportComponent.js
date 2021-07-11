import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
export default function supportComponent() {
  return (
    <Container className="mt-5" style={{ backgroundColor: "#EFEFEF" }}>
      <b className="text-center m-5 ">
        Please fill in the form for your support requests
      </b>

      <Form className="m-5 p-5">
        <Form.Group controlId="Name">
          <Form.Label className="">Name </Form.Label>
          <Form.Control
            className=""
            style={{ backgroundColor: "#EFEFEF" }}
            type="text"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="">Email </Form.Label>
          <Form.Control
            className=""
            style={{ backgroundColor: "#EFEFEF" }}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label as="legend" column xs={4}>
            Reason for request
          </Form.Label>
          <Container >
            <Form.Check
              className="form-check-inline"
              type="radio"
              label="General"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />

            <Form.Check
              className="form-check-inline"
              type="radio"
              label="Sale"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />

            <Form.Check
              className="form-check-inline"
              type="radio"
              label="Support"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Container>
        </Form.Group>
        <Form.Group controlId="Message">
          <Form.Label className="">Message </Form.Label>
          <Form.Control
            className=""
            style={{ backgroundColor: "#EFEFEF" }}
            type="text"
            placeholder="Message"
            as="textarea"
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
