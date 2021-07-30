import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { TodosDataService } from '../service/data/todos-data.service';
import {Router} from '@angular/router';
export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targateDate:Date
  )
  {

  }
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
 
 Message='';

  constructor(
    private Todosservice:TodosDataService,
    private router:Router
    ) { }

  ngOnInit(): void {
     this.refreshTodos();
  }
  refreshTodos()
  {
    this.Todosservice.retriveAllTodos('in28minutes').
     subscribe(response=>{
       console.log(response);
       this.todos=response;
     });
  }
  deleteTodos(id)
  {
    
    console.log(`Todo deleted ${id}`)
    this.Todosservice.deletetodo(id).subscribe(
      response=>
      {
        console.log(response);
        if(response==1)
          this.Message='Todo is deleted successfully';
          this.refreshTodos();
      }
     
    )
 }
 updateTodos(todo:Todo)
 {
   console.log(`update is called ${todo.id}`)
   this.router.navigate(['todo',todo.id])//this will invoke the url of routing having this signature.
 }
 addTodo()
 {
   this.router.navigate(['newTodo']);
 }

}
