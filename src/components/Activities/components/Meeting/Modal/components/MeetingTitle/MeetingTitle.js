import React from 'react';
import './MeetingTitle.scss';



class MeetingTitle extends React.Component{
    constructor(props){
        super(props);
    }


    handleOnChange = event => {
        this.props.onTitleChange(event.target.value);
      };

    render(){
        return(
            <div className="meetingTitle">
               <input className = "meetingTitle__input" 
                      placeholder = {"what are you meeting for"}
                      onChange={this.handleOnChange}/>
            </div>
        );

    }
} 

export default MeetingTitle;
