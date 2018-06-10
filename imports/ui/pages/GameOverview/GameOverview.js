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
        <div className="container">
          <Header game={game} game_id={game_id} />
          <FormationGoalkeeper player={game.goalkeeper} game_id={game_id} />
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
  game: PropTypes.object,
  formations: PropTypes.arrayOf(PropTypes.object)
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
