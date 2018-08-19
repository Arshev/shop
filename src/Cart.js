import React, { Component } from 'react';
import {CartContext} from '../context/CartProvider';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { cartPath } from '../helpers/routes';

export default class Cart extends Component {
    render() {
        return(
            <div>
                <CartContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <Router>
                                <Link to={cartPath()}>
                                    <button>{context.cart.count > 0 ? `Items in cart: ${context.cart.count}` : 'Cart is empty'}</button>
                                </Link>
                            </Router>
                        </React.Fragment>
                    )}
                </CartContext.Consumer>
            </div>
        );
    }
}
