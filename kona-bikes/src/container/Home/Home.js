import React, {Component, Fragment} from 'react';
import './Home.css'
import Navs from "../../components/Navs/Navs";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="home">
                    <Navs/>
                </div>
            </Fragment>
        )
    }
}

export default Home;