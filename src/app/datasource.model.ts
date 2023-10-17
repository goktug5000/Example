import { Product } from "./product.model";

export class SimpleDataSource{
    private products:Product[]=[];
    
    constructor(){
        this.products = new Array<Product>(
            new Product(1,"s5","ii","htyd.jpg",10),
            new Product(2,"s6","ii","htyd.jpg",15),
            new Product(3,"s7","ii","htyd.jpg",20),
            new Product(4,"s8","ii","htyd.jpg",25))
    }


    getProducts():Product[]{
        return this.products;
    }
}