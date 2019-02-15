import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: Http) {}

  getAll() {
    return this.http.get("http://localhost:5000/api/users/all");
  }
}
