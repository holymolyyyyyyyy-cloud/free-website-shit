let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart').style.display = 'block';
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

function checkout() {
    alert('Checkout simulated! In a real site, integrate payments like Stripe.');
}
