let total = 0;

function addToCart(price){
    total += price;
    document.getElementById("total").textContent = total;
}

function clearCart(){
    total = 0;
    document.getElementById("total").textContent = total;
}
