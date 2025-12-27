productimage = document.querySelector('#productimage');
producttitle = document.querySelector('#producttitle');
productdescription = document.querySelector('#productdescription');
productprice = document.querySelector('#productprice');
let single_product = null;
const params = new URLSearchParams(window.location.search);
const id = params.get('id'); // if theres no id on url
localStorageCartItems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) : []
if(!id){
    alert('It seems theres some techical issue out there, try opening the product again from the homepage or try again later.');
    window.location.href = 'index.html';
} 
// console.log(id);
(async () => {
    single_product = await fetchProductById(id);
    // console.log(single_product);
    productimage.src = single_product.image;
    producttitle.innerText = single_product.title;
    productdescription.innerText = single_product.description;
    productprice.innerText = `$${single_product.price}`;
    if(localStorageCartItems.find(item => item.id == single_product.id)){
        document.querySelector('#addtocart span').innerText = 'Add 1 More to Cart';
    }
})()

function addtocart() {
    // localStorageCartItems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) : []
    const existingItem = localStorageCartItems.find(item => item.id == single_product.id);
    if (existingItem) {
        localStorageCartItems = localStorageCartItems.map(item => {
            if (item.id == single_product.id) {
                return { ...item, quantity: item.quantity + 1 }; // ...item = dont change other key/value
            }
            return item;
        });
    } else {
        localStorageCartItems.push({
            id: single_product.id,
            title: single_product.title,
            price: single_product.price,
            image: single_product.image,
            quantity: 1
        })
    }
    // console.log(localStorageCartItems)
    localStorage.setItem('cartitems', JSON.stringify(localStorageCartItems))
    // alert('Product added to cart!');
    document.querySelector('#addtocart span').innerText = 'Added 1 to Cart';
    document.querySelector('#addtocart span').innerHTML += `<img class="absolute top-0 max-w-full left-0 -translate-y-1/2 translate-x-1/4" src="src/images/confetti_explode.gif">`;
    setTimeout(() => {
        document.querySelector('#addtocart span').innerText = 'Add 1 more to Cart';
    }, 2000);

}