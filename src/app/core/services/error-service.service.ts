import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorMessage = new Subject<string>();

  constructor() { }

  setErrorMessage(nErrorMessage: string) {
    this.errorMessage.next(nErrorMessage);
  }

  getErrorMessage(): Observable<string> {
    return this.errorMessage.asObservable();
  }

}
