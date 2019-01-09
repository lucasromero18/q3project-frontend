import React, { Component } from 'react'; 
import {
    Card, CardImg, CardLink,
    CardTitle, Row, Col, Container
} from 'reactstrap';
import { Link } from "react-router-dom";






class CategoryList extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {this.props.categories.map(category =>
                        <Col sm="3">
                            <Card key={category.id} value={category.id}>
                                <CardTitle>{category.name}</CardTitle>
                                <img width="100%" src={category.img} alt="Card image cap" />
                                <Link to={'/category/' + category.id} >View</Link>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        )
    }
}






















export default CategoryList;