function fetchProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => data);
}