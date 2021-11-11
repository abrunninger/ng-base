import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ErrorService} from "../../services/error-service.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public errorService: ErrorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.error(`<-- err: from ${err.url} status ${err.status}/${err.statusText}`)
          console.error(`<-- err: ${err.message} / ${JSON.stringify(err.error)}`);
          this.errorService.setErrorMessage(`<-- err: from ${err.url} status ${err.status}/${err.statusText}\n<-- err: ${err.message} / ${JSON.stringify(err.error)}`);
          if (err.status === 404) console.error('URL seems to be invalid')
          return throwError(() => err);
        })
      );
  }
}
