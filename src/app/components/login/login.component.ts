import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  constructor(private router: Router) { }
 public Email?:String;
 public Password='';
 
  ngOnInit(): void {
  }
  
  loginUser():void{
    if(this.Email=="preetham@gmail.com" && this.Password=="88888888"){
      this.router.navigateByUrl("/homepage");
      console.log("user verified");
     
    }
    else{
      this.router.navigateByUrl("/login");
      window.alert("login failed.. Please enter valid details");
    }
  }

}
