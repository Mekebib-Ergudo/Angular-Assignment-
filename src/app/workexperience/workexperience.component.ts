import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {

  constructor() { }
workExperience =[
  {duration:"March 2022 - current", company:"ABC Company" ,title:"Front End Developer",
    description:"Lorem ipsum dolor sit amet ullam beatae. Quam consectetur magnam odi consectetur, adipisicing elit. Esse aspernatur omnis soluta dignissimos laborum ullam beatae. Quam consectetur magnam odio"
  },
  {duration:"June 2021 - April 2022", company:"Face Book" ,title:"Full Stack Developer",
  description:"Lorem ipsum dolor sit amet ullam beatae. Quam consectetur magnam odi consectetur, adipisicing elit. Esse aspernatur omnis soluta  dignissimos laborum ullam beatae. Quam consectetur magnam odio"
},
{duration:"June 2019 - April 2020", company:"Google" ,title:"Full Stack Developer",
  description:"Lorem ipsum dolor sit amet ullam beatae. Quam consectetur magnam odi consectetur, adipisicing elit. Esse aspernatur omnis soluta  dignissimos laborum ullam beatae. Quam consectetur magnam odio"
},
]
  ngOnInit() {
  }

}
