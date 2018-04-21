import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import './header.css'

class BootstrapHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        var cursorPointer = 'cursor-pointer';
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand className="navBarBrand cursor-pointer name" onClick={()=>{this.props.history.push("/"); this.setState({isOpen:false});}}>Joe Y. Jung</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                         <NavItem>
                                <NavLink className={cursorPointer} href="mailto:joejung428@gmail.com">joejung428@gmail.com</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                           
                            <NavItem>
                                <NavLink className={cursorPointer} onClick={()=>{this.props.history.push("/"); this.setState({isOpen:false});}}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={cursorPointer} onClick={()=>{this.props.history.push("/projects");this.setState({isOpen:false});}}>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={cursorPointer} onClick={()=>{this.props.history.push("/work-history");this.setState({isOpen:false});}}>Work History</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={cursorPointer} onClick={()=>{this.props.history.push("/about");this.setState({isOpen:false});}}>About Me</NavLink>
                            </NavItem>
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                        </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                      </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                      </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default BootstrapHeader;