export class Product {
    constructor(ref, price, description, photo) {
        this.ref = ref;
        this.price = price;
        this.description = description;
        this.photo = photo;
    }
}

export const tableauProduits = [
    new Product('P1', 10, "El Mordjene", "images/el_mordjene.jpg"),
    new Product('P2', 300, "Claquette Hermes", "images/claquettes_hermes.webp"),
    new Product('P3', 40, "Ciroc Pêche", "images/ciroc_peche.webp"),
    new Product('P4', 500, "Chaudière Hermann", "images/chaudiere_hermann.jpg")
];

export function search(keywords) {
    return tableauProduits.filter(product => 
        product.ref.includes(keywords) || product.description.includes(keywords)
    );
}
