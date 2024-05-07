import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SellerServiceService } from '../services/seller-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerServiceService,private route:Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  SignUp(form:NgForm){
    console.log(form.value);
    this.seller.userSignUp(form.value);
  }
}
