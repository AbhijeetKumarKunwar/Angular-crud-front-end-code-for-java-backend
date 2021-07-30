import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/Http';

export class HelloWorldBean
{

  constructor(public message :string) {
  
    
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
 

  public getBeans()
  { 
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
    
    // console.log("Last line of the getBeans methods, this Line is after the print response call");
  }
  public getBeanPathVariable(name)
  { 
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
       })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers});
    
    // console.log("Last line of the getBeans methods, this Line is after the print response call");
  }
  createBasicAuthenticationHttpHeader()
  {
    let username='abhi';
    let password='abhi';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
     return basicAuthHeaderString;
  }
}
