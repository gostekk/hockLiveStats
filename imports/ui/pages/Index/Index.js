import React from "react";
import { Link } from "react-router-dom";

import NewGame from "../../components/NewGame/NewGame";

// TODO: buttons onClick to use methods

class Index extends React.Component {
  render() {
    return (
      <div>
        <br />
        <NewGame {...this.props} />
        <br />
      </div>
    );
  }
}

export default Index;
