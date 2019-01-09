import React, { Component } from 'react';
import Header from './components/Header.js'
import CategoryList from './components/CategoryList.js'
import ProductList from './components/ProductList.js'
import Cart from './components/Cart.js'
import Footer from './components/Footer.js'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from 'reactstrap';

class App extends Component {

  state = {
    categories: [],
    products: [],
    cart: []
}


async componentDidMount()  {
  const categoriesResponse = await fetch('http://localhost:8000/categories')
  const categories = await categoriesResponse.json()
  const productsResponse = await fetch('http://localhost:8000/products')
  const products = await productsResponse.json()
  this.setState({ categories, products})
}
 
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />

          <Switch>
          <Route path="/" exact render={() => <CategoryList categories={this.state.categories}  />} />
          <Route path="/category/:category_id" render={(props) => <ProductList categories={this.state.categories} products={this.state.products}{...props} />} />
          <Route path="/cart" render={() => <Cart />} />
          </Switch>

          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
