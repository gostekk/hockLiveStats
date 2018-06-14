import React from "react";

import NewGame from "../../components/NewGame/NewGame";

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
