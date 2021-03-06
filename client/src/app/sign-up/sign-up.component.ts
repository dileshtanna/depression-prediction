import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit() {}

  signUp(submitForm) {
    this.authService.signUp(submitForm.value).subscribe(res => {
      this.router.navigate(['/login'])
    });
  }
}
