import React from 'react';
import { Session } from 'meteor/session'
import PropTypes from 'prop-types';

const HeaderActions = ({ game, game_id }) => (
  <div className="row">
    <div className="col-md-6">
      <button type="button" className="btn btn-dark pull-right" onClick={() => {
          Meteor.call("game.reset", game_id, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              Session.set('playerEditId', undefined);
              console.log('Success: game reseted');
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
              console.log('Success: Changed opponent goals amount');
            }
          });
        }}>+</button>
        <button type="button" disabled className="btn btn-dark">Goal</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          if (game.goalsAgainst > 0) {
            Meteor.call("opponent.goals", game_id, -1, (error, _id) => {
              if (error) {
                console.log(error.reason);
              } else {
                console.log('Success: Changed opponent goals amount');
              }
            });
          } else {
            console.log('Goals can\'t be below zero');
          }
        }}>-</button>
      </div>
      <div className="btn-group" role="group" aria-label="Shots buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          Meteor.call("goalkeeper.shotsOn", game_id, 1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success: Changed opponent shots amount');
            }
          });
        }}>+</button>
        <button type="button" disabled className="btn btn-dark">Shot</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          if (game.shotsAgainst > 0 && game.goalsAgainst < game.shotsAgainst) {
            Meteor.call("goalkeeper.shotsOn", game_id, -1, (error, _id) => {
              if (error) {
                console.log(error.reason);
              } else {
                console.log('Success: Changed opponent shots amount');
              }
            });
          } else {
            console.log('Shots can\'t be below zero');
          }
        }}>-</button>
      </div>
    </div>
  </div>
);

HeaderActions.propTypes = {
  game: PropTypes.object.isRequired,
  game_id: PropTypes.string.isRequired
};

export default HeaderActions;