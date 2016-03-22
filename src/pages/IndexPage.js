import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  render() {
    return (
      <nav>
        <Link to="/">All books</Link>
        <Link to="/authors">Authors</Link>
      </nav>
    );
  }
}
