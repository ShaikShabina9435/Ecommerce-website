let cart = [];

function addToCart(product, price) {
    let existing = cart.find(item => item.name === product);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name: product, price: price, quantity: 1 });
    }

    displayCart();
}

function removeItem(product) {
    cart = cart.filter(item => item.name !== product);
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    let total = 0;

    cartList.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.quantity;

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}
            <button onclick="removeItem('${item.name}')">❌</button>
        `;
        cartList.appendChild(li);
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order placed successfully 🎉");
        cart = [];
        displayCart();
    }
}
function showDetails(name, price, img, desc) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = "₹" + price;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalDesc").innerText = desc;

    document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}
function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}