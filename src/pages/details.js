import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layout";
import Mission from "./layers/mission";
import Connect from "./layers/connect";
import Web from "./layers/web";

function Details(props) {
  return (
    <Container
      fluid
      style={{ padding: "0", backgroundColor: "#222222", height: "auto" }}
    >
      <Layout />
      <br />
      <Container>
        <Mission />
        <br />
        <Web />
        <br />
        <p className="lead text-center">
          <span style={{ fontSize: "28px" }}>
            Connect with me here, these cards are clickable <br />
          </span>
        </p>
        <Connect />
        <br />
      </Container>
    </Container>
  );
}

export default Details;
