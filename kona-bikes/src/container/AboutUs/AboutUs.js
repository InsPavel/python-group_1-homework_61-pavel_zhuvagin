import React, {Component, Fragment} from 'react';
import Navs from "../../components/Navs/Navs";
import AboutContent from "../../components/AboutContent/AboutContent";

class AboutUs extends Component{
    homeKonaHandler = () => {
        this.props.history.push({
            pathname: '/',
        })
    };

    render(){
        return(
            <Fragment>
                <div className='about_us'>
                    <Navs homeHandler={this.homeKonaHandler}/>
                    <AboutContent/>
                </div>
            </Fragment>
        )
    }
}

export default AboutUs;