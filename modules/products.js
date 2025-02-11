export class Product {
    constructor(ref, price, description) {
        this.ref = ref;
        this.price = price;
        this.description = description;
    }
}

export const tableauProduits = [
    new Product('P1', 10, "Nutella"),
    new Product('P2', 20, "Claquette Hermes"),
    new Product('P3', 15, "VLT94"),
    new Product('P4', 50, "Hermann")
];
