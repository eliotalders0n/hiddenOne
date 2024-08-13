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
        backgroundColor: "#222222",
        height: "auto",
      }}
    >
      <Layout />
      <br />
      <Container>
        <GamesCard />
        <br />
      </Container>
    </Container>
  );
};

export default Games;
