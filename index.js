import React from 'react';
import ReactDOM from 'react-dom';
import Catalog from './src/Catalog';
import products from './constants/Products';


ReactDOM.render(
    <Catalog products={products} />,
    document.getElementById('card')
)
