import Product from "../Product.js";

class NewProduct extends Product {

    constructor(name, type, model, color, price) {
        super(name, 'new', type, model, color, price);
    }
 
}

export default NewProduct;
