import { Injectable } from '@angular/core';
import { user } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {
  
  users:user[]=[
    {
      name:"Ayush",
      email:"lohaniayush97@gmail.com",
      password:"ayush123"
    },
    {
      name:"Ajay",
      email:"ajay97@gmail.com",
      password:"ajay123"
    },
    {
      name:"Aman",
      email:"aman97@gmail.com",
      password:"aman123"
    }
  ]

  isSellerSignedIn=new BehaviorSubject(false);
  isLogin=new BehaviorSubject(false);
  constructor(private router:Router) { }
  userSignUp(data:user):void{
    this.users.push(data);
    this.isSellerSignedIn.next(true);
    localStorage.setItem('Seller',this.users.toString());
    this.router.navigate(['seller-home']);
    console.log("service call",this.users);
  }
  reloadSeller(){
    console.log(this.users);
    //save data to sign up without form
    if(localStorage.getItem('Seller')){
      this.isSellerSignedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
