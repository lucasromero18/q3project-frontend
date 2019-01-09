import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
   

    const header =  {
        styles: {
            backgroundColor: "red"
        }
    }

    const fit = {
        styles: {
            color: "white",
            fontSize: "40px"
        }
    }

    const links = {
        styles: {
            color: "white"
        }
    }



class Header extends Component {
    render() {
        return (
            <>
            <div>
                <Navbar style={header.styles} light expand="md">
                    <NavbarBrand style={fit.styles} href="/">F.I.T</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={links.styles} href="/components/">Fitness</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/cart' style={links.styles}>Your Cart</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                  </div>
                  </>
                    )
                }
            }
            
export default Header;