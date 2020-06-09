
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Auth } from '../../appointment';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authModel = new Auth();
  constructor(private authServiceService: AuthServiceService,private router: Router) { }
  
  errorMessage = '';
  successMessage= '';

  tryRegister(value){
    // console.log(value,this.authModel);
    this.authServiceService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "You Loged In";
      this.router.navigate(['/appointments']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  isAuth=true;
  async ngOnInit(){
    var isUserLoggedin = await this.authServiceService.isLoggedin();
    console.log(isUserLoggedin);
    if(isUserLoggedin){
      this.isAuth=true;
      //this.router.navigate(['/appointments']);
    }else{
      console.log(this.isAuth);
      this.isAuth=false;
    }
  }

}
