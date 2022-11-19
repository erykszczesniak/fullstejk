import React from "react";
import { Container, Text, Image } from "./DetailBlogStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const DetailBlogContent = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>This is About page</h1>
      <div>
        <h3>Passed data:</h3>
        <p>From :{location.state.id}</p>
      </div>
    </>
  );
};

export default DetailBlogContent;
