import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layout";
import Mission from "./layers/mission";
import Connect from "./layers/connect";
import Web from "./layers/web";

function Details(props) {
  return (
    <Container fluid style={{ padding: "0", backgroundColor: "rgba(100,100,100,0.1)", height:"100vh"}}>
      <Layout />
      <br />
      <Container fluid>
        <Mission />
        <br />
        <Web />
        <br />
        <Connect />
        <br />
      </Container>
    </Container>
  );
}

export default Details;
