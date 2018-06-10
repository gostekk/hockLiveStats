import React from 'react';

const FormationGoalkeeper = ({ player, game_id }) => (
  <div className="row">
    <div className="col-md-12">  
      <div className="card  bg-light mb-3">
        <div className="card-header">
          Goalkeeper
        </div>
        <div className="card-body">
          <div className="row pt-2 align-items-center">
            <div className="col-md-1">
              G1
            </div>
            <div className="col-md-5">
              { player.name ? player.name : "Undefined" }
            </div>
            <div className="col-md-1">
              { player.shotsOn}
            </div>
            <div className="col-md-4">
              <div className="btn-group btn-group-sm mr-1" role="group" aria-label="Shots buttons">
                <button type="button" className="btn btn-success">Sho</button>
                <button type="button" className="btn btn-danger">tOn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FormationGoalkeeper;