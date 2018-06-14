import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";

import { Player } from "./player";

Meteor.methods({
  "player.insert": function playerInsert(formation_id, position, name = "Undefined" ) {
    new SimpleSchema({
      name: {
        type: String,
        min: 4,
        max: 40,
        required: true
      },
      position: {
        type: String,
        allowedValues: ['LW', 'RW', 'C', 'LD', 'RD'],
        required: true
      },
      formation_id: {
        type: String,
        required: true
      }
    }).validate({
      name, position, formation_id
    });

    const newPlayer = {
      formation_id: formation_id,
      name: name,
      position: position,
      shots: 0,
      goals: 0,
      assists: 0,
      penaltyMinutes: 0,
      shirtNumber: "",
    };

    try {
      return Player.insert({ createdAt: new Date(), ...newPlayer });
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "player.remove": function playerRemove(_id) {
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({
      _id
    });

    try {
      return Player.remove(_id);
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "player.editName": function playerEditName(player_id, formation_id, name) {
    new SimpleSchema({
      player_id: {
        type: String,
        min: 1,
        required: true
      },
      formation_id: {
        type: String,
        min: 1,
        required: true
      },
      name: {
        type: String,
        min: 4,
        max: 40,
        required: true
      }
    }).validate({
      player_id, formation_id, name
    });

    try {
      return Player.update(
        { _id: player_id, formation_id },
      { $set: { name: name}});
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "player.shot": function playerShot(player_id, formation_id, game_id, position, shotValue) {
    new SimpleSchema({
      player_id: {
        type: String,
        min: 1,
        required: true
      },
      formation_id: {
        type: String,
        min: 1,
        required: true
      },
      game_id: {
        type: String,
        min: 1,
        required: true
      },
      position: {
        type: String,
        allowedValues: ['LW', 'RW', 'C', 'LD', 'RD'],
        required: true
      },
      shotValue: {
        type: Number,
        allowedValues: [ 1, -1],
        required: true
      }
    }).validate({
      player_id, formation_id, game_id, position, shotValue
    });

    try {
      Meteor.call("game.shots", game_id, shotValue);
      return Player.update(
        { _id: player_id, formation_id, position },
      { $inc: { shots: shotValue}});
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "player.goal": function playerShot(player_id, formation_id, game_id, position, goalValue) {
    new SimpleSchema({
      player_id: {
        type: String,
        min: 1,
        required: true
      },
      formation_id: {
        type: String,
        min: 1,
        required: true
      },
      game_id: {
        type: String,
        min: 1,
        required: true
      },
      position: {
        type: String,
        allowedValues: ['LW', 'RW', 'C', 'LD', 'RD'],
        required: true
      },
      goalValue: {
        type: Number,
        allowedValues: [ 1, -1],
        required: true
      }
    }).validate({
      player_id, formation_id, game_id, position, goalValue
    });

    try {
      Meteor.call("game.goals", game_id, goalValue);
      return Player.update(
        { _id: player_id, formation_id, position },
      { $inc: { 
        goals: goalValue,
        shots: goalValue
      }});
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "player.assist": function playerShot(player_id, formation_id, position, assistValue) {
    new SimpleSchema({
      player_id: {
        type: String,
        min: 1,
        required: true
      },
      formation_id: {
        type: String,
        min: 1,
        required: true
      },
      position: {
        type: String,
        allowedValues: ['LW', 'RW', 'C', 'LD', 'RD'],
        required: true
      },
      assistValue: {
        type: Number,
        allowedValues: [ 1, -1],
        required: true
      }
    }).validate({
      player_id, formation_id, position, assistValue
    });

    try {
      return Player.update(
        { _id: player_id, formation_id, position },
      { $inc: { assists: assistValue}});
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "player.pm": function playerShot(player_id, formation_id, position, pmValue) {
    new SimpleSchema({
      player_id: {
        type: String,
        min: 1,
        required: true
      },
      formation_id: {
        type: String,
        min: 1,
        required: true
      },
      position: {
        type: String,
        allowedValues: ['LW', 'RW', 'C', 'LD', 'RD'],
        required: true
      },
      pmValue: {
        type: Number,
        allowedValues: [ 1, -1],
        required: true
      }
    }).validate({
      player_id, formation_id, position, pmValue
    });

    try {
      return Player.update(
        { _id: player_id, formation_id, position },
      { $inc: { penaltyMinutes: pmValue}});
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },

  "players.reset": function playerReset(formation_id) {
    new SimpleSchema({
      formation_id: {
        type: String,
        min: 1,
        required: true
      }
    }).validate({
      formation_id
    });

    try {
      return Player.update(
        { formation_id: formation_id },
        { $set: { 
          shots: 0,
          goals: 0,
          assists: 0,
          penaltyMinutes: 0,
          shirtNumber: ""
        }},
        {
          multi: true
        }
      );
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  }
});
