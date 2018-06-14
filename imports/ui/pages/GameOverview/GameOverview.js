import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

import Header from '../../components/Header/Header';
import Formations from '../../components/Formations/Formations';
import FormationGoalkeeper from "../../components/FormationGoalkeeper/FormationGoalkeeper";

// Load Colletions
import { Game } from "../../../api/Game/game";

const GameOverview = ({ loadingGame, game, game_id }) => {
  if (!loadingGame) {
    if (game) {
      return (
        <div className="container-fluid">
          <Header game={game} game_id={game_id} />
          <FormationGoalkeeper player={game.goalkeeper} game_id={game_id} game={game} />
          <Formations game_id={game_id} />
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
  loadingGame: PropTypes.bool.isRequired,
  game: PropTypes.object,
  game_id: PropTypes.string.isRequired
};

export default withTracker(({ match }) => {
  const game_id = match.params.game_id;
  const subscriptionGame = Meteor.subscribe("game", game_id);
  return {
    loadingGame: !subscriptionGame.ready(),
    game_id,
    game: Game.findOne({ _id: game_id }),
  };
})(GameOverview);
