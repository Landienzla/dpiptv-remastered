import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import './reseller.css'
export default function resellerComponent() {
  return (
    <Container>
      <Row className="mt-5 pt-5">
        <Col xs={1}>
          <Icon.InfoCircleFill
            size={30}
            style={{ color: "red" }}
            className="mt-2"
          />
        </Col>
        <Col xs={11}>
          <p style={{ fontSize: "24px" }}>DPIPTV RESELLER PROGRAM</p>
          <b style={{ fontSize: "18px" }}>
            DISCOVER THE EASY WAY TO MAKE MONEY BY BECOMING A BEST RESELLER
          </b>
          <p className="mt-4">
            Do you know that more than 50 million people in the world are using
            IPTV services? Start your own IPTV business now and make more than
            €10,000 per month. You only need your own IPTV panel to start, where
            you can generate lines for users. You can also generate enigma
            script for any IPTV box which uses enigma, like DreamBox, VU+, etc
            from your IPTV panel.
          </p>
        </Col>
      </Row>
      <Row className="">
        <Col xs={1}>
          <Icon.InfoCircleFill
            size={30}
            style={{ color: "red" }}
            className="mt-2"
          />
        </Col>
        <Col xs={11}>
          <p style={{ fontSize: "24px" }}>HOW DOES IPTV PANEL WORK?</p>
          <p className="mt-4">
            When you become our reseller, you will buy credits to load your
            reseller panel. The minimum amount is €200.
          </p>
        </Col>
      </Row>
      <Row className="">
        <Col xs={1}>
          <Icon.InfoCircleFill
            size={30}
            style={{ color: "red" }}
            className="mt-2"
          />
        </Col>
        <Col xs={11}>
          <p style={{ fontSize: "24px" }}>
            HOW DOES THE RESELLER ACCOUNT WORK?
          </p>
          <p className="mt-4">
            Reseller account is not time-based. This means that if you buy a
            reseller acount, it will not expire at all! The only important thing
            is your credits. Credits allow you to create accounts for users. For
            example creating 1 month account costs you 5 credits. You can sell
            our service as long as you have credits left. If you run out of
            credits, you can add credits by ordering again.
          </p>
        </Col>
      </Row>
      <Row>
        <Table striped borderless hover variant="">
          <thead>
            <tr>
              <th>DURATION</th>
              <th>CREDITS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Icon.Calendar4Range /> 1 Week Account Costs
              </td>
              <td>
                <Icon.CashCoin /> 2 Credits
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col xs="2" style={{ marginLeft: "10%" }}>
          <Row>
            <div
              className="text-center mb-4"
              style={{ color: "white", backgroundColor: "#9AC2C5" }}
            >
              <Icon.Recycle size="40" className="mt-4 mb-3" />
              <p style={{ fontSize: "36px" }}>Choose</p>

              <p style={{ fontSize: "16px", marginTop: "-10px" }}>
                Reseller Plan
              </p>
            </div>
          </Row>
          <Row style={{ color: "red", fontSize: "14px" }}>
            <p>
              <Icon.InfoCircleFill /> Testline
            </p>
            <p>
              <Icon.InfoCircleFill /> Free trial duration
            </p>
            <p>
              <Icon.InfoCircleFill /> Panel credits
            </p>
          </Row>
        </Col>
        <Col xs="2">
          <Row>
            <div
              className="text-center mb-4 ml-3"
              style={{ color: "white", backgroundColor: "#9AC2C5" }}
            >
              <Icon.Recycle size="40" className="mt-4 mb-3" />
              <p style={{ fontSize: "36px" }}>€200</p>
              <p style={{ fontSize: "16px", marginTop: "-10px" }}>
                Reseller Price
              </p>
            </div>
          </Row>
          <Row
            style={{ color: "red", fontSize: "14px" }}
            className="text-center"
          >
            <p> 50 Free Trials</p>
            <p>24 Hours</p>
            <p> 200 Credits</p>
            <Container>
              <Button className="mt-2 button ">Buy Now</Button>
              <Button className="mt-2 button">
                <Icon.CurrencyBitcoin />
                Pay With Bitcoin
              </Button>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
