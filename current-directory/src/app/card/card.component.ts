import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Title:string="Unknown";
  @Input() Price:Number=0;
  @Input() Rating:number=4.5;
  @Input() Description:string="A description of item......";
  @Input() ImgUrl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBidlKMEwiSWGd-ABQIybSBaIAHQJvtTxVAKv2qW90xD_pSbALRI5vKCHwnulHfK3O-e0&usqp=CAU"
  constructor() { }

  ngOnInit(): void {
  }

}
