import React from 'react';
import{Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component{
    
    constructor(props){
        let s=0;
        super(props);
        this.toggleNavbar=this.toggleNavbar.bind(this);
        this.state={
            isOpen:s=1?true:false,
            
        };
    }

    toggleNavbar(){
        this.setState({
            isOpen:!this.state.isOpen,
        });
    }

    render(){
        return(
            <header className="App">
                    <NavbarToggler right onClick={this.toggleNavbar} />
                    <NavbarBrand tag={Link} to="/">SchoolWeiBo</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/account/login">Log In</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                
            </header>
        )
    }
}
