import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

import { Game } from "./game";

Meteor.methods({
  "game.insert": function gameInsert(name) {
    new SimpleSchema({
      name: {
        type: String,
        min: 4,
        required: true
      }
    }).validate({
      name
    });

    const newGame = {
      name: name,
      archive: false,
      goals: 0,
      shots: 0,
      goalsAgainst: 0,
      shotsAgainst: 0,
      goalkeeper: {
        name: "",
        shotsOn: 0
      },
      formation1: {
        LW: {
          name: "",
          shots: 0,
          goals: 0,
          assists: 0,
          penaltyMinutes: 0,
          shirtNumber: ""
        },
        C: {
          name: "",
          shots: 0,
          goals: 0,
          assists: 0,
          penaltyMinutes: 0,
          shirtNumber: ""
        },
        RW: {
          name: "",
          shots: 0,
          goals: 0,
          assists: 0,
          penaltyMinutes: 0,
          shirtNumber: ""
        },
        LD: {
          name: "",
          shots: 0,
          goals: 0,
          assists: 0,
          penaltyMinutes: 0,
          shirtNumber: ""
        },
        RD: {
          name: "",
          shots: 0,
          goals: 0,
          assists: 0,
          penaltyMinutes: 0,
          shirtNumber: ""
        }
      }
    };
    try {
      return Game.insert({ createdAt: new Date(), ...newGame });
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "game.remove": function gameRemove(_id) {
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({
      _id
    });

    try {
      return Game.remove(_id);
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  }
});
