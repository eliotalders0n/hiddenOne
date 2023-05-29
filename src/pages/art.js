import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layout";
import ArtCard from "./layers/art";

function Details(props) {
  return (
    <Container
      fluid
      style={{
        padding: "0",
        backgroundColor: "rgba(100,100,100,0.1)",
        height: "auto",
      }}
    >
      <Layout />
      <br />
      <Container fluid>
        <p className="lead text-center">
          Instructions: <br/>
          <span style={{fontSize: "12px"}}>
          1. Crack the code by deciphering the following phrase: "VZvff Lbh Qnq". <br/>
          2. Explore the patterns and relationships within the
          encoded message. <br/>
          3. Discover the hidden meaning behind the puzzle.<br/> 
          4. The solution will unveil a heartfelt message.<br/>
          </span>
            Hint: Think about common encryption techniques used throughout history.
        </p>
        <ArtCard />
        <br />
      </Container>
    </Container>
  );
}

export default Details;
