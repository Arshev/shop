import React, { Component } from 'react';
import {CartContext} from '../context/CartProvider';

// export default class AddToCart extends Component {
//     render() {
//         return(
//             <div>
//                 <CartContext.Consumer>
//                     {(context) => (
//                         <React.Fragment>
//                             <button onClick={() => context.addProduct(this.props.product)}>Add to Cart</button>
//                         </React.Fragment>
//                     )}
//                 </CartContext.Consumer>
//             </div>
//         );
//     }
// }
const AddToCart = ({ product }) => (
    <CartContext.Consumer>
      {(context) => <button onClick={() => context.addProduct(product)}>Add To Cart</button>}
    </CartContext.Consumer>
    )
export default AddToCart;
