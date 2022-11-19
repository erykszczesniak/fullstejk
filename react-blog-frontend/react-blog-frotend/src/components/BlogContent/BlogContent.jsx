import { useEffect, useState } from "react";
import axios from "axios";
import { Container, SmallerText, Text, Image } from "./BlogContentStyles";
import { Link } from "react-router-dom";
import DetailBlogContent from "../DetailBlogContent/DetailBlogContent";

const BlogContent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

  console.log(posts);

  const data1 = {
    from: "Link #1",
    message: "Welcome to KindaCode.com",
    timestamp: Date.now(),
  };

  return (
    <>
      {posts.data?.map((post) => (
        <Container>
          <div>
            <Image src={post.featuredImageUrl} alt="" />
            <Link
              state={{
                id: "naveenkumar",
              }}
              style={{ textDecoration: "none" }}
              to={`/details/${post.id}`}
            >
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
