import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

import { Game } from "../../../api/Game/game";

const GameOverview = ({ loading, game, game_id, match }) => {
  if (!loading) {
    if (game) {
      console.log(game);
      return (
        <div>
          <h1>{game_id}</h1>
          <p>{game.name}</p>
        </div>
      );
    } else {
      return <div>No game with this ID</div>;
    }
  } else {
    return <div>Loading</div>;
  }
};

GameOverview.propTypes = {
  game: PropTypes.object
};

export default withTracker(({ match }) => {
  const game_id = match.params.game_id;
  const subscription = Meteor.subscribe("game", game_id);
  return {
    loading: !subscription.ready(),
    game_id,
    game: Game.findOne({ _id: game_id })
  };
})(GameOverview);
