import React from 'react';
import DatePicker from '../../../../../../../../../Style/Picker/DatePicker';
import TimePicker from '../../../../../../../../../Style/Picker/TimePicker';
import TypeDropdown from '../../../../../TaskModal/components/TaskInput/components/Dropdown/Type';
import PriorityDropdown from '../../../../../TaskModal/components/TaskInput/components/Dropdown/Priority';
import {transferTimeHHMM} from '../../../../../../../../../services/timeManager';
import UserTag from '../../../../../../../../../Style/Tag/User';
import UserIcon from '../../../../../../../../../../img/Contact/profile.png';
import './InputTaskType.scss';
import UserSelector from '../../../../../../../../../UserSelector/UserSelector';


const InputTaskType = ({
  currentTime,
  currentDate,
  onDateChange,
  onTimeChange,
  onPriorityChange,
  userName,
  handleAddUser,
  handleDeleteUser,
  contactSelectHint,
  user,
  userId,
  userList,
}) => (
        <div className="inputTaskType">
          <div className='inputTaskType__content'>          
            <div className='inputTaskType__content__input'>
              <div className='inputTaskType__content__input__picker'>
                <UserTag
                  userName={userName}
                  userIcon={UserIcon}
                />
                <UserSelector userList={userList}
                              user={user}
                              userId={userId}
                              contactSelectHint = {contactSelectHint}
                              handleAddUser = {handleAddUser}
                              handleDeleteUser = {handleDeleteUser} />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <div className="cardLabel">
                  Date
                </div>
                <DatePicker defaultDate={currentDate}
                  onDateChange={onDateChange} />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <div className="cardLabel">
                  Time
                </div>
                <TimePicker defaultTime={transferTimeHHMM(currentTime)} 
                  onTimeChange={onTimeChange} />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <span className="cardLabel">Type</span>
                <TypeDropdown />
              </div>
              <div className='inputTaskType__content__input__picker'>
                <span className="cardLabel">Priority</span>
                <PriorityDropdown onPriorityChange={onPriorityChange}/>
              </div>
              <div className='inputTaskType__content__input__picker'>
                <div className="cardLabel">
                  Created by
                </div>
                <div className='inputTaskType__content__input__text'>
                   <span>Olivia Hou</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      )

export default InputTaskType;