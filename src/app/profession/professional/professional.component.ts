import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  setOfSkills = [
    {name: 'HTML', level: "80" },
    {name: 'CSS', level: "75" },
    {name: 'JAVASCRIPT', level: "80" },
    {name: 'BOOTSTRAP', level: "70" },
    {name: 'SASS', level: "60" },
    {name: 'PHOTOSHOP', level: "75" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
