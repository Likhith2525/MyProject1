import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userObj:Login={username:"",password:""};

  //inject userservice object
  constructor(private us:UserService,private router:Router){}

  ngOnInit():void{
  }

  onLogin(){
    let userCredentials=this.userObj;
    this.us.loginUser(userCredentials).subscribe(
      res=>{
        if(res.message==="Logged in successfully"){
          //save tken to local storage
          localStorage.setItem("token",res.token)
          localStorage.setItem("username",res.username)
          localStorage.setItem("userObj",JSON.stringify(res.userObj))
          //update user login status
          this.us.userLoginStatus=true;
          //navigate to userprofile page
          this.router.navigateByUrl('/home')
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong")
      }
    )
  }

}
