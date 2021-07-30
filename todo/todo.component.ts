import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TodosDataService} from '../service/data/todos-data.service'
import { Todo } from '../todos/todos.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  id:any;
  todo:Todo;
  

  constructor(
    private service :TodosDataService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

//This is the best example to pick data from the url and communicated with backedn , then populate the 
//input filed with data before loading the new page.
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');//getting the data from url/parameter
     this.todo=new Todo(this.id,'',false,new Date());// putting dummy data , like when it loads it would contained null
    this.service.getTodoById(this.id).subscribe(
    response=>
    {
      this.todo=response;
      console.log(response);
     
    }
    )
  }
  saveTodo()
  {
    //when we are using the ngModel for populating data, if any update we do there in the input it will 
    //autometically update in  object too, directly we can send this.todo object for update backend.
    this.service.updateTodo(this.id,this.todo).subscribe(response=>
      console.log(response)
      )
      this.router.navigate(['todos']);
  }
 


}
