import React, { Component } from 'react';

export const MyContext = React.createContext();

export default class CartProvider extends Component {
    constructor(props) {
      super(props);

      this.state = { count: 0 };
    }
    
    render() {
      return (
        <MyContext.Provider value={{
          state: this.state,
          growCount: () => this.setState({
            count: this.state.count + 1
          })
        }}>
          {this.props.children}
        </MyContext.Provider>
      )
    }
  }

