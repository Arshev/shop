import React, { Component } from 'react';
import products from '../constants/Products';
import ProductCard from './ProductCard';
import Catalog from './Catalog';
import Cart from './Cart';
import { MainMenu } from './MainMenu';
import Header from './Header';
class CatalogPage extends Component {
  render() {
    const items = products.map(product => (
      <ProductCard key={product.id} product={product} />
    ));
    return (
      <React.Fragment>
        <div><Header /></div>
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
      </React.Fragment>      
    )
  }
}

export default CatalogPage;
