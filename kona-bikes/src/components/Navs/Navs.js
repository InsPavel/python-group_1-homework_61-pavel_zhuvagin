import React, {Component, Fragment} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navs.css'
import logo from '../../images/logos-kona.png'

class Navs extends Component {
    render() {
        return (
            <Fragment>
                <Nav>
                    <NavItem>
                        <NavLink href="#"><img className='logo' src={logo} alt='logo'/></NavLink>
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