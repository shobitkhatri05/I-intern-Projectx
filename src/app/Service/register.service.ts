import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:3000";
  userurl=`${this.url}`; //Check

  constructor(private http : HttpClient) { }

  setjwt(token:any){
    if (token) {
      // token
      localStorage.setItem("regis-token", token);
    } else {
      alert("No token Recieved");
    }
  }

  // get tokens

  getJwt() {
    let token = localStorage.getItem("regis-token");
    if (token) {
      let payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  // remove tokens

  removeJwt() {
    localStorage.removeItem("regis-token");
  }

    //  users detail form local storage

    getDetails() {
      let details = this.getJwt();
      return details;
    }

    /// user login

  userLogin(Email:any, Password:any) {
    let obj = { Email, Password: Password };
    this.http.post(`${this.url}/login`, obj).subscribe((res: any) => {
      if (res.message) {
        alert(res.message);
      }
      else {
        this.setjwt(res.token);
        console.log(res);
        alert('logged in');
        window.location.href = "/sending";
      }
    })
  }
  /////////////////////////////////// user signup
  Register(FirstName:any, LastName:any, Email:any, Password:any, ConfirmPassword:any, Phone:any) {
    let obj5 = {
      FirstName, LastName, Email, Password, ConfirmPassword, Phone
    }
    console.log(obj5)
    this.http.post(`${this.url}/addUserRegistration`, obj5).subscribe((res: any) => {
      if (res.message) {
        alert(res.message);
      }
    })
  }
}
