import {Component, OnInit} from '@angular/core';
import {ErrorService} from "../../services/error-service.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  animations: [
    trigger('openClose', [
      state('true', style({
        opacity: 1,
        display: 'block'
      })),
      state('false', style({
        opacity: 0,
        display: 'none'
      })),
      transition('0 <=> 1', [
        style({ display: 'block' }),
        animate('100ms')
      ])
    ]),
  ],
  styleUrls: ['./error-toast.component.css']
})
export class ErrorToastComponent implements OnInit {

  errorMessage: string = ''

  constructor(public errorService: ErrorService) { }

  getErrorMessage(): void {
    this.errorService.getErrorMessage()
      .subscribe(msg => {
        this.errorMessage = msg;
        setTimeout(() => {
          this.errorMessage = '';
        }, 5000)
      });
  }

  ngOnInit(): void {
    this.getErrorMessage();
  }

}
