products = document.querySelector('#products');
products2 = document.querySelector('#products2');



(async () => {
    fetchedData = await fetchProducts();
    // console.log(fetchedData)
    fetchedData.map(product => {
        products.innerHTML += `
        <div class="snap-start flex flex-col items-center shrink-0 bg-neutral-100 rounded-2xl w-fit max-w-[30vw] cursor-pointer" onclick="return singleProductPage(${product.id})">
        <img src="${product.image}" class="h-[30vh] w-auto p-1 mb-5" alt="">
            <div class="ps-3">
                <h1 class="text-2xl font-semibold montserrat text-center pb-5">${product.title.slice(0, 20) + '...'}</h1>
                <h1 class="font-light px-2 mb-3 montserrat">${product.description.slice(0, 50) + '...'}</h1>
            </div>
        </div>
                `
    });
    fetchedData = fetchedData.slice().sort(() => 0.5 - Math.random())
    fetchedData.map(product => {
        // console.log(product)
        products2.innerHTML += `
        <div class="snap-start flex flex-col items-center shrink-0 bg-neutral-100 rounded-2xl w-fit max-w-[30vw] cursor-pointer" onclick="return singleProductPage(${product.id})">
        <img src="${product.image}" class="h-[30vh] w-auto p-1 mb-5" alt="">
            <div class="ps-3">
                <h1 class="text-2xl font-semibold montserrat text-center pb-5">${product.title.slice(0, 20) + '...'}</h1>
                <h1 class="font-light px-2 mb-3 montserrat">${product.description.slice(0, 50) + '...'}</h1>
            </div>
        </div>
        `
    });
})()
function singleProductPage(id){
    window.location.href = `product.html?id=${id}`;
}
