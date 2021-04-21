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
  userdetails="";

  constructor() { }

  ngOnInit(): void {
  }

  onRegister()
  {
    this.userdetails="Userdetails added successfully..!"  
  }

}
