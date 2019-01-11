import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import ReactStars from 'react-stars';
import { render } from 'react-dom';


const header = {
    styles: {
        color: "darkred",
        paddingTop: "2%",
        marginLeft: "2%",
        fontSize: "40px",
        fontFamily: 'Titillium Web, sans-serif'
    }
}

const image = {
    styles: {
        width: "400px",
        height: "400px",
        marginTop: "3%",
        marginLeft: "2%"
    }
}

const description = {
    styles: {
        display: "flex",
        marginLeft: "2%",
        fontFamily: 'Titillium Web, sans-serif'
    }
}

const statistics = {
    styles: {
        fontSize: "20px",
        color: "darkred",
        fontFamily: 'Arimo , sans-serif'
    }
}

const statContainer = {
    styles: {
        marginTop: "80px"
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
        marginLeft: "15px"
    }
}


class Product extends Component {
    state = {
        buttonText: 'Add To Cart',
        buttonColor: "danger"
    }

    addToCart(product){
        this.props.addProductToCart(product.id);
        this.setState({
            buttonText: "Added!",
            buttonColor: "success"
        })
        setTimeout(()=>{
            this.setState({
                buttonText: 'Add To Cart',
                buttonColor: "danger"
            })
        }, 1000)
    }

    render() {
        console.log("HELLO", this.props.match)
        const product = this.props.products.filter(product => product.id == this.props.match.params.id)[0]
        if (product) {
            console.log(product)
            return (
                <>
                    <h1 style={header.styles}>{product.name}</h1>
                    <Row>
                        <Col style={{marginLeft: "20px"}}>
                            <img style={image.styles} width="100%" src={product.img} alt="Card image cap" />
                            <ReactStars style={stars.styles} count={product.rating} edit={false} size={35} />
                            <h2 style={price.styles}>${product.price}.00</h2>
                            <Button onClick={()=>this.addToCart(product)} style={addToCart.styles} color={this.state.buttonColor}>{this.state.buttonText}</Button>
                        </Col>
                        <Col>
                            <h4 style={description.styles}>{product.description}</h4>
                            <div style={statContainer.styles}>
                            <p style={statistics.styles}>{product.stats}</p>
                            </div>
                        </Col>
                    </Row>
                </>
            )
        } else {
            return <h2>404!</h2>
        }
    }
}



export default Product; 