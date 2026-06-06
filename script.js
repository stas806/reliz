let cart = [];

function addToCart(name, price){

    cart.push({
        name,
        price
    });

    updateCart();
}

function updateCart(){

    const cartItems =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("total");

    const countElement =
        document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `
        <li>
            ${item.name} - $${item.price}
            <button onclick="removeItem(${index})">
            ❌
            </button>
        </li>
        `;
    });

    totalElement.textContent = total;
    countElement.textContent = cart.length;
}

function removeItem(index){
    cart.splice(index,1);
    updateCart();
}

function clearCart(){
    cart = [];
    updateCart();
}

function filterMenu(category){

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }
        else if(card.classList.contains(category)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}
