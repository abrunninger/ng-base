import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ResponseInterceptor} from "./features/eager/feature-error-toast/interceptors/response-interceptor/response-interceptor.interceptor";
import {ErrorInterceptor} from "./features/eager/feature-error-toast/interceptors/error-interceptor/error-interceptor.interceptor";
import {LogInterceptor} from "./features/eager/feature-error-toast/interceptors/log-interceptor/log-interceptor.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FeatureErrorToastModule} from "./features/eager/feature-error-toast/feature-error-toast.module";
import {AppRoutingModule} from "./app.routing.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FeatureErrorToastModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
