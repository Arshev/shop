import React, { Component } from 'react';

export default class Cart extends Component {
    render(){
        return(
            <div>I Cart Class {this.props.count}</div>
        );
    }
    
}
Cart.defaultProps = {
    count: 0
}
