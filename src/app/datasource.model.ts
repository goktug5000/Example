import { Product } from "./product.model";

export class SimpleDataSource{
    private products:Product[]=[];
    
    constructor(){
        this.products = new Array<Product>(
            new Product(1,"s5","ii","sw4.jpg",10),
            new Product(2,"s6","ii","sw4.jpg",15),
            new Product(3,"s7","ii","sw4.jpg",20),
            new Product(4,"s8","ii","sw4.jpg",25))
    }


    getProducts():Product[]{
        return this.products;
    }
}