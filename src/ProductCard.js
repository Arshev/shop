import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
    render() {
        return (
            <div>
                <Image /><br />
                <TextBox /><br />
                Price: <Price />
            </div>
        )
    }
}

export default ProductCard;
