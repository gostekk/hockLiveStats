import React from 'react';
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

import FormationPlayer from '../FormationPlayer/FormationPlayer';

// Load Colletions
import { Player } from "../../../api/Player/player";

const FormationPlayers = ({ loadingPlayer, formationPlayers, formationOrder, formation_id }) => {
  if (!loadingPlayer) {
    if (formationPlayers) {
      return (
        <div className="row">
          <div className="col-md-12">  
            <div className="card bg-light mb-3">
              <div className="card-header">
                Formation {formationOrder}
              </div>
              <div className="card-body">
                { formationPlayers.map((player) => (
                  <FormationPlayer key={player._id} player={player} formation_id={formation_id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>No players for this formation</div>;
    }
  } else {
    return <div>Loading</div>;
  }
};

FormationPlayers.propTypes = {
  formationPlayers: PropTypes.arrayOf(PropTypes.object)
};

export default withTracker(({ formation_id }) => {
  const subscriptionPlayer = Meteor.subscribe("formationPlayers", formation_id);
  return {
    loadingPlayer: !subscriptionPlayer.ready(),
    formation_id,
    formationPlayers: Player.find({ formation_id }).fetch()
  };
})(FormationPlayers);
