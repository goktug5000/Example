import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  model:ProductRepository=new ProductRepository();
  product:any=this.model.getProductsById(3);
  products:any;
  selectedProduct:any;

  title:string='Angular Deneme'
  today:number=Date.now();
  students:number=5676764;
  price:number=159.9275;
  complated:number=0.26;




  constructor(private dialogRef:MatDialog){
    this.products=this.model.getProducts();

  }

  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }


  getClasses(id:number):string|undefined{
    return (this.model.getProductsById(id)?.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2";
  }


  selectThis(itemm:any){
    console.log(itemm);
    this.selectedProduct=itemm;
  }
  update(namee:string,descc:string,imgUrll:string,pricee:string){

    this.products.find((q:Product)=>q.id===this.selectedProduct.id ? (q.name=namee,q.desc=descc,q.imgUrl=imgUrll,q.price=Number(pricee)):null);
    
  }


}
