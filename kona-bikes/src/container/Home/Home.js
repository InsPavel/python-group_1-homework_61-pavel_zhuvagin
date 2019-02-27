import React, {Component, Fragment} from 'react';
import './Home.css'
import Navs from "../../components/Navs/Navs";
import Example from "../../components/UI/Carousel/Carousel";
import Content from "../../components/Content/Content";


class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className='background'>
                    <div className="home">
                        <Navs/>
                        <Example/>
                        <Content/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;