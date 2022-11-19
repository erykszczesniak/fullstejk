import axios from "axios";

const BASE_API_URL = "http://localhost:8082/api/";

class BlogService {
  getAllPosts() {
    return axios.get(BASE_API_URL);
  }

  getPostById(postId) {
    return axios.get(BASE_API_URL + postId);
  }
}

export default new BlogService();
