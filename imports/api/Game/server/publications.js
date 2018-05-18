import { Meteor } from "meteor/meteor";

import { Game } from "../game";

Meteor.publish("gameAll", function gameAll() {
  return Game.find();
});

Meteor.publish("game", function game(game_id) {
  return Game.find({ _id: game_id });
});
