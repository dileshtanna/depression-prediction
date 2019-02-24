import { PostsService } from "./../services/posts.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {}
  posts;
  depressed = false;
  ngOnInit() {
    if (!localStorage.getItem("token")) this.router.navigate(["/login"]);
    let name= this.authService.currentUser.username;
    this.postsService.getScore(name).subscribe(res => {
      let result = res.json();
      console.log(result)
      let score = result.data[0].score;
      if (score <= -5) this.depressed = true;
      this.postsService.getEveryPost().subscribe(res => {
        let result = res.json();
        this.posts = result.data;
      });
    });
  }
}
