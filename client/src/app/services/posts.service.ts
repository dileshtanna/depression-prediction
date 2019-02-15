import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: Http) {}

  createPost(data) {
    return this.http.post("http://localhost:5000/api/posts/create-post", data);
  }

  getAll(data) {
    return this.http.post("http://localhost:5000/api/posts/get-all", data);
  }
  getEveryPost() {
    return this.http.get("http://localhost:5000/api/posts/every-post");
  }
}
