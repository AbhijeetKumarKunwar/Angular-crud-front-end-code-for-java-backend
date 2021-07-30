import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpinterCepterService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //req is the http request which can't be altered , so we need to clone for chnage.
    let username = 'abhi';
    let password = 'abhi';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    req = req.clone(
      {
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      }
    )
    return next.handle(req);//we are sednding the modified request.
//it is act like filter we get the requst , modified and pass it to the handler.
  }
}
