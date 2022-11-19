package com.example.demo.service;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.entity.Blog;
import com.example.demo.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Primary
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public List<Blog> getAllPosts() {
        return blogRepository.findAll();
    }

    @Override
    public Blog getById(Long id) {
        return blogRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public Blog addPost(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Blog editPost(Long id, Blog blogDetails) {
        Blog blog = blogRepository.findById(id).get();
        blog.setTitle(blogDetails.getTitle());
        blog.setDetails(blogDetails.getDetails());
        blog.setFeaturedImageUrl(blogDetails.getFeaturedImageUrl());
        blog.setCategory(blogDetails.getCategory());
        blog.setCreatedAt(blogDetails.getCreatedAt());
        return blogRepository.save(blog);
    }


    @Override
    public void deletePost(Long id) {
        blogRepository.deleteById(id);
    }

}
