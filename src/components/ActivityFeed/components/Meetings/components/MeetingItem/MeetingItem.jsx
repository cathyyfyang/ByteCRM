import React from 'react';
import './MeetingItem.scss';

const MeetingItem = (props) => (
  <div className="activity-meeting-item">
    <div>{props.time}</div>
    <div>{props.title ? props.title : <span dangerouslySetInnerHTML={{ __html: props.description }} />} with {props.contacts[0].fullName}</div>
    {/* <div>{props.title} with {props.contacts[0].fullName} </div> */}
  </div>
)

export default MeetingItem;
