import React, { Component } from 'react';
import {MyContext} from '../context/CartProvider';

export default class Cart extends Component {
    render() {
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <button>
                                {context.state.count > 0 ? `Items in cart: ${context.state.count}` : 'Cart is empty'}
                            </button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}
