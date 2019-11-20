import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { ClsDirective } from './directives/cls.directive';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AboutComponent, ClsDirective],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule
  ]
})
export class AboutModule { }
