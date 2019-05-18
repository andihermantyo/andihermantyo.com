import React from 'react';
import Home from './views/Home';
import Products from './views/Products';
import Services from './views/Services';
import Contact from './views/Contact';
import About from './views/About';
import { Route } from 'react-router-dom';

const Router = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
  </>
);

export default Router;