import 'package:blog_app/models/blog_post.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

class Repository {


  Future <List<BlogPost>> fetchPosts() async {
    String _baseUrl = "http://127.0.0.1:8082/api/";
    var response = await http.get(Uri.parse(_baseUrl));
    if (response.statusCode == 200) {
      List jsonResponse = json.decode(response.body);
      return jsonResponse.map((data) => new BlogPost.fromJson(data)).toList();
    } else {
      throw Exception('Unexpected error occured!');
    }
  }
}