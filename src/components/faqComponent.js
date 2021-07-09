import React from "react";
import { Container, Accordion, Card } from "react-bootstrap";

export default function faqComponent() {
    const plus = "+  "
  return (
     
    <Container style={{backgroundColor: "#EFEFEF"}} className="mt-5">
      <Accordion defaultActiveKey="0">
        <Card style={{backgroundColor: "#EFEFEF"}} className="border-0">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="border-0" style={{backgroundColor: "#EFEFEF"}}>
            {plus}Was ist IPTV?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0" >
            <Card.Body>Mit <a href="https://de.wikipedia.org/wiki/Internet_Protocol_Television">Internet Protocol Television (IPTV)</a> wird die Übertragung von Fernsehprogrammen und Filmen mit Hilfe des Internet Protocol bezeichnet. Im Unterschied dazu stehen die Übertragungswege Kabelfernsehen, DVB-T oder Satellit. IPTV ist damit ein Gattungsbegriff, der in sehr vielen unterschiedlichen Ausprägungen anzutreffen ist. Die unterschiedlichen Ausprägungen reichen vom einfachen IPTV über Computer oder Handy bis hin zu speziellen Endgeräten, bei denen der Benutzer gar nicht bemerkt, dass er das Internet dazu nutzt, weil er über den Fernseher eine Set-Top-Box bedient wie etwa bei Apple TV oder T-Home Media Receiver 300.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{backgroundColor: "#EFEFEF"}}className="border-0" >
          <Accordion.Toggle as={Card.Header} eventKey="1" className="border-0" style={{backgroundColor: "#EFEFEF"}}>
          {plus}Brauche ich einen Satelliten für IPTV?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Nein, Sie empfangen die Daten per Internet.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}
