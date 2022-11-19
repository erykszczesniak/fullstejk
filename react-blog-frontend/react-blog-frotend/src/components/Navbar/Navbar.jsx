import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Container>
      <Text>React and Spring Boot example</Text>
    </Container>
  );
};

export default Navbar;
