import React, { useRef, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
export default function FooterComponent() {
  const homeRef = useRef();
  const installationRef = useRef();
  const supportRef = useRef();
  const faqRef = useRef();
  const resellerRef = useRef();
  const magfixedRef = useRef();
  const testlinkRef = useRef();
  let location = window.location.pathname.split("/")[1];
  useEffect(() => {
    if (location === "home") {
      // homeRef.current.style.backgroundColor = "#89F0FF"
      homeRef.current.className += " active";
    } else if (location === "installation") {
      // installationRef.current.style.backgroundColor = "#89F0FF"
      installationRef.current.className += " active";
    } else if (location === "support") {
      // supportRef.current.style.backgroundColor = "#89F0FF"
      supportRef.current.className += " active";
    } else if (location === "faq") {
      // faqRef.current.style.backgroundColor = "#89F0FF"
      faqRef.current.className += " active";
    } else if (location === "reseller") {
      // resellerRef.current.style.backgroundColor = "#89F0FF"
      resellerRef.current.className += " active";
    } else if (location === "mag-fixed") {
      // magfixedRef.current.style.backgroundColor = "#89F0FF"
      magfixedRef.current.className += " active";
    } else if (location === "get-test-link") {
      // testlinkRef.current.style.backgroundColor = "#89F0FF"
      testlinkRef.current.className += " active-button";
    }
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container className="mt-3 mb-2">
          <Navbar.Brand href="/home">
            <img
              src="https://dpiptv.com/wp-content/uploads/2020/06/Logo.png"
              alt="Dpiptv Logo"
              width="125px"
              height="%100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Item className="home m-2">
              <Nav.Link
                ref={homeRef}
                className="mr-auto navbarlinks home"
                style={{ color: "#8ebefe" }}
                href="/home"
              >
                <b>HOME</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className=" m-2">
              <Nav.Link
                ref={installationRef}
                className="mr-auto navbarlinks installation"
                style={{ color: "#8ebefe" }}
                href="/installation"
              >
                <b>INSTALLATION</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className=" m-2">
              <Nav.Link
                ref={supportRef}
                className="mr-auto navbarlinks support"
                style={{ color: "#8ebefe" }}
                href="/support"
              >
                <b>SUPPORT</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className=" m-2">
              <Nav.Link
                ref={faqRef}
                className="mr-auto navbarlinks faq"
                style={{ color: "#8ebefe" }}
                href="/faq"
              >
                <b>FAQ</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className=" m-2">
              <Nav.Link
                ref={resellerRef}
                className="mr-auto navbarlinks reseller"
                style={{ color: "#8ebefe" }}
                href="/reseller"
              >
                <b>RESELLER</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className=" m-2">
              <Nav.Link
                ref={magfixedRef}
                className="mr-auto navbarlinks mag-fixed"
                style={{ color: "#8ebefe" }}
                href="/mag-fixed"
              >
                <b>MAG FIXED!</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className=" m-2">
              <Nav.Link
                ref={testlinkRef}
                className="mr-auto navbarbutton get-test-link"
                href="/get-test-link"
              >
                <Button variant="" className="">
                  <b style={{ color: "#000000" }}>
                    <Icon.Tv /> GET TEST LINK
                  </b>
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
        <Button className="bg-info" onClick={scrollToTop}>
          <Icon.ArrowUp size={70} />
        </Button>
      </Navbar>
      <div className="bg-dark text-center p-5" style={{ color: "white" }}>
        <p>All Rights Reserved DPIPTV © 2020</p>
      </div>
    </>
  );
}
