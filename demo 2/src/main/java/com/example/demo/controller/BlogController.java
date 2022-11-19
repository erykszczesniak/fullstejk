package com.example.demo.controller;

import com.example.demo.service.BlogService;
import com.example.demo.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")

public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping
    List<Blog> getPosts() {
        return blogService.getAllPosts();
    }

    @GetMapping("/{id}")
    Blog getUserById(@PathVariable Long id) {
        return blogService.getById(id);
    }

    @PostMapping("/add")
    public Blog addPost(@RequestBody Blog blog) {
        return blogService.addPost(blog);
    }

    @PutMapping("/edit/{id}")
    public Blog editPost(@PathVariable Long id, @RequestBody Blog blog) {
        return blogService.editPost(id, blog);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePost(@PathVariable Long id) {
        blogService.deletePost(id);
    }

    

}
