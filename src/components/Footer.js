import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Jumbotron>
      <h1>Ovo je footer!</h1>
      <p>Evo dajemo link na nepostojeću stranicu.</p>
      <p>
        <Button variant='primary'>
          <Link to='/uuu'>Learn more</Link>
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Footer;
