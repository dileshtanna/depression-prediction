import { PostsService } from "./../services/posts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}
  posts;
  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    let data = { username: localStorage.getItem("token") };
    this.postsService.getAll(data).subscribe(res => {
      let result = res.json();
      this.posts = result.data;
    });
  }
  post(postForm) {
    let data = {
      post: postForm.value.post,
      username: localStorage.getItem("token")
    };
    this.postsService.createPost(data).subscribe(res => {
      let result = res.json();
      this.posts.push(result.data);
    });
  }
}
