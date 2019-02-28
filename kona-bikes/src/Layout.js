import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css'
import logo from "./images/kona (1).png";

class Layout extends Component {
    render(){
        return(
            <div className='App'>
                <Fragment>
                    <div className='nav'>
                        <NavLink to='/'><img className='logo' src={logo} alt='logo'/></NavLink>
                        <NavLink  className='nav_li' to='/about'><span>About us</span></NavLink>
                        <NavLink className='nav_li' to='/contacts'><span>Contacts</span></NavLink>
                    </div>
            </Fragment>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;