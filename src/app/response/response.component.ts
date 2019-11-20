import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../model';
import { not } from '@angular/compiler/src/output/output_ast';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  @Input()
  reponse:Option;

@Output()
notifier = new EventEmitter();
//notifier=new BehaviorSubject("Awesome");

  constructor() { }

  ngOnInit() {
  }
  select()
  {
    
    this.notifier.emit({'a':true,'resp':this.reponse});
   
  }

}
