import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  educations =[
    {duration:"March 2022 - current", company:"U0FT" ,title:"Computer Engineering",
      description:"Lorem ipsum dolor sit amet ullam beatae. Quam consectetur magnam odi consectetur, adipisicing elit. Esse aspernatur omnis soluta dignissimos laborum ullam beatae. Quam consectetur magnam odio"
    },
    {duration:"June 2021 - April 2022", company:"Humber" ,title:"Maths and Computer",
    description:"Lorem ipsum dolor sit amet ullam beatae. Quam consectetur magnam odi consectetur, adipisicing elit. Esse aspernatur omnis soluta  dignissimos laborum ullam beatae. Quam consectetur magnam odio"
  },
  {duration:"June 2019 - April 2020", company:"High School" ,title:"Natural Science",
    description:"Lorem ipsum dolor sit amet ullam beatae. Quam consectetur magnam odi consectetur, adipisicing elit. Esse aspernatur omnis soluta  dignissimos laborum ullam beatae. Quam consectetur magnam odio"
  },
  ]
  ngOnInit() {
  }

}
