import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question:Question;
 rp;
  constructor() { }

  ngOnInit() {
  }


  recept(event:Event)
  {
     //this.rp= event.resp;
     let nb=this.question.options.filter(o=>o.selected==true).length;
     if(nb>0)
     this.question.answered=true;
     else
     this.question.answered=false;
     //console.log(event.resp);
     console.log(this.question.answered);

  }
}
