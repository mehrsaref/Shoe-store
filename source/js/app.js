
let products = [
    {id:1, name:'running shoes', price:30, img:'images/1.jpg'},
    {id:2, name:'green shoes', price:40, img:'images/2.png'},
    {id:3, name:'pink shoes', price:50, img:'images/4.png'}
];

let container = document.querySelector('.container');

products.forEach(function(product){
    container.insertAdjacentHTML("afterbegin", '<div class="product-card"><h1>'+product.name+'</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url('+product.img+');"></div><div class="product-info"><div class="product-price">$'+product.price+'</div><a href="product.html?id='+product.id+'" class="product-button">See More</a></div></div>')
});