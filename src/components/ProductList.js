import React, { Component } from 'react';




class ProductList extends Component {
    render() {
        console.log("props in ProductList", this.props)
        let categoryTitle = this.props.categories.filter(category => category.id == this.props.match.params.category_id)[0]
        if (categoryTitle) {
            console.log("HELLO", categoryTitle.name)
            return (
                <>
                    {categoryTitle.name}
                    {this.props.products.filter(product => product.category_id == this.props.match.params.category_id)
                        .map(product => {
                            return <div>{product.name}</div>

                        })
                    }
                </>
            )
        } else {
            return <div>loading</div>
        }
    }
}






















export default ProductList;