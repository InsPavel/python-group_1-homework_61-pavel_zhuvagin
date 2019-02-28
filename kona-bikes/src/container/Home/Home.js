import React, {Component, Fragment} from 'react';
import Example from "../../components/UI/Carousel/Carousel";
import Content from "../../components/Content/Content";
import './Home.css'


class Home extends Component {
   render() {
        return (
            <Fragment>
                <Example/>
                <Content/>
            </Fragment>
        )
    }
}

export default Home;