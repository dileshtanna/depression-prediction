import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmin implements CanActivate{

  constructor(private authService : AuthService , private router : Router) { }

  canActivate(){
    if(this.authService.isLoggedIn() && this.authService.currentUser.isAdmin) {console.log('true'); return true;}

    this.router.navigate(['/no-access']);
    return false;
  }
}
