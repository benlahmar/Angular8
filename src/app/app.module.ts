import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResponseComponent } from './response/response.component';
import { RouterModule,Routes } from '@angular/router';
import { AboutModule } from './modules/about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const myroot:Routes =[
  {'path':'themes', component:ThemesComponent},
  {'path':'quiz/:id', component:QuizComponent},
  {'path':'', redirectTo:'/themes',pathMatch:'full'},
  {'path':'about1',loadChildren:'./modules/about/about.module#AboutModule'}
];
@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    QuizComponent,
    QuestionComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroot,{//enableTracing:true
    }),
    AboutModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
