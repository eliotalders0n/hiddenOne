import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layout";
import Tools from "./layers/tools";
import History from "./layers/history";
import Equip from "./layers/equipment";

function Profile(props) {
  return (
    <Container fluid style={{ padding: "0", backgroundColor: "rgba(100,100,100,0.1)", height:"100vh"}}>
      <Layout />
      <br/>
      <Container fluid>
        <Equip/>
        <br/>
        <Tools/>
        <br/>
        <History/>
        <br/>
        </Container>
    </Container>
  );
}

export default Profile;
