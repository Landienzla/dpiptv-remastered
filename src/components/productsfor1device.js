import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./productsfor1device.css";
export default class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/products")
      .then((resp) => this.setState({ products: resp.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="bg-dark">
        <Row className="mt-5 mb-5">
          {this.state.products
            .filter((product) => product.productCategory.includes("1device"))
            .map((product) => (
              <Col
                xs="4"
                key={product._id}
                className="text-center b pb-5 device"
                style={{ backgroundColor: "#9AC2C5" }}
              >
                <Container>
                  <p className="mt-5" style={{ fontSize: "24px" }}>
                    <b>
                      <h2>{product.duration}</h2>
                    </b>
                  </p>
                  <p style={{ fontSize: "24px" }}>
                    <b>
                      <h2>{product.cost}</h2>
                    </b>{" "}
                  </p>
                  <p>One Connection</p>
                  <div className="border border-info m-3 w-25 mx-auto" />
                  <p>
                    <Button className="bg-info" href={product.buynowLink}>
                      Buy Now
                    </Button>
                  </p>
                  <div className="border border-info m-3 w-25 mx-auto" />
                  <p>
                    <Button className="bg-info" href={product.btcLink}>
                      <Icon.CurrencyBitcoin /> Pay With Bitcoin
                    </Button>
                  </p>
                </Container>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
