class BlogPost {
  int id;
  String title;
  String details;
  String featuredImageUrl;
  String category;
  String createdAt;

  BlogPost({this.id, this.title, this.details, this.featuredImageUrl, this.category, this.createdAt});

  factory BlogPost.fromJson(Map<String, dynamic> json) => BlogPost(
      id: json["id"],
      title: json["title"],
      details: json["details"],
      featuredImageUrl: json["featuredImageUrl"],
      category: json["category"],
      createdAt: json["createdAt"],
    );

}

