import { Meteor } from "meteor/meteor";

import { Formation } from "../formation";

Meteor.publish("formationAll", function formationAll() {
  return Formation.find();
});

Meteor.publish("formation", function formation(formation_id) {
  return Formation.find({ _id: formation_id });
});

Meteor.publish("gameFormations", function formation(game_id) {
  return Formation.find({ game_id });
});

