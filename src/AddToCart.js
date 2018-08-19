import React, { Component } from 'react';
import {CartContext} from '../context/CartProvider';

const AddToCart = ({ product }) => (
    <CartContext.Consumer>
      {(context) => <button onClick={() => context.addProduct(product)}>Add To Cart</button>}
    </CartContext.Consumer>
    )
export default AddToCart;
