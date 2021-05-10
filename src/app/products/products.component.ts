import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  arr:Product[]=[{
    productImage:"https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    productTitle:"Iphone",
    productDescription:"The iPhone is the first smartphone designed and marketed by Apple Inc. After years of rumors and speculation, it was officially announced in January 2007, and was released in the United States in June. Development of the iPhone as a product began in 2005 and continued in complete secrecy until its public unveiling."
  },{
    
    productImage:"https://images.unsplash.com/photo-1585770536735-27993a080586?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXBhZCUyMHByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    productTitle:"Ipad Pro",
    productDescription:"The iPhone is the first smartphone designed and marketed by Apple Inc. After years of rumors and speculation, it was officially announced in January 2007, and was released in the United States in June. Development of the iPhone as a product began in 2005 and continued in complete secrecy until its public unveiling."
  },{
    
    productImage:"https://images.unsplash.com/photo-1609788994700-73eda149ffb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kcyUyMG1heHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    productTitle:"Airpods Max",
    productDescription:"The iPhone is the first smartphone designed and marketed by Apple Inc. After years of rumors and speculation, it was officially announced in January 2007, and was released in the United States in June. Development of the iPhone as a product began in 2005 and continued in complete secrecy until its public unveiling."
  },{
    
    productImage:"https://images.unsplash.com/photo-1611864583067-b002fdc4fa29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHMlMjBwcm98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    productTitle:"Airpods Pro",
    productDescription:"The iPhone is the first smartphone designed and marketed by Apple Inc. After years of rumors and speculation, it was officially announced in January 2007, and was released in the United States in June. Development of the iPhone as a product began in 2005 and continued in complete secrecy until its public unveiling."
  },{
    
    productImage:"https://images.unsplash.com/photo-1588940086836-36c7d89611a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWlycG9kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    productTitle:"Airpods",
    productDescription:"The iPhone is the first smartphone designed and marketed by Apple Inc. After years of rumors and speculation, it was officially announced in January 2007, and was released in the United States in June. Development of the iPhone as a product began in 2005 and continued in complete secrecy until its public unveiling."
  },{
    
    productImage:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    productTitle:"MacBook",
    productDescription:"The iPhone is the first smartphone designed and marketed by Apple Inc. After years of rumors and speculation, it was officially announced in January 2007, and was released in the United States in June. Development of the iPhone as a product began in 2005 and continued in complete secrecy until its public unveiling."
  }];

  arrayOfProduct=[];
  getDataFromChid(productTitle){
    this.arrayOfProduct.push(productTitle);
  }
  test(){
    console.log(this.arrayOfProduct);
  }
  
}

