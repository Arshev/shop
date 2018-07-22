import React from 'react';
import ReactDOM from 'react-dom';
import products from './constants/Products';
import CatalogPage from './src/CatalogPage';


ReactDOM.render(
    <CatalogPage products={products} />,
    document.getElementById('card')
)
