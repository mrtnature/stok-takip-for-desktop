// Storage key for localStorage
const STORAGE_KEY = 'stok-takip-products';

// Load products from localStorage
function loadProducts() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Save products to localStorage
function saveProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

// Get all products
let products = loadProducts();

// DOM Elements
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const cancelBtn = document.getElementById('cancelBtn');
const formButtonText = document.getElementById('formButtonText');
const editIdInput = document.getElementById('editId');

// Form inputs
const productNameInput = document.getElementById('productName');
const productCodeInput = document.getElementById('productCode');
const productCategoryInput = document.getElementById('productCategory');
const productQuantityInput = document.getElementById('productQuantity');
const productPriceInput = document.getElementById('productPrice');

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(amount);
}

// Update statistics
function updateStats() {
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, p) => sum + (p.quantity * p.price), 0);
    const lowStock = products.filter(p => p.quantity > 0 && p.quantity <= 10).length;

    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('totalValue').textContent = formatCurrency(totalValue);
    document.getElementById('lowStock').textContent = lowStock;
}

// Render products table
function renderProducts(filteredProducts = null) {
    const displayProducts = filteredProducts !== null ? filteredProducts : products;
    
    if (displayProducts.length === 0) {
        productList.innerHTML = `
            <tr class="empty-state">
                <td colspan="7">
                    ${filteredProducts !== null ? 
                        'Arama sonucu bulunamadı.' : 
                        'Henüz ürün eklenmemiş. Yukarıdaki formu kullanarak ürün ekleyin.'}
                </td>
            </tr>
        `;
        return;
    }

    productList.innerHTML = displayProducts.map(product => {
        const total = product.quantity * product.price;
        let rowClass = '';
        
        if (product.quantity === 0) {
            rowClass = 'out-of-stock';
        } else if (product.quantity <= 10) {
            rowClass = 'low-stock';
        }

        return `
            <tr class="${rowClass}">
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>${formatCurrency(product.price)}</td>
                <td>${formatCurrency(total)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-edit" onclick="editProduct('${product.id}')">Düzenle</button>
                        <button class="btn btn-delete" onclick="deleteProduct('${product.id}')">Sil</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    updateStats();
}

// Add or update product
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const editId = editIdInput.value;
    const productData = {
        name: productNameInput.value.trim(),
        code: productCodeInput.value.trim(),
        category: productCategoryInput.value.trim(),
        quantity: parseInt(productQuantityInput.value),
        price: parseFloat(productPriceInput.value)
    };

    if (editId) {
        // Update existing product
        const index = products.findIndex(p => p.id === editId);
        if (index !== -1) {
            products[index] = { ...products[index], ...productData };
        }
    } else {
        // Add new product
        const newProduct = {
            id: generateId(),
            ...productData
        };
        products.push(newProduct);
    }

    saveProducts(products);
    renderProducts();
    resetForm();
});

// Reset form
function resetForm() {
    productForm.reset();
    editIdInput.value = '';
    formButtonText.textContent = 'Ekle';
    cancelBtn.style.display = 'none';
}

// Cancel edit
cancelBtn.addEventListener('click', resetForm);

// Edit product
function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    editIdInput.value = product.id;
    productNameInput.value = product.name;
    productCodeInput.value = product.code;
    productCategoryInput.value = product.category;
    productQuantityInput.value = product.quantity;
    productPriceInput.value = product.price;

    formButtonText.textContent = 'Güncelle';
    cancelBtn.style.display = 'block';

    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Delete product
function deleteProduct(id) {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
        products = products.filter(p => p.id !== id);
        saveProducts(products);
        renderProducts();
    }
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        renderProducts();
        return;
    }

    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    renderProducts(filtered);
});

// Initial render
renderProducts();

// Make functions available globally for inline onclick handlers
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
