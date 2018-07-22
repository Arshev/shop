import React, { Component } from 'react';
import { products } from '/constants/Products';

class Image extends Component {
    render() {
        return <div><img src={products[0].imageUrl} alt={products[0].title} style={{ height: 100, width: 'auto' }}/></div>
    }
}

export default Image;
