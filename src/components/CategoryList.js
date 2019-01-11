import React, { Component } from 'react';
import {
    Card, CardImg, CardLink,
    CardTitle, Row, Col, Container, Button, Jumbotron
} from 'reactstrap';
import { Link } from "react-router-dom";


const jumbo = {
    styles: {
        marginLeft: "22%",
        color: "darkred",
        
    }
}


const header = {
    styles: {
        color: "darkred",
        marginLeft: "5%",
        display: "flex",
        borderBottom: "2px solid darkred",
        width: "25%",
        fontFamily: 'Fjalla One , sans-serif'
    }
}


const cardContainer = {
    styles: {
        marginRight: "5%",
    }
}


const cards = {
    styles: {
        height: "400px",
        width: "300px",
        margin: "20px",
        padding: "25px"
    }
}


const cardImg = {
    styles: {
        height: "250px",
        width: "250px"
    }
}

const view = {
    styles: {
        color: "white"
    }
}

const cardTitle = {
    styles: {
        color: "darkred",
        fontFamily: 'Fjalla One, sans-serif',
        fontSize: "21px"
    }
}


const button = {
    styles: {
        marginTop: "20px"
    }
}

const narrow = {
    styles: {
        marginLeft: "30%",
        display: "flex"
    }
}

const input = {
    styles: {
        marginLeft: "30%"
    }
}

const searchButton = {
    styles: {
        width: "30%",
        height: "2%",
        marginTop: "8%"
    }
}

const formContainer = {
    styles: {
        marginLeft: "70%"
    }
}




class CategoryList extends Component {
    render() {
        return (
            <>
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 style={jumbo.styles} className="display-3">Fitness Inventory Today</h1>
                            <p style={jumbo.styles} className="lead">All of the latest Fitness Equipment, we're here for your at home gym needs!</p>
                        </Container>
                    </Jumbotron>
                </div>
                <Row style={header.styles}>
                <div>
                    <h1>Pick a Category</h1>
                </div>
                </Row>
                <div style={formContainer.styles}>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label style={narrow.styles} for="inputCity">Search here</label>
                                <input style={input.styles} onChange={(e) => this.props.filteredCategoryList(e)} type="text" class="form-control" id="inputCity"></input>
                            </div>
                        </div>
                    </form>
                </div>
                        <div style={cardContainer.styles}>
                            <Container>
                                <Row>
                                    {this.props.categories.map(category =>
                                        <Col sm="3">
                                            <Card style={cards.styles} key={category.id} value={category.id}>
                                                <CardTitle style={cardTitle.styles}>{category.name}</CardTitle>
                                                <img style={cardImg.styles} width="100%" src={category.img} alt="Card image cap" />
                                                <Button style={button.styles} color="danger"><Link style={view.styles} to={'/category/' + category.id}>View</Link></Button>
                                            </Card>
                                        </Col>
                                    )}
                                </Row>
                            </Container>
                        </div>
                    </>
                    )
                }
            }
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
export default CategoryList;