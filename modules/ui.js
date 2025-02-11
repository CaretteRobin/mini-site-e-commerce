function displayProduct(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
  
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo';
    photoDiv.innerHTML = `
      picto
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
  
    return productDiv;
  }
  
  function buildProductsList(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 
    products.forEach(product => {
      const productElement = displayProduct(product);
      productList.appendChild(productElement);
    });
  }
  
  export { buildProductsList };
