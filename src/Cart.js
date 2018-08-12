import React, { Component } from 'react';
import {CartContext} from '../context/CartProvider';

export default class Cart extends Component {
    render() {
        return(
            <div>
                <CartContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <button>
                                {context.cart.count > 0 ? `Items in cart: ${context.cart.count}` : 'Cart is empty'}
                            </button>
                            <span>In Cart: {console.log(context.cart)}</span>
                        </React.Fragment>
                    )}
                </CartContext.Consumer>
            </div>
        );
    }
}
