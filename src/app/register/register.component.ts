import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username="";
  Email="";
  Phone="";
  password="";
  confirmpassword="";
  
  constructor() { }

  ngOnInit(): void {
  }

  onRegister()
  {
    this.username= this.username + " - Username added successfully";
  this.Email= this.Email + " - Email added successfully";
  this.Phone=this.Phone+ " - Phone added successfully";
  this.password=this.password+ " - password added successfully";
  this.confirmpassword=this.confirmpassword+ " - confirmpassword added successfully";
  
  }

}
