import { tableauProduits, search } from './products.js';
import { buildProductsList, displayCart } from './ui.js';

function init() {
  const products = tableauProduits;
  buildProductsList(products);
  displayCart(); 

  const searchInput = document.getElementById('product-search');
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const keywords = searchInput.value;
      const filteredProducts = search(keywords);
      buildProductsList(filteredProducts);
    }
  });
}

export { init };
