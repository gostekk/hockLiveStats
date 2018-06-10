import React from 'react';

const HeaderActions = ({ game_id }) => (
  <div className="row">
    <div className="col-md-6">
      <button type="button" className="btn btn-dark pull-right" onClick={() => {
          Meteor.call("game.reset", game_id, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }}>Reset</button>
    </div>
    <div className="col-md-6">
      <div className="btn-group" role="group" aria-label="Goals buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          Meteor.call("opponent.goals", game_id, 1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }}>+</button>
        <button type="button" disabled className="btn btn-dark">Goal</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          Meteor.call("opponent.goals", game_id, -1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }}>-</button>
      </div>
      <div className="btn-group" role="group" aria-label="Shots buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          Meteor.call("goalkeeper.shotsOn", game_id, 1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }}>+</button>
        <button type="button" disabled className="btn btn-dark">Shot</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          Meteor.call("goalkeeper.shotsOn", game_id, -1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }}>-</button>
      </div>
    </div>
  </div>
);

export default HeaderActions;