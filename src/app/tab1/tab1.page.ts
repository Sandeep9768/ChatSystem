import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user=[
    {
      icon:"person-add",
      name:"Rahul"
    },
    {
      icon:"person-add",
      name:"Praful"
    },
    {
      icon:"person-add",
      name:"Mohini"
    }
  ]
  messages = [];
      message: string = '';
      lastMessageId;
  constructor(private router: Router) {}

  chat(){
    this.router.navigateByUrl('/chatlist');
  }

}
