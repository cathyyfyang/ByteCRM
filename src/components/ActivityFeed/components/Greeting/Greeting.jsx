import React from 'react';
import './Greeting.scss';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}
      </div>
    )
  }
}

export default Greeting;
