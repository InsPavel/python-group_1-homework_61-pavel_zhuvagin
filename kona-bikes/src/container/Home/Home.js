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


    render() {
        return (
            <Fragment>
                <Navs
                    aboutHandler={this.aboutKonaHandler}
                />
                <Example/>
                <Content/>
            </Fragment>
        )
    }
}

export default Home;