import React from 'react';
import MeetingItem from './components/MeetingItem';
import './Meetings.scss';


function Meetings(props) {
  const meetings = props.meetingArray;

  return (
    <div className="activity-meeting-container">
        <div className="activity-container-header">
          Today's Meetings
        </div>
        
        <div className="activity-meeting-list">
          {meetings.length
            ? (
              meetings.map(meetingItem => (
              <MeetingItem 
                title={meetingItem.title}
                time={meetingItem.time}
                date={meetingItem.date}
                duration={meetingItem.duration}
                description={meetingItem.description}
                contacts={meetingItem.contacts}
              />
            )))
          : (<div className="activity-empty-box">
              Nothing Scheduled For Today. 
            </div>)
          }
        </div>
      </div>
  );
}

export default Meetings;


// class Meetings extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render () {
//     return (
//       <div className="activity-meeting-container">
//         Today's Meetings
//         <div className="activity-meeting-list">
//           {this.props.meetingList.map((meetingItems) => {
//             <MeetingItem 
//               title={meetingItems.title}
//               description={meetingItems.description}
//               time={meetingItems.time}
//               date={meetingItems.date}
//             />
//           })}
//         </div>
//       </div>
//     )
//   }
// }