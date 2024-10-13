import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Text, Image } from "./DetailBlogStyles";

import BlogService from "../../api/BlogService";

const DetailBlogContent = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchAllPosts = async () => {
      BlogService.getPostById(id).then((res) => {
        setPost(res.data);
      });
    };
    fetchAllPosts();
  }, [id]);

  return (
    <div className="container">
      <Container>
        <div>
          <Image src={post.featuredImageUrl} alt="" />
          <Text>{post.title}</Text>
          <p>{post.details}</p>
        </div>
      </Container>
    </div>
  );
};

export default DetailBlogContent;
