import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import CategoryList from './components/CategoryList.js'
import ProductList from './components/ProductList.js'
import Cart from './components/Cart.js'
import CartItem from './components/CartItem.js'
import Footer from './components/Footer.js'
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
    <>
    <Navbar />
    <CategoryList />
    <ProductList />
    <Cart />
    <Footer />
    </>
    );
  }
}

export default App;
