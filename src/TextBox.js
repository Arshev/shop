import React, { Component } from 'react';

class TextBox extends Component {
    render() {
        return <span><SomeText /></span>
    }
}

class SomeText extends Component {
    render() {
        return 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    }
}

export default TextBox;
