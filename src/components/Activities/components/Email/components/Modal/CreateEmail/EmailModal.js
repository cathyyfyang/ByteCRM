import React from 'react';
import './EmailModal.scss';
import EmailFunctionBar from './components/EmailFunctionBar';
import EmailHeader from './components/EmailHeader';
import EmailInput from './components/EmailInput';
import EmailSendBar from './components/EmailSend';
import store from '../../../../../../../store';

class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    const { contact } = store.getState().contact;
    let contacts = [];
    contact ? contacts.push(contact) : contacts = [];
    const items = [
      { key: 'Templates', value: 'Templates' },
      { key: 'Sequences', value: 'Sequences' },
      { key: 'Documents', value: 'Documents' },
      { key: 'Meetings', value: 'Meetings' },
      { key: 'Quotes', value: 'Quotes' },
    ];

    this.state = {
      items,
      contacts,
    };
  }

  render() {
    const { items, contacts } = this.state;
    return (
      <div className="emailModal">
        <EmailFunctionBar
          items={items}
        />
        <EmailHeader
          contacts={contacts}
        />
        <EmailInput />
        <EmailSendBar />
      </div>
    );
  }
}

export default EmailModal;
