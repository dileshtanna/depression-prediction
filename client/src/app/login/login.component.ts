import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit() {}

  login(loginForm) {
    this.authService.login(loginForm.value).subscribe(res => {
      if (res) this.router.navigate(["/"]);
    });
  }
}
