import axios from 'axios';

export const getData = async () => {
  const url = 'http://localhost:8080/api/posts/';
  const { data : { data : { posts } } } = await axios.get(url);
  return posts;
}