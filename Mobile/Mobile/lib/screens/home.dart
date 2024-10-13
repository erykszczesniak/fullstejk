import 'package:blog_app/models/blog_post.dart';
import 'package:blog_app/repository/repository.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'blog_post_details_screen.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Future<List<BlogPost>> futurePost;

  Repository repository = Repository();

  @override
  void initState() {
    super.initState();
    futurePost = repository.fetchPosts();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey,
        appBar: AppBar(
          backgroundColor: Colors.black,
          centerTitle: true,
          title: Text(
            'Flutter and Spring Boot example',
            style: TextStyle(
              fontSize: 20.0,
            ),
          ),
        ),
        body: Center(
          child: FutureBuilder<List<BlogPost>>(
            future: futurePost,
            builder: (BuildContext context, snapshot) {
              if (snapshot.hasData) {
                List<BlogPost> data = snapshot.data;
                return ListView.builder(
                    itemCount: data.length,
                    itemBuilder: (context, index) {
                      return Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Card(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Padding(
                                padding: const EdgeInsets.all(6.0),
                                child: Image.network(
                                  data[index].featuredImageUrl,
                                  width: 400,
                                  height: 300,
                                  fit: BoxFit.cover,
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.all(6.0),
                                child: InkWell(
                                  onTap: () {
                                    Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                BlogPostDetailsScreen(
                                                  blogPost:
                                                      snapshot.data[index],
                                                )));
                                  },
                                  child: Text(
                                    snapshot.data[index].title,
                                    textAlign: TextAlign.left,
                                    style: TextStyle(
                                        fontSize: 20,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ),
                              Row(
                                children: <Widget>[
                                  Padding(
                                    padding: const EdgeInsets.all(6.0),
                                    child: Text(
                                      snapshot.data[index].category,
                                      style: TextStyle(
                                          backgroundColor: Colors.white,
                                          fontSize: 16.0),
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.all(6.0),
                                    child: Text(
                                      DateFormat.yMd().format(DateTime.parse(
                                          snapshot.data[index].createdAt)),
                                      style: TextStyle(fontSize: 16.0),
                                    ),
                                  )
                                ],
                              ),
                            ],
                          ),
                        ),
                      );
                    });
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }
              // By default show a loading spinner.
              return CircularProgressIndicator();
            },
          ),
        ),
      ),
    );
  }
}
