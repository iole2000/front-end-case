import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
 templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  constructor(private authService: AuthService){}
  ngOnInit(): void {
   
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password).subscribe(data => {
      console.log(data);
    });
    form.reset();
  }
  
}


