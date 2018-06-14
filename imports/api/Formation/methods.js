import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

import { Formation } from "./formation";

Meteor.methods({
  "formation.insert": function formationInsert(game_id, order) {
    new SimpleSchema({
      game_id: {
        type: String,
        min: 4,
        required: true
      },
      order: {
        type: Number,
        required: true
      }
    }).validate({
      game_id, order
    });

    const newFormation = {
      game_id: game_id,
      order: order
    };

    try {
      const formation = Formation.insert({ createdAt: new Date(), ...newFormation });
      const lw = Meteor.call('player.insert', formation, "LW");
      const c = Meteor.call('player.insert', formation, "C");
      const rw = Meteor.call('player.insert', formation, "RW");
      const ld = Meteor.call('player.insert', formation, "LD");
      const rd = Meteor.call('player.insert', formation, "RD");
      return formation;
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "formation.remove": function formationRemove(_id) {
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({
      _id
    });

    try {
      // TODO: Remove formation players
      return Formation.remove(_id);
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "formations.reset": function formationsReset(game_id) {
    new SimpleSchema({
      game_id: {
        type: String,
        min: 1,
        required: true
      }
    }).validate({
      game_id
    });

    try {
      return Formation.find(
        { game_id: game_id }
      ).fetch().forEach(formation => (
        Meteor.call('players.reset', formation._id)
      ));
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },
});
