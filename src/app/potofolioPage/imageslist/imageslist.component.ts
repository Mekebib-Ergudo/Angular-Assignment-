import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageslist',
  templateUrl: './imageslist.component.html',
  styleUrls: ['./imageslist.component.css']
})
export class ImageslistComponent implements OnInit {
@Input() images:any;
  constructor() { }

  ngOnInit() {
  }

}
