import React from 'react';

function Image({ src, alt, styleImage }) {
    return (
      <img src={src} alt={alt} style={styleImage} />
    );
  }

export default Image;
