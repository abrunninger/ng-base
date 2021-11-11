import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`--> out: ${request.method} to ${request.urlWithParams}`);
    console.log(`--> responseType=${request.responseType}`);
    if (request.body) console.log(`--> out: body ${JSON.stringify(request.body)}`);
    return next.handle(request);
  }
}
