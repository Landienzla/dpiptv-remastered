import React, {useState} from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import axios from 'axios'
export default function SupportComponent() {
  const [message,messageUpdate] = useState({
    Name: "",
    Email: "",
    Reason: "",
    Message: ""
  })

const changeHandler = e =>{
  const {id,value} = e.target
  messageUpdate((prevState)=>({
    ...prevState,
    [id]: value,
  }))
  console.log(message)
}
const radioButtonHandler = () =>{
  // console.log(document.querySelector('input[name="RadioButton"]:checked').id);
  messageUpdate((prevState)=>({
    ...prevState,
    Reason: document.querySelector('input[name="RadioButton"]:checked').id
  }))
}
const sendSupportRequest = (e) =>{
  e.preventDefault()
  axios.post("http://localhost:5000/support/request",message).then(resp=>console.log(resp.data)).catch(err=>console.log(err))
}
  return (
    <Container className="mt-5" style={{ backgroundColor: "#EFEFEF" }}>
      <b className="text-center m-5 ">
        Please fill in the form for your support requests
      </b>

      <Form className="m-5 p-5" onSubmit={sendSupportRequest}>
        <Form.Group controlId="Name">
          <Form.Label className="">Name </Form.Label>
          <Form.Control
            className=""
            style={{ backgroundColor: "#EFEFEF" }}
            type="text"
            placeholder="Name"
            required
            onChange={changeHandler}
            controlId="Name"
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label className="">Email </Form.Label>
          <Form.Control
            className=""
            style={{ backgroundColor: "#EFEFEF" }}
            type="email"
            placeholder="Email"
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group as={Row} controlId="radio">
          <Form.Label as="legend" column xs={4}>
            Reason for request
          </Form.Label>
          <Container >
            <Form.Check
              className="form-check-inline"
              type="radio"
              label="General"
              name="RadioButton"
              id="General"
              onClick={radioButtonHandler}
            />

            <Form.Check
              className="form-check-inline"
              type="radio"
              label="Sale"
              name="RadioButton"
              id="Sale"
              onClick={radioButtonHandler}
            />

            <Form.Check
              className="form-check-inline"
              type="radio"
              label="Support"
              name="RadioButton"
              id="Support"
              onClick={radioButtonHandler}
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
            onChange={changeHandler}
          />
        </Form.Group>
        <div className="text-center">
          <Button className="bg-info pl-5 pr-5 mt-2" size="lg" type="submit">
            <Icon.Cursor className="mr-1" size={24} />
            <b>SEND</b>
          </Button>
        </div>
      </Form>
    </Container>
  );
}
