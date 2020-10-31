import React from 'react';
import './Tasks.scss';

const Tasks = () => (
  <div className="activity-task-container">
    <div className="activity-container-header">
      Today's Tasks
      <div className="activity-task-list">
        {/* No Tasks For Today */}
        <div className="activity-task-item">
          Task Header
          Due Date
          Content
          RelatedTo
        </div>
        <div className="activity-task-item">
          Task Header
          Due Date
          Content
          RelatedTo
        </div>
      </div>
    </div>
  </div>
)

export default Tasks;