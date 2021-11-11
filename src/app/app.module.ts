import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ResponseInterceptor} from "./core/interceptors/response-interceptor/response-interceptor.interceptor";
import {ErrorInterceptor} from "./core/interceptors/error-interceptor/error-interceptor.interceptor";
import {LogInterceptor} from "./core/interceptors/log-interceptor/log-interceptor.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorToastComponent } from './core/components/error-toast/error-toast.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ErrorToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
