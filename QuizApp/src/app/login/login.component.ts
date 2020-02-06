import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Karen"
  password = ''
  errorMsg = "Invalid Credentials"
  invalidLogin = false
  
  constructor(private router:Router,private hardcodedauthentication:AuthenticationService) { }
  
  handleLogin()
   {
    if(this.hardcodedauthentication.authenticate(this.username,this.password))
    {
      
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }
    else
    {
      
      this.invalidLogin = true
    }
    console.log("Welcome "+this.username)
  }
  

  ngOnInit() {
  }

}
