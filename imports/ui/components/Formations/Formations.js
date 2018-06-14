import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Session } from 'meteor/session'
import PropTypes from "prop-types";

import FormationPlayers from '../../components/FormationPlayers/FormationPlayers';

// Load Colletions
import { Formation } from "../../../api/Formation/formation";

// Session variable
Session.set('playerEditId', undefined);

const Formations = ({ loadingFormations, formations, game_id }) => {
  if (!loadingFormations) {
    if (formations.length) {
      return (
        <div>
          { formations.map((formation) => (
            <FormationPlayers key={formation._id} formation_id={formation._id} formationOrder={formation.order} game_id={game_id} />
          ))}
        </div>
      );
    } else {
      return <div>No formations for this game!</div>;
    }
  } else {
    return <div>Loading</div>;
  }
};

Formations.propTypes = {
  loadingFormations: PropTypes.bool.isRequired,
  formations: PropTypes.arrayOf(PropTypes.object),
  game_id: PropTypes.string.isRequired
};

export default withTracker(({ game_id }) => {
  const subscriptionFormations = Meteor.subscribe("gameFormations", game_id);
  return {
    loadingFormations: !subscriptionFormations.ready(),
    game_id,
    formations: Formation.find({ game_id }).fetch(),
  };
})(Formations);
