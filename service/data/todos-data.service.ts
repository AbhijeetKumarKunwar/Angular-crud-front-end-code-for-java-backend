import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todos/todos.component';
import {HttpHeaders} from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {

  constructor(private http:HttpClient) { }
  public retriveAllTodos(username)
  {
     
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  public deletetodo(id)
  {
  
    return this.http.delete(`http://localhost:8080/users/todos/${id}` );
  }
  public getTodoById(id)
  {
    
    return this.http.get<Todo>(`http://localhost:8080/users/todos/${id}` )
  }
  public updateTodo(id,todo)
  {
    
    return this.http.put<Todo>(`http://localhost:8080/users/todos/${id}`,todo );
  }
  /*createBasicAuthenticationHttpHeader()
  {
    let username='abhi';
    let password='abhi';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
     return basicAuthHeaderString;
  }*/
}
