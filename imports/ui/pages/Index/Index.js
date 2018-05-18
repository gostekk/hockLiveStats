import React from "react";
import { Link } from "react-router-dom";

import NewGame from "../../components/NewGame/NewGame";

// TODO: buttons onClick to use methods

class Index extends React.Component {
  render() {
    return (
      <div>
        Index
        <br />
        <NewGame {...this.props} />
        <br />
        <Link to="/game/id">To old game</Link>
        <br />
      </div>
    );
  }
}

export default Index;
