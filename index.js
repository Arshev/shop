import React from 'react';
import ReactDOM from 'react-dom';
import CatalogPage from './src/CatalogPage';
import CartProvider from './context/CartProvider';


ReactDOM.render(
    <CartProvider>
        <CatalogPage />
    </CartProvider>,
    document.getElementById('root')
)
