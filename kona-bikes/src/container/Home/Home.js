import React, {Component, Fragment} from 'react';
import './Home.css'
import Example from "../../components/UI/Carousel/Carousel";
import Content from "../../components/Content/Content";


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