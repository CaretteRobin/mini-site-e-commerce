import { tableauProduits } from './products.js';
import { buildProductsList } from './ui.js';

function init() {
  const products = tableauProduits;
  buildProductsList(products);
}

export { init };