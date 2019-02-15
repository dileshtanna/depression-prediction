import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: Http) {}

  login(data) {
    return this.http.post("http://localhost:5000/api/login", data).pipe(
      map(response => {
        let result = response.json();
        if (result && result.token) {
          localStorage.setItem("token", result.token);
          return true;
        }
        return false;
      })
    );
  }

  isLoggedIn() {
    let helper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if (!token) return false;
    return true;
  }

  signUp(data) {
    return this.http.post("http://localhost:5000/api/sign-up", data);
  }

  get currentUser() {
    let token = localStorage.getItem("token");
    if (!token) return null;
    return new JwtHelperService().decodeToken(token);
  }

  logout() {
    localStorage.removeItem("token");
  }
}
