import React from 'react';
import Greeting from './components/Greeting';
import Meetings from './components/Meetings';
import Tasks from './components/Tasks';
import { GetTodayMeetingsByUserId } from '../Api/Meeting/meeting';
import './ActivityFeed.scss';

const user = JSON.parse(localStorage.getItem('user'));

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      meetingArray: [],
      meetingList: [],
    };
    
    this.sortMeetingArray = this.sortMeetingArray.bind(this);
    // this.taskList = [
    //   {
    //     name:'Task for Li Lei',
    //     taskType:'TO-DO',
    //     description:'Test',
    //     relatedTo:'Chloe',
    //     time:'08:00 AM',
    //     date:'2020-10-30',
    //   }
    // ];
    // this.meetingList = [
    //   {
    //     title:'Test Meeting',
    //     description:'Test',
    //     time:'08:00 AM',
    //     date:'2020-10-30',
    //     duration: '30 miniutes'
    //   },
    //   {
    //     title:'Test Meeting2',
    //     description:'Test2',
    //     time:'10:00 AM',
    //     date:'2020-10-30',
    //     duration: '30 miniutes'
    //   }
    // ]
  }

  componentDidMount() {
    //this.handleGetMeetingsByUser();
    this.setState(() => {
      GetTodayMeetingsByUserId(user.id)
          .then(meetingData => this.setState({
              meetingArray: meetingData,
          }))
          .catch(error => this.setState({ error }));
    });
  }

  handleGetMeetingsByUser() {
    let MeetingsOfCurrentUser = [];
    MeetingsOfCurrentUser = GetTodayMeetingsByUserId(user.id);

    MeetingsOfCurrentUser
      .then((result) => {
        this.setState({
          meetingList: result,
        });
        return this.state.meetingList;
      })
      .then((result) => {
        this.state.meetingArray = result;
        console.log(this.state.meetingList)
      })
  }
  

  //TODO: sort meeting
  sortMeetingArray() {
    const newMeetingArray = this.state.meetingList;
    this.setState({
      meetingArray: newMeetingArray,
    });
  }

  render() {
    const { meetingArray } = this.state;
    
    return (
      <div className="activity-feed-container">
        <div className="activity-feed-header">
          <Greeting 
            name={user.firstName}
          />
        </div>
        <div className="activity-feed-body">
          <div className="activity-feed-body--left">
            <Meetings meetingArray={meetingArray}/>
          </div>
          <div className="activity-feed-body--right">
            <Tasks />
          </div>
        </div>
      </div>
    )
  }
}

export default ActivityFeed;
