import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-in28minutes',
  templateUrl: './in28minutes.component.html',
  styleUrls: ['./in28minutes.component.scss']
})
export class In28minutesComponent   {

  name='In28minutes';
  welcome(){

   this.service.getBeans();
  

  }
  constructor(private service:WelcomeDataService)
  {
   

  }
  Message:string;

  getWelcomeData()
  {
    this.service.getBeans().subscribe(
      response=>this.Message=response.message,error=>this.handleErrorResponse(error));
    
      
    console.log(this.Message)

  }
  getPathVariableBean()
  {
    this.service.getBeanPathVariable(this.name).subscribe(response=>this.Message=response.message);
  }
  handleErrorResponse(error)
 {
   console.log(error.error.error);
   console.log(error.error.message);
   this.Message=error.error.message;
   

 }
 

}
