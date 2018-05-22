import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

import FormationPlayers from '../../components/FormationPlayers/FormationPlayers';

// Load Colletions
import { Formation } from "../../../api/Formation/formation";

const Formations = ({ loadingFormations, formations, game_id }) => {
  if (!loadingFormations) {
    if (formations.length) {
      return (
        <div>
          { formations.map((formation) => (
            <FormationPlayers key={formation._id} formation_id={formation._id} formationOrder={formation.order} />
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
  formations: PropTypes.arrayOf(PropTypes.object)
};

export default withTracker(({ game_id }) => {
  const subscriptionFormations = Meteor.subscribe("gameFormations", game_id);
  return {
    loadingFormation: !subscriptionFormations.ready(),
    game_id,
    formations: Formation.find({ game_id }).fetch()
  };
})(Formations);
