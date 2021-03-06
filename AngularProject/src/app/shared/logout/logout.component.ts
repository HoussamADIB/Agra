import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router) {
    this.logout();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }

  ngOnInit() {
  }

}
