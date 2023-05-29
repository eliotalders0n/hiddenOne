import React from "react";
import { Container } from "react-bootstrap";
import Layout from "./layout";
import GamesCard from "./layers/games";

const Games = () => {
  return (
    <Container
      fluid
      style={{
        padding: "0",
        // backgroundImage:
        //   'url("./assets/games/mortal-kombat-1.jpg")',
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundAttachment: "fixed",
        backgroundColor: "rgba(100,100,100,0.1)",
        height: "auto",
      }}
    >
      <Layout />
      <br />
      <Container fluid>
        <GamesCard />
        <br />
      </Container>
    </Container>
  );
};

export default Games;
