import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import {  AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
       
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,

HttpClientModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
