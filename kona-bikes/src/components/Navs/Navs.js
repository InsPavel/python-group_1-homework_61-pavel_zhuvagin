import React, {Component, Fragment} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navs.css'
import logo from '../../images/kona (1).png'

class Navs extends Component {
    render() {
        return (
            <Fragment>
                <Nav className='nav'>
                    <NavItem>
                        <NavLink onClick={this.props.homeHandler}><img className='logo' src={logo} alt='logo'/></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav_li' onClick={this.props.aboutHandler}><span>About as</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav_li' onClick={this.props.contactsHandler}><span>Contacts</span></NavLink>
                    </NavItem>
                </Nav>
            </Fragment>
        )
    }
}

export default Navs;