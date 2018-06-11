import React from 'react';

const FormationGoalkeeper = ({ player, game_id, game }) => (
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
            <div className="col-md-3">
              Name
            </div>
            <div className="col-md-1 text-center">
              Saves
            </div>
            <div className="col-md-1 text-center">
              Shots
            </div>
            <div className="col-md-1 text-center">
              Saves(%)
            </div>
            <div className="col-md-5 text-center">
            </div>
          </div>
          <div className="row pt-2 align-items-center">
            <div className="col-md-1">
              G1
            </div>
            <div className="col-md-3">
              { player.name ? player.name : "Undefined" }
            </div>
            <div className="col-md-1 text-center">
              { player.shotsOn - game.goalsAgainst }
            </div>
            <div className="col-md-1 text-center">
              { player.shotsOn }
            </div>
            <div className="col-md-1 text-center">
              { ((player.shotsOn - game.goalsAgainst)/player.shotsOn * 100).toFixed(2) }%
            </div>
            <div className="col-md-5 text-center">
              {/* <div className="btn-group btn-group-sm mr-1" role="group" aria-label="Shots buttons">
                <button type="button" className="btn btn-success" onClick={() => {
                  Meteor.call("goalkeeper.shotsOn", game_id, 1, (error, _id) => {
                    if (error) {
                      console.log(error.reason);
                    } else {
                      console.log('Success');
                    }
                  });
                }}>Sho</button>
                <button type="button" className="btn btn-danger" onClick={() => {
                  Meteor.call("goalkeeper.shotsOn", game_id, -1, (error, _id) => {
                    if (error) {
                      console.log(error.reason);
                    } else {
                      console.log('Success');
                    }
                  });
                }}>tOn</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FormationGoalkeeper;