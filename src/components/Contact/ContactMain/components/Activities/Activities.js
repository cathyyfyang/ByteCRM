import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';

import TabBar from './components/TabBar';
import './Activities.scss';
import NotesTimeLine from './components/Functions/Note/NotesTimeLine';


class Activities extends React.Component {
    constructor(props) {
        super(props);
        const tabItems = [
            { key: 'Activity', value: 'Activity', activity: (<div><NotesTimeLine /></div>) },
            { key: 'Notes', value: 'Notes', activity: (<div>Notestest</div>) },
            { key: 'Emails', value: 'Emails', activity: (<div>Emails</div>) },
            { key: 'Calls', value: 'Calls', activity: (<div>Calls</div>) },
            { key: 'Tasks', value: 'Tasks', activity: (<div>Tasks</div>) },
            { key: 'Meetings', value: 'Meetings', activity: (<div>Meetings</div>) },
        ];
        this.state = {
            currentActivity: tabItems[0].key,
            tabItems,
        }
        this.handleOnclick = this.handleOnclick.bind(this);
    }

    handleOnclick(item){
        console.log(item.key);
       this.setState({
           currentActivity:item.key,
       })
    }

    render() {
        const { tabItems, currentActivity } = this.state;

        return (
            <div className='container'>
                <TabBar
                    tabItems={tabItems}
                    currentPage={currentActivity}
                    onTabItemClick={this.handleOnclick}
                />
                <div className="activityPage">
                    {tabItems.map((tabItem) => {
                        if (currentActivity !== tabItem.key) {
                            return null;
                        }
                        return (
                            <React.Fragment key={tabItem.key}>
                                {tabItem.activity}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Activities;