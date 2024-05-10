import { Injectable } from '@angular/core';
import { Item } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  cart:number[]=[3,1,2];
  items:Item[]=[
    {
      id:1,
      Title:"Lamp",
      Price:23.04,
      Rating:4.5,
      Description:"A beautiful lamp which enlighten..",
      ImgUrl:"https://st.depositphotos.com/2001403/1996/i/450/depositphotos_19960419-stock-photo-vintage-kerosene-lamp-on-wooden.jpg"
    },
    {
    "id": 2,
    "Title": "Chair",
    "Price": 45.99,
    "Rating": 4.2,
    "Description": "A comfortable chair for your home or office.",
    "ImgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/640px-Set_of_fourteen_side_chairs_MET_DP110780.jpg"
  },
  {
    "id": 3,
    "Title": "Bookshelf",
    "Price": 89.99,
    "Rating": 4.8,
    "Description": "A sturdy bookshelf to organize your books.",
    "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTNAUW0qFu9cD36f9KC_YP1y7179smUe0hw&s"
  },
  {
    "id": 4,
    "Title": "Coffee Table",
    "Price": 129.99,
    "Rating": 4.6,
    "Description": "A stylish coffee table for your living room.",
    "ImgUrl": "https://www.jangirdecor.in/cdn/shop/files/IMG-5673.png?v=1696772630&width=1445"
  },
  {
    "id": 5,
    "Title": "Sofa",
    "Price": 299.99,
    "Rating": 4.7,
    "Description": "A comfortable sofa for relaxation.",
    "ImgUrl": "https://media.gettyimages.com/id/1270915312/photo/property-interiors.jpg?s=612x612&w=gi&k=20&c=AaIk2dfO3N8dVl9yu6YZ0KbSOiebq8YXauFAstbzJsQ="
  },
  {
    id:6,
    Title:"Lamp",
    Price:23.04,
    Rating:4.5,
    Description:"A beautiful lamp which enlighten..",
    ImgUrl:"https://st.depositphotos.com/2001403/1996/i/450/depositphotos_19960419-stock-photo-vintage-kerosene-lamp-on-wooden.jpg"
  },
  {
  "id": 7,
  "Title": "Chair",
  "Price": 45.99,
  "Rating": 4.2,
  "Description": "A comfortable chair for your home or office.",
  "ImgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/640px-Set_of_fourteen_side_chairs_MET_DP110780.jpg"
},
{
  "id": 8,
  "Title": "Bookshelf",
  "Price": 89.99,
  "Rating": 4.8,
  "Description": "A sturdy bookshelf to organize your books.",
  "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTNAUW0qFu9cD36f9KC_YP1y7179smUe0hw&s"
}
  ];
  constructor() { }
  AddCart(val:number){
    this.cart.push(val);
  }
  RemoveCart(val:number){
    this.cart = this.cart.filter(x=>x !== val);
  }
}
