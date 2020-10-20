import React from 'react';
import './NoteModal.scss';
import './components/NoteInput';
import NoteSaveBar from './components/NoteSaveBar';
import NoteInput from './components/NoteInput/NoteInput';
import { AddNote } from '../../../../../Api/Note/Note';



class NoteModal extends React.Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem('user'));
    const contact = JSON.parse(sessionStorage.getItem('contact'));

    this.state = {
      user,
      content: '',
      contact,
      btnDisable: true,
    }
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleClickSaveBtn = this.handleClickSaveBtn.bind(this);
  }

  handleEditorChange(content) {
    if (this.checkValidation(content)) {
      this.setState({
        content: content,
        btnDisable: false
      })
    }
    else{
      this.setState({
        content: content,
        btnDisable: true,
      })
    }
  }

  checkValidation(text){
    const checkInput = text.replaceAll(" ","").replaceAll('<br>', '').replaceAll('<p></p>','');
    if (checkInput!== ''){
      return true
    } else {
      return false; 
    }
  } 

  handleClickSaveBtn(){
    const { content, user, contact } = this.state;
      if (this.checkValidation(content)){
        const body = {
          content: content,
          createdBy: user.id,
          type:'Note',
          isDeleted: false,
          relatedTo: contact,
        }
        const res = AddNote(body);
        res.then(value => {
          if (value) {
            this.props.handleCreateNote(value);
            this.props.handleCloseModal();
          } else {
              console.log("Unexpected Error");
          }
        })
      } else {
          return;
      }
  }
  

  render() {
    const { btnDisable, user, contact } = this.state;

    return (
      <section id="NoteModal" className="NoteModal">
        <div className="note-input">
          <NoteInput 
            placeholder="Start typing to leave a note..."
            handleEditorChange={this.handleEditorChange}
            createdBy={contact}
            relatedTo={user}
          />
        </div>
        <div className="note-container-footer">
          <NoteSaveBar 
            onClick={this.handleClickSaveBtn} 
            btnDisable = {btnDisable} />
        </div>
      </section>
    )
  }
}

export default NoteModal;
