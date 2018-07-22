import React from 'react';
import ReactDOM from 'react-dom';
import Image from './src/Image';
import TextBox from './src/TextBox';

ReactDOM.render(
    <Image />,
    document.getElementById('image')
)
ReactDOM.render(
    <TextBox />,
    document.getElementById('text-box')
)
