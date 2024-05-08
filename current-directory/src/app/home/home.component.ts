import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:Item[]=[];
  constructor(private item:ItemService) { }

  ngOnInit(): void {
    this.items=this.item.items;
  }
  

}
