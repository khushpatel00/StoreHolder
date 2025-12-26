productimage = document.querySelector('#productimage');
producttitle = document.querySelector('#producttitle');
productdescription = document.querySelector('#productdescription');
productprice = document.querySelector('#productprice');
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);
(async () => {
    single_product = await fetchProductById(id);
    console.log(single_product);
    productimage.src = single_product.image;
    producttitle.innerText = single_product.title;
    productdescription.innerText = single_product.description;
    productprice.innerText = `$${single_product.price}`;
})()