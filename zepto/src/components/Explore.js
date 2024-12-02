import React from 'react';
import ProductCard from '../components/ProductCard';
const Explore = () => {
  // Sample data for products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: '$20.00',
      imageUrl: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '$35.00',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: '$50.00',
      imageUrl: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      price: '$40.00',
      imageUrl: 'https://via.placeholder.com/150', 
    },
  ];

  return (
    <div className="explore-container">
      <h2>Explore Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
