import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { TodosComponent } from './todos/todos.component';
import { In28minutesComponent } from './in28minutes/in28minutes.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { HttpinterCepterService } from './service/http/httpinter-cepter.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
    TodosComponent,
         In28minutesComponent,
         TodoComponent,
         NewTodoComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpinterCepterService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
