import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName : any;
  LastName : any;
  Email: any;
  Password: any;
  ConfirmPassword : any;
  Phone : any;

  constructor(private register : RegisterService) { }

  ngOnInit(): void {
  }

    Register(){ //this.register.Register
    this.register.Register(
      this.FirstName,
      this.LastName,
      this.Email,
      this.Password,
      this.ConfirmPassword,
      this.Phone
    );
  }
}
