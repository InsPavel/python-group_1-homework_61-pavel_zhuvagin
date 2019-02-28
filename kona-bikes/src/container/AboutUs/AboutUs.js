import React, {Component, Fragment} from 'react';
import AboutContent from "../../components/AboutContent/AboutContent";

class AboutUs extends Component{
    render(){
        return(
            <Fragment>
                <div className='about_us'>
                    <AboutContent/>
                </div>
            </Fragment>
        )
    }
}

export default AboutUs;