import { PostsService } from "./../services/posts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  constructor(private postsService: PostsService) {}
  posts;
  ngOnInit() {
    this.postsService.getEveryPost().subscribe(res => {
      let result = res.json();
      this.posts = result.data;
    });
  }
}
