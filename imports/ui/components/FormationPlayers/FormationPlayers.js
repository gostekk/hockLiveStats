import React from 'react';
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Session } from 'meteor/session'
import PropTypes from "prop-types";

import FormationPlayer from '../FormationPlayer/FormationPlayer';

// Load Colletions
import { Player } from "../../../api/Player/player";

const FormationPlayers = ({ loadingPlayer, formationPlayers, formationOrder, formation_id, game_id }) => {
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
                <div className="row pt-2 align-items-center">
                  <div className="col-md-1">
                    Pos
                  </div>
                  <div className="col-md-2">
                    Name
                  </div>
                  <div className="col-md-1 text-center">
                    SOG
                  </div>
                  <div className="col-md-1 text-center">
                    G
                  </div>
                  <div className="col-md-1 text-center">
                    A
                  </div>
                  <div className="col-md-1 text-center">
                    PiM
                  </div>
                  <div className="col-md-5 text-center">
                    Actions
                  </div>
                </div>
                { formationPlayers.map((player) => (
                  <FormationPlayer 
                    key={player._id} 
                    player={player} 
                    formation_id={formation_id} 
                    game_id={game_id} 
                  />
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
  loadingPlayer: PropTypes.bool.isRequired,
  formationPlayers: PropTypes.arrayOf(PropTypes.object),
  formationOrder: PropTypes.number.isRequired ,
  formation_id: PropTypes.string.isRequired,
  game_id: PropTypes.string.isRequired 
};

export default withTracker(({ formation_id }) => {
  const subscriptionPlayer = Meteor.subscribe("formationPlayers", formation_id);
  const playerEditId = Session.get('playerEditId');
  return {
    loadingPlayer: !subscriptionPlayer.ready(),
    formation_id,
    playerEditId,
    formationPlayers: Player.find({ formation_id }).fetch(),
  };
})(FormationPlayers);
