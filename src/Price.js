import React, { Component } from 'react';
import { products } from '/constants/Products';

class Price extends Component {
    render() {
        return <span>{products[0].price}</span>
    }
}

export default Price;
