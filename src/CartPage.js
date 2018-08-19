import React from 'react';
import {CartContext} from '../context/CartProvider';

export const cartPage = () => (
    <CartContext.Consumer>
        {(context) => (
            <React.Fragment>
                Cart: {console.log(context.cart)}
            </React.Fragment>
        )}
    </CartContext.Consumer>
);
