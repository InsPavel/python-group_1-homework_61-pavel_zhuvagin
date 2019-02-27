import React, {Component, Fragment} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navs extends Component {
    render() {
        return (
            <Fragment>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About as</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contacts</NavLink>
                    </NavItem>
                </Nav>
            </Fragment>
        )
    }
}

export default Navs;