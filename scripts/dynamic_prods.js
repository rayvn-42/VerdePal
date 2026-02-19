let products;

fetch('../resources/products/products.json').then(response => {
    if (!response.ok) {
        throw new Error(`Http Error! Status ${response.status}`);
    }
    return response.json();
}).then(jsonData => {
    products = jsonData;

    products.forEach(function(store_item) {
        let template = `<div class="product-card">\n\t<img src="${store_item.image_url}" alt="${store_item.product_desc}" loading="lazy">\n\t<h3>${store_item.product_name}</h3>\n\t<p class="price">${store_item.price} DH</p>\n</div>\n`;

        let category = document.getElementById(`category-${store_item.category}`);
        let grid = category.querySelector('.product-grid');
        grid.insertAdjacentHTML('beforeend', template);
    });
}).catch(error => {
    console.error('Error fetch:', error);
});