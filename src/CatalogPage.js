import React, { Component } from 'react';
import products from '../constants/Products';
import ProductCard from './ProductCard';
import Catalog from './Catalog';
import Cart from './Cart';
class CatalogPage extends Component {
  render() {
    const items = products.map(product => (
      <ProductCard key={product.id} product={product} />
    ));
    return (
      <div>
        <h1>Products</h1>
        <span>
          <Cart />
        </span>
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

export default CatalogPage;
