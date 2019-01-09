import React, { Component } from 'react';
import {
    Card, CardImg, CardLink,
    CardTitle, Row, Col, Container, Button, CardBody, 
} from 'reactstrap';
import { Link } from "react-router-dom";

const header = {
    styles: {
        color: "darkred",
        paddingLeft: "41%",
        paddingTop: "2%"
    }
}

const cardContainer = {
    styles: {
        width: "40%",
        height: "40%",
        marginLeft: "30%",
        marginTop: "2%"
    }
}

const productTitle = {
    styles: {
        textAlign: "center",
        color: "darkred"
    }
}

const img = {
    styles: {
        width: "400px",
        height: "400px",
        paddingLeft: "20%"
    }
}

const button = {
    styles: {
        color: "white"
    }
}



class ProductList extends Component {
    render() {
        console.log("props in ProductList", this.props)
        let categoryTitle = this.props.categories.filter(category => category.id == this.props.match.params.category_id)[0]
        if (categoryTitle) {
            console.log("HELLO", categoryTitle.name)
            return (
                <>
                    <h1 style={header.styles}>{categoryTitle.name}</h1>
                    {this.props.products.filter(product => product.category_id == this.props.match.params.category_id)
                        .map(product => {
                            return <div style={cardContainer.styles}>
                                <Card>
                                    <CardBody>
                                        <h2><CardTitle style={productTitle.styles}>{product.name}</CardTitle></h2>
                                    </CardBody>
                                    <img style={img.styles} width="100%" src={product.img} alt="Card image cap" />
                                    <Button color="danger"><Link style={button.styles} to={'/product/' + product.id}>View</Link></Button>
                                </Card>
                            </div>
                        })
                    }
                </>
            )
        } else {
            return <h3>loading</h3>
        }
    }
}






















export default ProductList;