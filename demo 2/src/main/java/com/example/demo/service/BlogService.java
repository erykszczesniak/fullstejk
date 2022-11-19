package com.example.demo.service;


import com.example.demo.entity.Blog;

import java.util.List;


public interface BlogService {

    List<Blog> getAllPosts();

    Blog getById(Long id);

    Blog addPost(Blog blog);

    Blog editPost(Long id, Blog blog);

    void deletePost(Long id);


}
