import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { In28minutesComponent } from './in28minutes/in28minutes.component';
import { TodosComponent } from './todos/todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoComponent } from './todo/todo.component';
import {NewTodoComponent} from './new-todo/new-todo.component'


const routes: Routes = [
  {
    path:'',redirectTo:'in28minutes',pathMatch:'full'
    //This is the default, url . when we hit only localhost:4200 this will be live
    
  },
  {
  
   path:'todo/:id',component:TodoComponent
    
  },
  {

    path:'in28minutes',component:In28minutesComponent
  },
  {
    path:'home',component:WelcomeComponent
  },
  {
    path:'todos',component:TodosComponent
  },
  {
    path:'newTodo',component:NewTodoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
