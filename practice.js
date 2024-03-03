// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
    { id: 3, name: 'Product 3', price: 30.00 }
];

// Display products on the webpage
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${product.name} - $${product.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        // Update cart total
        cartTotal.textContent = (parseFloat(cartTotal.textContent) + product.price).toFixed(2);
    }
}

// Checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Checkout functionality will be implemented in the backend.');
});

// Display products when the page loads
window.onload = displayProducts;
