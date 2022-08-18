import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  registerObj = {
    
    name : '',
    email: '',
    mobno :''

  
  };
  emailPattern = new RegExp(/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  contactPattern = new RegExp('[- +()0-9]+');
  register(){
    console.log(this.registerObj);
  }

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}
