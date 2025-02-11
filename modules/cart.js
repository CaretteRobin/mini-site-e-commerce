class Cart {
    constructor() {
        this.items = this.loadCart() || [];
    }

    addToCart(product) {
        const existingItem = this.items.find(item => item.product.ref === product.ref);
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            this.items.push({ product, qty: 1 });
        }
        this.saveCart();
    }

    emptyCart() {
        this.items = [];
        this.saveCart();
    }

    genericCalc(callback) {
        return this.items.reduce(callback, 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    loadCart() {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : null;
    }
}

const cart = new Cart();

export { cart };
