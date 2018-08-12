import React, { Component } from 'react';

export const CartContext = React.createContext();



export default class CartProvider extends Component {
    constructor(props) {
      super(props);

      this.state = { 
        count: 0,
        items: []
      };
    }
       
    render() {
      return (
        <CartContext.Provider value={{
          cart: this.state,
          addProduct: () => this.setState({
            count: this.state.count + 1,
            items: this.state.items.push('product')
          })
        }}>
          {this.props.children}
        </CartContext.Provider>
      )
    }
  }

