import React from 'react'
import ReactDOM from 'react-dom';
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'

import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Link className='padded' to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
    </main>
  </div>
);

export default App;
