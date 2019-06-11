import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  loginchat(){
    console.log('login');
    
    this.router.navigateByUrl('/chat/tabs/tab1');
  }

  registerModal(){
    this.router.navigateByUrl('/register');
  }

}
