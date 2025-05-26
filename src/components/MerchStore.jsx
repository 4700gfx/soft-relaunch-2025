import React, { useEffect, useState } from 'react';

const MerchStore = () => {
  // State to store the products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        
        // Set the products into state
        setProducts(data.result || []); // Adjust the path depending on the API response
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run the fetch once on component mount

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list">
      <h1>Merch Store</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.model} className="product-card border rounded-lg p-4">
            {/* Display product image */}
            <img src={product.image} alt={product.title} className="product-image w-full h-auto rounded-md" />
            
            {/* Display product title */}
            <h3 className="product-name font-bold text-lg mt-2">{product.title}</h3>
            
            {/* Display product description */}
            <p className="product-description text-sm mt-1">{product.description}</p>
            
            {/* Display product price */}
            <p className="product-price font-semibold mt-2">${product.retail_price / 100}</p>
            
            {/* Display product brand */}
            <p className="product-brand text-sm mt-1">Brand: {product.brand}</p>
            
            {/* Display product model */}
            <p className="product-model text-sm mt-1">Model: {product.model}</p>
            
            {/* Add to cart button */}
            <button className="add-to-cart-btn mt-3 px-4 py-2 bg-blue-500 text-white rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchStore;
