import React, { Component } from 'react';
import CartItem from './CartItem.js'
import { Button } from 'reactstrap'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const card = {
    styles: {
        backgroundColor: "darkgrey",
        width: "30%",
        margin: "3%",
        width: "500px"
    }
}

const yourItem = {
    styles: {
        fontSize: "30px",
        color: "darkred"
    }
}

const item = {
    styles: {
        backgroundColor: "white",
        marginTop: "1%"
    }
}

const pricingContainer = {
    styles: {
        paddingTop: "45%"
    }
}

const subtotalTaxStyle = { 
    styles: {
        fontSize: "15px",
        color: "darkred"
    }
}

const totalStyle = {
    styles: {
        fontSize: "30px",
        color: "darkred"
    }
}

const button = {
    styles: {
        marginTop: "1%",
        marginLeft: "1%",
        paddingLeft: "10%",
        paddingRight: "10%"
    }
}




class Cart extends Component {
    render() {
        const subtotal = this.props.CartItems.reduce((accumulator, product) => {
            return accumulator + product.price
        }, 0)

        const tax = this.props.CartItems.reduce((accumulator, product) => {
            return accumulator + product.price * .086
        }, 0)

        const newCartItem = this.props.CartItems.map((item => <CartItem removeProductFromCart={this.props.removeProductFromCart} newCartItem={item} />))

        return (
            <>
                <div>
                    <Card style={card.styles}>
                        <CardBody>
                            <CardTitle style={yourItem.styles}>Your Cart Items</CardTitle>
                            <span style={item.styles}>{newCartItem}</span>
                            <div style={pricingContainer.styles}>
                                <CardSubtitle style={subtotalTaxStyle.styles}>Subtotal: ${subtotal}.00</CardSubtitle>
                                <CardSubtitle style={subtotalTaxStyle.styles}>Tax: ${tax.toFixed(2)}</CardSubtitle>
                                <CardSubtitle style={totalStyle.styles}>Total: ${(subtotal + tax).toFixed(2)}</CardSubtitle>
                            </div>
                            <Button style={button.styles} color="danger">Checkout</Button>
                        </CardBody>
                    </Card>
                </div>
            </>
        )
    }
}






















export default Cart;