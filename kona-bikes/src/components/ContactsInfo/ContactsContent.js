import React, {Component, Fragment} from 'react';
import './ContactsContent.css';

class ContactsContent extends Component {
    render() {
        return (
            <Fragment>
                <div className='contacts_info'>
                    <div className='contacts_text'>
                        <h5>Наименование организации:</h5>
                        <p>The Kona Bike</p>
                        <h5>Адрес:</h5>
                        <p>1622 N State Street, Bellingham</p>
                        <p>Режим работы - ежедневно с 10:00 до 18:00.</p>
                        <h5>URL-адрес:</h5>
                        <p><a href="https://konabikes.com/">https://konabikes.com</a></p>
                        <h5>Телефоны, факсы:</h5>
                        <p>360 656 5862</p>
                        <h5>E-mail:</h5>
                        <p><a href="#">shop@konabikes.com</a></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactsContent;