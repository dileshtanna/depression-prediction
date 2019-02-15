import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(loginForm) {
    this.authService.login(loginForm.value).subscribe(res => {
      if (res) console.log("TODO : Navigate to home page");
    });
  }
}
