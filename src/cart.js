cart = document.querySelector('#cartparent');

(() => {
    cartitems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) : []
    console.log(cartitems)
    for (const singlecartitem of cartitems) {
        cart.innerHTML += `
            <div class="w-full relative flex items-center border-b-2 mb-3">
                <img src="${singlecartitem.image}"
                    class="w-[10vw] h-auto bg-emerald-50 p-3 rounded-2xl m-2" alt="">
                <div>

                    <h1 class="text-2xl font-semibold montserrat text-center pb-5">${singlecartitem.title}</h1>
                    <h2 class="text-lg font-mono montserrat ps-1">$${singlecartitem.price}</h2>
                    <div class="absolute right-0 top-1/2 -translate-1/2 flex items-center gap-3">
                        <div class="flex items-center">
                            <div>Quantity: ${singlecartitem.quantity}</div>
                            <div class="flex flex-col mx-3 justify-center">
                                <span class="text-center ring rounded-xs my-0.5 px-2" onclick="cartQuantity()">+</span>
                                <span class="text-center ring rounded-xs my-0.5 px-2" onclick="cartQuantity()">-</span>
                            </div>
                        </div>
                        <span
                            class="text-red-500 font-light hover:font-bold ring-1 hover:ring-2 cursor-pointer hover:bg-red-300/30 rounded-md px-3 hover:px-2.5 py-1 duration-150 ">Delete</span>
                    </div>
                </div>
            </div>`
    }
})()
