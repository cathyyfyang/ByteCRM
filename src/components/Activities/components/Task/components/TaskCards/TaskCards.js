import React from 'react';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import CreateTaskCard from './components/CreateTaskCard';
import CardContainer from '../../../../../Style/Card/Activity/Container';
import './TaskCards.scss';

function TaskCards(props) {
  const createCard = (card) => (
    <CreateTaskCard
      card={card}
      getRelatedTo={props.getRelatedTo}
      assignedToUser={props.assignedToUser}
      onChangeTask={props.onChangeTask}
      handleAddUser={props.handleAddUser}
      handleRemoveUser={props.handleRemoveUser}
    />
  );
  const icon = faTasks;
  return (
    <div className="taskCards">
      {props.cardsArray.map((cards) => (
        <CardContainer
          key={cards.date}
          date={cards.date}
          content={cards.content}
          icon={icon}
          createCard={createCard}
          handleTest={props.handleTest}
          handleDeleteCard={props.handleDeleteCard}
        />
      ))}
    </div>
  );
}

export default TaskCards;
