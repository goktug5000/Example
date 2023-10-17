import { Product } from "./product.model";

export class SimpleDataSource{
    private products:Product[]=[];
    
    constructor(){
        this.products = new Array<Product>(
            new Product(1,"s5","ii","sw4.jpg",500),
            new Product(2,"s6","ii","sw4.jpg",900),
            new Product(3,"s7","ii","sw4.jpg",1400),
            new Product(4,"s8","ii","sw4.jpg",2000))
    }


    getProducts():Product[]{
        return this.products;
    }
}