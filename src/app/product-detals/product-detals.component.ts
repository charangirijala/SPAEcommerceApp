import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-product-detals',
  templateUrl: './product-detals.component.html',
  styleUrls: ['./product-detals.component.css']
})
export class ProductDetalsComponent{
  @Input() item:Product;
}
