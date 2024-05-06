import { HttpParams, HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
   })
  
   export class AuthService {

    APIkey='AIzaSyCD_q_pzAylrWaOB30t3K7F9MKTBoBZwo'
    signUpUrl=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIkey}`
    signInUrl='http://localhost:8080/auth/login';
    params!: HttpParams;
     headers!: HttpHeaders;
    isLoggedIn!: true;
     isAdmin!: true;
constructor(private http :HttpClient){}

signUp(email:string, password: string): Observable<Object> {
    return this.http.post(this.signUpUrl,{email:email ,password:password,returnSecureToken:true})
  }
  signIn(email:string, password: string): Observable<Object> {
    return this.http.post(this.signInUrl,{email:email,password:password,returnSecureToken:true})
  }
 isRoleAdmin() {
        return this.isAdmin;
      }
    
    isAuthenticated(){
        return this.isLoggedIn;
     }
     }