import React, {Component, Fragment} from 'react';
import Navs from "../../components/Navs/Navs";
import ContactsContent from "../../components/ContactsInfo/ContactsContent";

class Contacts extends Component{
    homeKonaHandler = () => {
        this.props.history.push({
            pathname: '/',
        })
    };

    aboutKonaHandler = () => {
        this.props.history.push({
            pathname: '/about',
        })
    };

    render(){
        return(
            <Fragment>
                <div className='contacts'>
                    <Navs
                        homeHandler={this.homeKonaHandler}
                        aboutHandler={this.aboutKonaHandler}
                    />
                    <ContactsContent/>
                </div>
            </Fragment>
        )
    }
}

export default Contacts;