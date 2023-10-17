import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model:ProductRepository=new ProductRepository();
  product:any=this.model.getProductsById(3);
  products:any;
  constructor(){
    this.products=this.model.getProducts();
  }

  getClasses(id:number):string|undefined{
    return (this.model.getProductsById(id)?.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2";
  }




}
