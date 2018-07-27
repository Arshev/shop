import React, { Component } from 'react';

class Catalog extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default Catalog;
