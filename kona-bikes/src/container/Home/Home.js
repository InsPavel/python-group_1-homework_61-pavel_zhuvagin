import React, {Component, Fragment} from 'react';
import './Home.css'
import Navs from "../../components/Navs/Navs";
import Example from "../../components/UI/Carousel/Carousel";
import Content from "../../components/Content/Content";


class Home extends Component {
    aboutKonaHandler = () => {
        this.props.history.push({
            pathname: '/about',
        })
    };

    contactsKonaHandler = () => {
        this.props.history.push({
            pathname: '/contacts',
        })
    };


    render() {
        return (
            <Fragment>
                <Navs
                    aboutHandler={this.aboutKonaHandler}
                    contactsHandler={this.contactsKonaHandler}
                />
                <Example/>
                <Content/>
            </Fragment>
        )
    }
}

export default Home;