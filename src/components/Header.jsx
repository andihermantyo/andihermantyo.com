import React from 'react';
import Nav from './Nav';

const Header = ({brand}) => {
  return (
    <header className="masthead mb-auto">
      <div>
        <h3 className="masthead-brand">{brand}</h3>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
