import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Text, PlusBtn } from "./NavbarStyles";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <Text>React and Spring Boot example</Text>
        {location.pathname === "/" && <PlusBtn> + </PlusBtn>}
      </Container>
    </>
  );
};

export default Navbar;
