import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

function ProductCard({ product }) {
    return (
        <div>
            <Image src={product.imageUrl} alt={product.title} styleImage={{ width: 100, height: 'auto' }} />
            <p>
                <TextBox content={product.title} />
            </p>
            <p>
                <Price price={product.price} />
            </p>
        </div>
    );
  }

export default ProductCard;
