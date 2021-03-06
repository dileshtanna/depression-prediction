import { AdminService } from "./services/admin.service";
import { PostsService } from "./services/posts.service";
import { AuthService } from "./services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { PostsComponent } from "./posts/posts.component";
import { FeedComponent } from "./feed/feed.component";

import { FormsModule } from "@angular/forms";
import { UsersService } from "./services/users.service";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { AuthAdmin } from "./services/auth-admin.service";
import { AuthGuard } from "./services/auth-guard.service";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PostsComponent,
    FeedComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "sign-up", component: SignUpComponent },
      { path: "", component: PostsComponent },
      { path: "feed", component: FeedComponent },
      {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthGuard, AuthAdmin]
      }
    ])
  ],
  providers: [
    AuthService,
    PostsService,
    UsersService,
    AdminService,
    AuthGuard,
    AuthAdmin
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
