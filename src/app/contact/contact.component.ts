import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactMe =[
  {name:"Name"},
  {name:"Email"},
  {name:"Phone Number"},
  {name:"Message"}
]
  constructor() { }

  ngOnInit() {
  }

}
