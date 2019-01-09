import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';
 import { Link } from "react-router-dom";
   

    const header =  {
        styles: {
            backgroundColor: "lightgrey"
        }
    }

    const fit = {
        styles: {
            color: "darkred",
            fontSize: "40px"
        }
    }

    const links = {
        styles: {
            color: "darkred"
        }
    }



class Header extends Component {
    render() {
        return (
            <>
            <div>
                <Navbar style={header.styles} light expand="md">
                    <NavbarBrand style={fit.styles} href="/">F.I.T.</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={links.styles}>Fitness</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/cart' style={links.styles}>Your Cart</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                  </div>
                  </>
                    )
                }
            }
            
export default Header;