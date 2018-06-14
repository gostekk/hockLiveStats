import React from 'react';
import PropTypes from 'prop-types';

const FormationGoalkeeper = ({ player, game }) => (
  <div className="row">
    <div className="col-md-12">  
      <div className="card bg-light mb-3">
        <div className="card-header">
          Goalkeeper
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
              Saves
            </div>
            <div className="col-md-1 text-center">
              Shots
            </div>
            <div className="col-md-2 text-center">
              S(%)
            </div>
            <div className="col-md-5 text-center">
            </div>
          </div>
          <div className="row pt-2 align-items-center">
            <div className="col-md-1">
              G1
            </div>
            <div className="col-md-2">
              { player.name ? player.name : "Undefined" }
            </div>
            <div className="col-md-1 text-center">
              { player.shotsOn - game.goalsAgainst }
            </div>
            <div className="col-md-1 text-center">
              { player.shotsOn }
            </div>
            <div className="col-md-2 text-center">
              { ((player.shotsOn - game.goalsAgainst)/player.shotsOn * 100).toFixed(2) }%
            </div>
            <div className="col-md-5 text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

FormationGoalkeeper.propTypes = {
  player: PropTypes.object.isRequired,
  game_id: PropTypes.string,
  game: PropTypes.object.isRequired
};

export default FormationGoalkeeper;