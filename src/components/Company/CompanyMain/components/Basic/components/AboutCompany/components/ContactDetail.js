import React from 'react';


const ContactDetail=(props)=>(
    <div>
        <div className="key_name"> {props.title}</div>
      <div className="value_name"> {props.value}</div>
    </div>
)

export default ContactDetail;