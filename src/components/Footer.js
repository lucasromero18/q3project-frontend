import React, { Component } from 'react';
import { Card, CardFooter } from 'reactstrap';

const footer =  {
    styles: {
        backgroundColor: "red",
        color: "white"
    }
}

const fitnessInventory = {
    styles: {
        color: "white"
    }
}

class Footer extends Component {
    render() {
        return (
            <>
                <Card style={footer.styles}>
                    <CardFooter className="text-muted" style={fitnessInventory.styles}>Fitness Inventory Today 2019</CardFooter>
                </Card>
            </>
        )
    }
}






















export default Footer;