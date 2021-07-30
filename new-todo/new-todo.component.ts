import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosDataService } from '../service/data/todos-data.service';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  todo:Todo;
  constructor(private service:TodosDataService
    ,private router:Router) {
   this.todo=new Todo(-1,'',false,new Date(''));//we will populate the form with this default value, we are
   //ngModel so whatever we will add in the from will be updated in this object.id==-1 for new todo in backend code.
   }

  ngOnInit(): void {
  }
  saveTodo()
  {
 this.service.updateTodo(this.todo.id,this.todo).subscribe(response=>
  console.log(response)
  
  );
  this.router.navigate(['todos']);//after adding it will go the home page of todo with updated value.
  }

}
