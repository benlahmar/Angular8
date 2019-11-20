import { Component, OnInit } from '@angular/core';
import { Quiz, Question } from '../model';
import { dataq } from './dataquiez';
import { qst2 } from '../model/csharp';
import { Router,Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 datz2=qst2;
  data= dataq;
  quiz:Quiz;
  page=0;
  mode:string="quiz";
  date=new Date();
  constructor(private xx:ActivatedRoute) {
    
   }

  ngOnInit() {
    let dx;
    let d:string;
    this.xx.paramMap.subscribe((p)=>d=p.get('id'));
    console.log(d);
if(d=='aspnet')
     dx=this.data;
     else
     dx=this.datz2;
    this.quiz=new Quiz(dx);

    setInterval(()=>{this.date=new Date();},100);
  }

  goto(p:number)
  {
  this.page=p;
  this.mode='quiz';
  }

  changermode(v:string)
  {
    this.mode=v;
  }

  iscorrect(q:Question)
  {
     return  q.options.every(o=>o.selected==o.isAnswer);
  }
}
