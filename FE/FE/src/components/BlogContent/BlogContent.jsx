import React from "react";
import { useEffect, useState } from "react";
import { Container, SmallerText, Text, Image } from "./BlogContentStyles";
import { Link } from "react-router-dom";
import BlogService from "../../api/BlogService";

const BlogContent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      BlogService.getAllPosts()
        .then((res) => {
          setPosts(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAllPosts();
  }, []);

  console.log(posts);

  return (
    <>
      {posts?.map((post) => (
        <Container>
          <div>
            <Image src={post.featuredImageUrl} alt="" />
            <Link style={{ textDecoration: "none" }} to={`/details/${post.id}`}>
              <Text>{post.title}</Text>
            </Link>
            <SmallerText>
              {post.category} {post.createdAt}
            </SmallerText>
          </div>
        </Container>
      ))}
    </>
  );
};

export default BlogContent;
