// API Configuration
const API_URL = 'http://localhost:5000/api';

// Cart State
let cart = [];

// Load Products on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCartCount();
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#cartBtn') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

// Load Products from API
async function loadProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading products...</p></div>';

    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
        // Show demo products if API is not available
        displayProducts(getDemoProducts());
    }
}

// Display Products
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = `
            <div class="col-md-4 col-lg-3 mb-4" style="animation: fadeInUp 0.6s ease-out ${index * 0.1}s both;">
                <div class="card product-card h-100">
                    <div class="product-image d-flex align-items-center justify-content-center">
                        <img src="${product.image || 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png'}" alt="${product.name}" class="product-icon">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${product.name}</h5>
                        <p class="card-text text-muted">${product.description}</p>
                        <p class="price mb-3">$${product.price}</p>
                        <button class="btn btn-add-cart w-100" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add to Cart
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCartCount();
    showNotification(`${name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

// Show Notification
function showNotification(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i> ${message}
    `;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

// Add animation styles
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Demo Products (fallback)
function getDemoProducts() {
    return [
        { id: 1, name: 'Docker Container', description: 'Containerization tool', price: 29.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { id: 2, name: 'Kubernetes Cluster', description: 'Orchestration platform', price: 99.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { id: 3, name: 'AWS EC2 Instance', description: 'Cloud computing', price: 49.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { id: 4, name: 'Jenkins Pipeline', description: 'CI/CD automation', price: 39.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { id: 5, name: 'Terraform Module', description: 'Infrastructure as Code', price: 59.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
        { id: 6, name: 'Prometheus Monitor', description: 'Monitoring solution', price: 44.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
        { id: 7, name: 'Grafana Dashboard', description: 'Visualization tool', price: 34.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
        { id: 8, name: 'Ansible Playbook', description: 'Configuration management', price: 24.99, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' }
    ];
}

// Cart Button Click
document.getElementById('cartBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if (cart.length === 0) {
        showNotification('Your cart is empty! 🛒');
    } else {
        let cartItems = '🛒 Your Cart:\n\n';
        let total = 0;
        cart.forEach(item => {
            cartItems += `${item.name} - $${item.price}\n`;
            total += item.price;
        });
        cartItems += `\n💰 Total: $${total.toFixed(2)}`;
        alert(cartItems);
    }
});
