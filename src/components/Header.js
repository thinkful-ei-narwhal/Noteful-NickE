import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to={`/`}><h1>Noteful</h1></Link>
      </header>
    );
  }
}

export default Header;