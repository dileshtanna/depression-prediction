import { Component, OnInit } from '@angular/core';
import {AdminService } from '../services/admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users;
  userSelected =false;
  posts = [];
  constructor(private adminService : AdminService) { }

  ngOnInit() {

    this.adminService.getAll().subscribe(res => {
      let result = res.json();
      this.users = result.data;
    })
  }

  getUserPosts(name) {
    this.adminService.getUserPosts(name).subscribe(res => {
      let result = res.json();
      this.posts = result.data;
      console.log(this.posts)
      this.userSelected = true;
    });
  }


}
