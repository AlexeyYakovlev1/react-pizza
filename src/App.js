import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import {Route} from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import './scss/app.scss';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
    </div>
  );
}

export default App;