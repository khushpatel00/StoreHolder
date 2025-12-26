function fetchProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => data);
}
function fetchProductById(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => data);
}