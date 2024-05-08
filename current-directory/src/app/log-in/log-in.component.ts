import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SellerServiceService } from '../services/seller-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  isValidUser = false;
  wrongCred=true;
  loginclicked=false;
  constructor(private user:SellerServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  Login(val:NgForm){
    for (let x of this.user.users){
      if(x.name == val.value.name && x.password == val.value.password){
        this.isValidUser = true;
        this.wrongCred=false;
        this.user.isLogin.next(true);
        localStorage.setItem('validUser',"True");
        console.log("yes");
        break;
      }
    }
    if(this.isValidUser){
      this.route.navigate(['cart']);
    }
    this.loginclicked = true;
  }
}
