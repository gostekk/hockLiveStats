import { Meteor } from "meteor/meteor";

import { Player } from "../player";

Meteor.publish("player", function player(player_id) {
  return Player.find({ _id: player_id });
});

Meteor.publish("formationPlayers", function formationPlayer(formation_id) {
  return Player.find({ formation_id });
});

