import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { InserzioneComponent } from './inserzione/inserzione.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'inserzione',component:InserzioneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  
  ]
})
export class AppRoutingModule { }


