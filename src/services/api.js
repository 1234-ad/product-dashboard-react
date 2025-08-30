const BASE_URL = 'https://dummyjson.com';

// Fetch products with pagination and search
export const fetchProducts = async ({ page = 1, limit = 10, search = '', delay = 1000 }) => {
  const skip = (page - 1) * limit;
  let url = `${BASE_URL}/products?limit=${limit}&skip=${skip}&delay=${delay}`;
  
  if (search) {
    url = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}&delay=${delay}`;
  }
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
};

// Fetch all categories
export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  
  return response.json();
};

// Fetch products by category
export const fetchProductsByCategory = async ({ category, page = 1, limit = 10, delay = 1000 }) => {
  const skip = (page - 1) * limit;
  const url = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}&delay=${delay}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products by category');
  }
  
  return response.json();
};

// Add new product
export const addProduct = async (productData) => {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add product');
  }
  
  return response.json();
};

// Update product
export const updateProduct = async ({ id, ...productData }) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update product');
  }
  
  return response.json();
};

// Delete product
export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete product');
  }
  
  return response.json();
};