import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data={
  titre:"app quiz dev",
  auteur:"moi",
  version:"1.0"
}
  constructor() { }

  ngOnInit() {
  }

}
