import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./interceptors/error-interceptor/error-interceptor.interceptor";
import {LogInterceptor} from "./interceptors/log-interceptor/log-interceptor.interceptor";
import {ResponseInterceptor} from "./interceptors/response-interceptor/response-interceptor.interceptor";
import {ErrorToastComponent} from "./components/error-toast/error-toast.component";

@NgModule({
  declarations: [ErrorToastComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorToastComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
  ],
})
export class FeatureErrorToastModule { }
