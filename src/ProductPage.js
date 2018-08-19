import React from 'react';
import products from '../constants/Products';
import TextBox from './TextBox';
import Image from './Image';
import Price from './Price';
import AddToCart from './AddToCart';
import CartProvider from '../context/CartProvider';
import Cart from './Cart';

export const productPage = ({match}) => (
    <div><span><Cart /></span>
        <h1>{products[match.params.id - 1].title}</h1>
        <div className='card mb-3'>
            <div className='card-header'>
                <h3><TextBox content={products[match.params.id - 1].title} /></h3>
            </div>
            <div className='card-body'>
                <Image src={products[match.params.id - 1].imageUrl} alt={products[match.params.id - 1].title} styleImage={{height: '100px', width: 'auto'}} />
                <Price price={products[match.params.id - 1].price} />
                <div><AddToCart product={products[match.params.id - 1]}/></div>
            </div>
        </div>
    </div>
);
