// ✌ :))

let products = [
    {id:1, name:'running shoes', price:30, img:'images/1.jpg'},
    {id:2, name:'green shoes', price:40, img:'images/2.png'},
    {id:3, name:'pink shoes', price:50, img:'images/4.png'}
];


let backBtn = document.querySelector('#back')
let details = document.querySelector('.details')

backBtn.addEventListener('click',function(){
    history.back()
})

let locParams = new URLSearchParams(location.search)

let productId = Number(locParams.get('id'));

let selectedProduct = products.find(function(product){
    return product.id === productId
})

if(selectedProduct){
    showProduct()
} else{
    // details.insertAdjacentHTML("beforeend",'<h1>Product not found !</h1>')
    location.href = 'http://127.0.0.1:5500/source/'
}
function showProduct(){
    details.insertAdjacentHTML("beforeend",'<div class="desc"><h1>'+selectedProduct.name+'</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?</p></div><div class="image"><img src="'+selectedProduct.img+'" /></div>')
}