import React, { Component } from 'react';
import products from '../constants/Products';
import ProductCard from './ProductCard';
import Catalog from './Catalog';

class CatalogPage extends Component {
  render() {
    const items = products.map(product => (
      <ProductCard key={product.id} product={product} />
    ));
    return (
      <div>
        <h1>Products</h1>
        <div className='row'>
          <div className='col-3'>
            <Catalog>
              {items}
            </Catalog>
          </div>
        </div>
      </div>
      
    )
  }
}

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
