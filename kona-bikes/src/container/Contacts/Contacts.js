import React, {Component, Fragment} from 'react';
import Navs from "../../components/Navs/Navs";

class Contacts extends Component{
    render(){
        return(
            <Fragment>
                <div className='contacts'>
                    <Navs/>
                </div>
            </Fragment>
        )
    }
}

export default Contacts;