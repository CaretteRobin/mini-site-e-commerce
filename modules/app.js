import { tableauProduits, search } from './products.js';
import { buildProductsList, displayCart } from './ui.js';
import { cart } from './cart.js';

function init() {
  const products = tableauProduits;
  buildProductsList(products, addToCart);
  displayCart(); 

  const searchInput = document.getElementById('product-search');
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const keywords = searchInput.value;
      const filteredProducts = search(keywords);
      buildProductsList(filteredProducts, addToCart);
    }
  });

  const emptyCartLink = document.getElementById('empty-cart');
  emptyCartLink.addEventListener('click', () => {
    cart.emptyCart();
    displayCart(); 
  });
}

function addToCart(product) {
  cart.addToCart(product);
  displayCart(); 
}

export { init };
