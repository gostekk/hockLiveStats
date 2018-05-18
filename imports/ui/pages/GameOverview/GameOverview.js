import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

import Header from '../../components/Header/Header';
import Goalkeeper from '../../components/Goalkeeper/Goalkeeper';
import Formation from '../../components/Formation/Formation';

// Load Colletion
import { Game } from "../../../api/Game/game";

const GameOverview = ({ loading, game, game_id }) => {
  if (!loading) {
    if (game) {
      return (
        <div className="container">
          <Header game={game} game_id={game_id} />
          <Goalkeeper goalkeeper={game.goalkeeper} game_id={game_id} />
          <Formation numerOf="1" formation={game.formation1} game_id={game_id} />
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
