import React from "react";
import { NavLink } from "react-router-dom";
import "./JumpButton.scss";

const DEST = {
  contact: "/contacts/main",
  CONTACT: "/contacts/main",
  company: "/companies/main",
  COMPANY: "/companies/main",
};

class JumpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <button
        className="nakedBtn"
        onClick={(event) => {
          event.preventDefault();
          sessionStorage.setItem(this.props.type, JSON.stringify(this.props.contact));
        }}
      >
        <NavLink
          activeClassName="active"
          to={{
            pathname: DEST[this.props.type],
          }}
        >
          {this.props.name}
        </NavLink>
        &ensp;
      </button>
    );
  }
}

export default JumpButton;
