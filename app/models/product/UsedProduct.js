import Product from "../Product.js";

class UsedProduct extends Product {

    constructor(name, type, model, color, price) {
        super(name, 'used', type, model, color, price);
    }
 
}

export default UsedProduct;
