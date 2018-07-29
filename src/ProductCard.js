import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToCart from './AddToCart';

function ProductCard({ product }) {
    return (
        <div className='card mb-3'>
            <div className='card-header'>
                <h3><TextBox content={product.title} /></h3>
            </div>
            <div className='card-body'>
                <Image src={product.imageUrl} alt={product.title} styleImage={{height: '100px', width: 'auto'}} />
                <Price price={product.price} />
                <div><AddToCart /></div>
            </div>
        </div>
    );
  }

export default ProductCard;
