import React, { Component } from 'react';
import {MyContext} from '../context/CartProvider';

export default class AddToCart extends Component {
    render() {
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <button onClick={context.growCount}>Add to Cart</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}
