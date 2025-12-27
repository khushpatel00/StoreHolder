cart = document.querySelector('#cartparent');

function refreshcart() {
    cartitems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) : []
    // console.log(cartitems)
    cart.innerHTML = '';
    subtotal = 0;
    for (const singlecartitem of cartitems) {
        cart.innerHTML += `
            <div class="w-full relative flex items-center border-b-2 mb-3">
                <img src="${singlecartitem.image}"
                    class="w-[10vw] h-auto bg-emerald-50 p-3 rounded-2xl m-2" alt="">
                <div>

                    <h1 class="text-2xl font-semibold montserrat pb-5 sm:max-w-1/3 md:max-w-3/5 lg:max-w-3/5">${singlecartitem.title.length > 20 ? singlecartitem.title.slice(0, 20) + '...' : singlecartitem.title}</h1>
                    <h2 class="text-lg font-mono montserrat ps-1">$${singlecartitem.price}</h2>
                    <div class="absolute right-0 top-1/2 md:-translate-y-1/2 sm:-translate-y-1/2 pe-3 lg:-translate-1/2 flex items-center gap-3">
                        <div class="flex items-center">
                            <div>Quantity: ${singlecartitem.quantity}</div>
                            <div class="flex flex-col mx-3 justify-center">
                                <span class="text-center ring rounded-xs my-0.5 px-2 cursor-pointer" onclick="cartQuantity('add', ${singlecartitem.id})">+</span>
                                <span class="text-center ring ${singlecartitem.quantity == 1 ? 'ring-neutral-600' : ''} rounded-xs my-0.5 px-2  ${singlecartitem.quantity == 1 ? 'text-neutral-600' : ''} ${singlecartitem.quantity == 1 ? 'cursor-not-allowed' : 'cursor-pointer'}" ${singlecartitem.quantity <= 1 ? '' : `onclick="cartQuantity('remove', ${singlecartitem.id})"`}>-</span>
                            </div>
                        </div>
                        <span
                            class="text-red-500 font-light hover:font-bold ring-1 hover:ring-2 cursor-pointer hover:bg-red-300/30 rounded-md px-3 hover:px-2.5 py-1 duration-150" onclick="deletecartitem(${singlecartitem.id})">Delete</span>
                    </div>
                </div>
            </div>`
            subtotal += singlecartitem.price * singlecartitem.quantity
        }
        // console.log(subtotal)
        subtotal =  Math.round(subtotal*100)/100;
        document.querySelector('#subtotal').innerHTML = `$${subtotal}`
    if(cart.innerHTML == ''){
        cart.innerHTML = `<h1 class="text-3xl font-light montserrat text-center">Your cart is empty!</h1>`
        cart.classList.add('flex', 'justify-center','items-center');
    }
    else cart.classList.remove('flex', 'justify-center','items-center');

}

function cartQuantity(action, id) {
    localStorageCartItems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) : []
    if (action == 'add') {
        localStorageCartItems = localStorageCartItems.map(item => {
            if (item.id == id) {
                return { ...item, quantity: item.quantity + 1 }; // ...item = dont change other key/value
            }
            return item;
        });

    } else if (action == 'remove') {
        localStorageCartItems = localStorageCartItems.map(item => {
            if (item.id == id) {
                if (item.quantity <= 1) {
                    return { ...item, quantity: 1 };
                } else return { ...item, quantity: item.quantity - 1 }; // ...item = dont change other key/value
            }
            return item;
        });
    }
    // console.log(localStorageCartItems)
    localStorage.setItem('cartitems', JSON.stringify(localStorageCartItems))
    refreshcart();
}

function deletecartitem (id) {
    localStorageCartItems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) : []
    localStorageCartItems = localStorageCartItems.filter(item => item.id != id);
    // console.log(localStorageCartItems)
    localStorage.setItem('cartitems', JSON.stringify(localStorageCartItems))
    refreshcart();
}


refreshcart();