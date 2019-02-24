import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : Http) { }

  getAll() {
    return this.http.get('http://localhost:5000/api/users/all');
  }

  getUserPosts(name) {
    return this.http.get(`http://localhost:5000/api/users/posts/${name}`);
  }
}
