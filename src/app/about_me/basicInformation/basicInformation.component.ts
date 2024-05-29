import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicInformation',
  templateUrl: './basicInformation.component.html',
  styleUrls: ['./basicInformation.component.css']
})
export class BasicInformationComponent implements OnInit {
basicInfo=[
  {title:"Age",val:24},
  {title:"Email",val:"john.doe@gmail.com"},
  {title:"Phone",val:"+14371468907"},
  {title:"Adrdress",val:"289 Toronto St,On,Ca"},
  {title:"Laguage",val:"English, French,Spanish"}
]
  constructor() { }

  ngOnInit() {
  }

}
