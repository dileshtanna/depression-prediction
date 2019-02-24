import { PostsService } from "./../services/posts.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {}
  posts;
  ngOnInit() {
    if (!localStorage.getItem('token')) this.router.navigate(["/login"]);
    this.getAllPosts();
  }

  getAllPosts() {
    let data = { username: this.authService.currentUser.username };
    this.postsService.getAll(data).subscribe(res => {
      let result = res.json();
      this.posts = result.data;
    });
  }
  post(postForm) {
    let data = {
      post: postForm.value.post,
      username: this.authService.currentUser.username
    };
    this.postsService.createPost(data).subscribe(res => {
      let result = res.json();
      // this.posts.push(result.data);
      this.getAllPosts();
    });
  }
}
