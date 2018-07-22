import React from 'react';
import ProductCard from './ProductCard';

function Catalog({ products }) {
  const items = products.map(product => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <div>
      {items}
    </div>
  );
}

export default Catalog;
