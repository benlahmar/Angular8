import { Directive, Renderer2, Renderer, ElementRef, Input, HostListener } from '@angular/core';
import { Element } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[appcls]'
})
export class ClsDirective {

  @Input('clor')
   clor:string;

   dim=10;
@Input()
   brd?:string;

  defaultColor='blue';
  constructor(private el:ElementRef, private rendu:Renderer2) {
    
    rendu.setStyle(el.nativeElement,'color',this.defaultColor);
    rendu.setStyle(el.nativeElement,'border','solid 5px');
    console.log(this.clor);
    for(let i=0;i<this.dim;i++){
      let ee=this.rendu.createElement('div');
      this.rendu.appendChild(ee,this.rendu.createText("ppppppppppp"));
      this.rendu.appendChild(this.el.nativeElement,ee);
      }
   }

   @HostListener('mouseenter',['$event']) abc(e:Event)
   {
    console.log(this.el.nativeElement);
    this.rendu.setAttribute(this.el.nativeElement,'hidden','false');
    this.rendu.setStyle(this.el.nativeElement,'color','red');
   }

   @HostListener('mouseleave',['$event']) efg(e:Event)
   {
    this.rendu.setStyle(this.el.nativeElement,'color',this.defaultColor);
    this.rendu.setAttribute(this.el.nativeElement,'hidden','true');
   }

}
