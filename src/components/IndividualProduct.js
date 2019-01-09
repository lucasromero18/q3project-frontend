import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import ReactStars from 'react-stars';
import { render } from 'react-dom';
import { Link } from "react-router-dom";

const header = {
    styles: {
        color: "darkred",
        paddingTop: "2%",
        marginLeft: "2%",
        fontSize: "40px"
    }
}

const image = {
    styles: {
        width: "400px",
        height: "400px",
        marginTop: "3%",
        marginLeft: "1%"
    }
}

const description = {
    styles: {
        display: "flex",
        marginLeft: "2%"
    }
}

const price = {
    styles: {
        display: "flex",
         marginLeft: "1%"
    }
}

const addToCart = {
    styles: {
        marginBottom: "2%",
        marginLeft: "1%"
    }
}

const stars = {
    styles: {
        marginLeft: "1%"
    }
}


class Product extends Component {
    render() {
        console.log("HELLO", this.props.match)
         const product = this.props.products.filter(product => product.id == this.props.match.params.id)[0]
        if(product){
            console.log(product)
        return (
            <>
            <h1 style={header.styles}>{product.name}</h1>
            <Row>
            <img style={image.styles} width="100%" src={product.img} alt="Card image cap" />
            <h4 style={description.styles}>{product.description}</h4>
            </Row>
            <ReactStars style={stars.styles} count={product.rating} edit={false} size={35}/>
            <h2 style={price.styles}>${product.price}.00</h2>
            <Button tag={Link} to='/cart' style={addToCart.styles} color="danger">Add To Cart</Button>
            </>
            )
        } else{
            return <h2>404!</h2>
        }
    }
}



export default Product; 