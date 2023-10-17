import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository {
    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(f=>this.products.push(f));

    }



    getProducts():Product[]{

        return this.products;
    }
    getProductsById(id:number):any{
        return this.products.find(f=>f.id==id);
    }

}
