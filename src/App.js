import React, { Component } from 'react';
import Header from './components/Header.js'
import CategoryList from './components/CategoryList.js'
import ProductList from './components/ProductList.js'
import Product from './components/IndividualProduct.js'
import Cart from './components/Cart.js'
import Footer from './components/Footer.js'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from 'reactstrap';


class App extends Component {
  state = {
    categories: [],
    products: [],
    cart: [],
    filteredSearch: ''
  }


  async componentDidMount() {
    const categoriesResponse = await fetch('http://localhost:8000/categories')
    const categories = await categoriesResponse.json()
    const productsResponse = await fetch('http://localhost:8000/products')
    const products = await productsResponse.json()
    this.setState({ categories, products })
  }

  filteredCategorySearch = (e) => {
    this.setState({
      filteredSearch: e.target.value
    })
  }


  addProductToCart = (id) => {
    const individualProduct = this.state.products.filter(product => product.id === id)
    console.log(individualProduct)
    this.setState(prevState => {
      let cart = this.state.cart
      const products = this.state.products
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
          cart.push(products[i])
        }
      }
      return { cart }
    })
  }

  removeProductFromCart = (id) => {
    const removeProduct = this.state.cart.filter(product => product.id === id)
    console.log(removeProduct)
    this.setState(prevState => {
      let newArr = []
      let cart = this.state.cart
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id !== id) {
          newArr.push(cart[i])
        }
      }
      return { cart: newArr }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Header productCount={this.state.cart.length} />

          <Switch>
            <Route path="/" exact render={() => <CategoryList filteredSearch={this.state.filteredSearch} filteredCategoryList={this.filteredCategorySearch} categories={this.state.categories.filter(category => category.name.includes(this.state.filteredSearch))} />} />
            <Route path="/category/:category_id" render={(props) => <ProductList categories={this.state.categories} products={this.state.products}{...props} />} />
            <Route path="/product/:id" render={(props) => <Product addProductToCart={this.addProductToCart} products={this.state.products} {...props} />} />
            <Route path="/cart" render={(props) => <Cart CartItems={this.state.cart} removeProductFromCart={this.removeProductFromCart}{...props} />} />
          </Switch>

          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
