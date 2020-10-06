import React from 'react';
import './ContactUs.scss';
import Call from '../img/Company/call.svg';
import Email from '../img/Contact/mail.png';
import Calltosale from '../img/Contactus/calltosale.jpeg';
import Emailtous from '../img/Contactus/emailtous.jpeg';
import CatchBackground from './components/CatchBackground';

const ContactUs = () => (
    <div className="Contact_container">
        <div className="Contact_layout">
            <CatchBackground />
            <div className="Contact_method">
                <div className="Call_sale">
                    <image className = "Call_background" src = {Calltosale} alt = "Call to sale"/>
                </div>
                <div className="Customer_service">
                    <div className="Email_customer">
                    <image className = "Email_background" src = {Emailtous} alt = "Call to sale"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ContactUs;