import { cart } from './cart.js';

function displayProduct(product, addToCartCallback) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo';
    photoDiv.innerHTML = `
      <img src="${product.photo}" alt="${product.ref}">
      <a class="product-add2cart">
        <span class="mdi mdi-cart"></span>
      </a>
    `;

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';
    detailsDiv.innerHTML = `
      <div class="details-top">
        <strong class="bigger">${product.ref}</strong>
        <strong class="bigger">${product.price} €</strong>
      </div>
      <div class="details-description">
        ${product.description}
      </div>
    `;

    productDiv.appendChild(photoDiv);
    productDiv.appendChild(detailsDiv);

    const addToCartButton = photoDiv.querySelector('.product-add2cart');
    addToCartButton.addEventListener('click', () => {
        addToCartCallback(product);
    });

    return productDiv;
}

function buildProductsList(products, addToCartCallback) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    products.forEach(product => {
        const productElement = displayProduct(product, addToCartCallback);
        productList.appendChild(productElement);
    });
}

function displayCart() {
    const cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = cart.items.map(item => `
        <tr>
            <td>${item.product.ref}</td>
            <td>${item.product.description}</td>
            <td>${item.qty}</td>
            <td>${item.product.price} €</td>
            <td>${(item.product.price * item.qty).toFixed(2)} €</td>
        </tr>
    `).reduce((acc, curr) => acc + curr, '');

    const totalProducts = cart.genericCalc((acc, item) => acc + item.qty);
    const totalPrice = cart.genericCalc((acc, item) => acc + item.product.price * item.qty).toFixed(2);

    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('cart-total').textContent = `${totalPrice} €`;
}

export { buildProductsList, displayCart };
