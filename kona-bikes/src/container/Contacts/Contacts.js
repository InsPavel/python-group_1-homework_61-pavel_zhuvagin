import React, {Component, Fragment} from 'react';
import ContactsContent from "../../components/ContactsContent/ContactsContent";

class Contacts extends Component{
    render(){
        return(
            <Fragment>
                <div className='contacts'>
                    <ContactsContent/>
                </div>
            </Fragment>
        )
    }
}

export default Contacts;