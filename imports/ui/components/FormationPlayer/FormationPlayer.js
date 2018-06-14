import React from 'react';
import { Session } from 'meteor/session'
import PropTypes from 'prop-types';

import FormationPlayerEdit from '../FormationPlayerEdit/FormationPlayerEdit';

const FormationPlayer = ({ player, formation_id, game_id }) => (
  <div className="row pt-2 align-items-center">
    <div className="col-md-1">
      { player.position }
    </div>
    <div className="col-md-2">
      { !Session.equals('playerEditId', player._id)
      ? <span className="badge badge-pill badge-primary" onClick={() => {
          Session.set('playerEditId', player._id);
      }}>{ player.name }</span>
      : <FormationPlayerEdit player_id={player._id} formation_id={formation_id} /> }
    </div>
    <div className="col-md-1 text-center">
      { player.shots}
    </div>
    <div className="col-md-1 text-center">
      { player.goals}
    </div>
    <div className="col-md-1 text-center">
      { player.assists}
    </div>
    <div className="col-md-1 text-center">
      { player.penaltyMinutes}
    </div>
    <div className="col-md-5 text-center">
      <div className="btn-group btn-group-sm mr-1" role="group" aria-label="Shots buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          Meteor.call("player.shot", player._id, formation_id, game_id, player.position, 1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }} >Sh</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          if (player.shots > 0 && player.goals < player.shots) {
          Meteor.call("player.shot", player._id, formation_id, game_id, player.position, -1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        } else {
          console.log('Shots can\'t be below zero');
        }
        }} >ot</button>
      </div>
      <div className="btn-group btn-group-sm mr-1" role="group" aria-label="Goals buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          Meteor.call("player.goal", player._id, formation_id, game_id, player.position, 1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }} >Go</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          if (player.goals > 0 && player.goals <= player.shots) {
            Meteor.call("player.goal", player._id, formation_id, game_id, player.position, -1, (error, _id) => {
              if (error) {
                console.log(error.reason);
              } else {
                console.log('Success');
              }
            });
          } else {
            console.log('Goals can\'t be below zero');
          }
        }} >al</button>
      </div>
      <div className="btn-group btn-group-sm mr-1" role="group" aria-label="Assists buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          Meteor.call("player.assist", player._id, formation_id, player.position, 1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }} >Ass</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          if (player.assists > 0) {
          Meteor.call("player.assist", player._id, formation_id, player.position, -1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        } else {
          console.log('Assists can\'t be below zero');
        }
        }} >ist</button>
      </div>
      <div className="btn-group btn-group-sm mr-1" role="group" aria-label="PM buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          Meteor.call("player.pm", player._id, formation_id, player.position, 1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        }} >P</button>
        <button type="button" className="btn btn-danger" onClick={() => {
          if (player.penaltyMinutes > 0) {
          Meteor.call("player.pm", player._id, formation_id, player.position, -1, (error, _id) => {
            if (error) {
              console.log(error.reason);
            } else {
              console.log('Success');
            }
          });
        } else {
          console.log('PMs can\'t be below zero');
        }
        }} >M</button>
      </div>
    </div>
  </div>
)

FormationPlayer.propTypes = {
  player: PropTypes.object.isRequired,
  formation_id: PropTypes.string.isRequired,
  game_id: PropTypes.string.isRequired
};

export default FormationPlayer;