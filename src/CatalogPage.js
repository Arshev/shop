import React from 'react';
import Catalog from './Catalog';

function CatalogPage({ products }) {
  return (
    <div>
      <h1>
        Products
      </h1>
      <Catalog products={products} />
    </div>
  );
}

export default CatalogPage;
