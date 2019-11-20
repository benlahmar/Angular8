import { Component, OnInit } from '@angular/core';
import { mydata } from './data';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

   data=mydata;
  constructor() { }

  ngOnInit() { 
   
  }

   abc(x) {
    x.description=" alpha beta";
  }

}
