import { AuthService } from "./auth.service";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      console.log("true");
      return true;
    }

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: state.url }
      });
      console.log("false");
      return false;
    }
  }
}
