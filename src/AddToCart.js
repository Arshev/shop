import React, { Component } from 'react';

export default class AddToCart extends Component {
    constructor(props) {
        super(props);

        this.state = { count: props.count };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Add to Cart</button><br/>
                Quantity in Cart: {this.state.count}
            </div>
        );
    }
}

AddToCart.defaultProps = {
    count: 0
};
