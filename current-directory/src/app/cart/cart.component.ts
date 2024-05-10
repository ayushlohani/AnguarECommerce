import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../data-type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items:Item[]=[];
  constructor(private item:ItemService) { }

  ngOnInit(): void {
    this.items=this.item.items.filter(x=>this.item.cart.indexOf(x.id) != -1)
  }
  showcart(){
    console.warn(this.item.cart);
  }
  
}
