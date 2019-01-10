import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

const itemContainer = {
    styles: {
        backgroundColor: "white",
        marginTop: "2%"
    }
}

const productName = {
    styles: {
        fontSize: "20px",
        margin: "2%"
    }
}


const remove = {
    styles: {
        marginLeft: "9%"
    }
}


class CartItem extends Component {
    render() {
        return (
            <>
                <div>
                <Row style={itemContainer.styles}>
                <Col>
                    <p style={productName.styles}>{this.props.newCartItem.name}</p>
                    </Col>
                    <Button style={remove.styles} onClick={() => this.props.removeProductFromCart(this.props.newCartItem.id)} color="warning">Remove</Button>
                    </Row>
                </div>
            </>
        )
    }
}






















export default CartItem;