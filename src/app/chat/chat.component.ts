import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  message;
  messages={}
  constructor(private router: Router) { }

  ngOnInit() {}
  back(){
    this.router.navigateByUrl('/chat/tabs/tab1');
  }
}
