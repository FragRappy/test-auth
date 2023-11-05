import validator from "validator";

class Product {
    #name;
    #grade;
    #gen;
    #model;
    #color;
    #price;

    constructor(name, grade, gen, model, color, price) {
        this.name = name;
        this.grade = grade;
        this.gen = gen;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    get name () {
        return this.#name;
    }

    get grade () {
        return this.#grade;
    }

    get gen () {
        return this.#gen;
    }

    get model () {
        return this.#model;
    }

    get color () {
        return this.#color;
    }

    get price () {
        return this.#price;
    }

    set name(value) {
        return this.#name = value;
    }

    set grade(value) {
        return this.#grade = value;
    }

    set gen(value) {
        return this.#gen = value;
    }

    set model(value) {
        return this.#model = value;
    }

    set color(value) {
        return this.#color = value;
    }

    set price(value) {
        return this.#price = value;
    }
}

export default Product;
