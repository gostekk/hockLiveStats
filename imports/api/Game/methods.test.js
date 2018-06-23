import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';

import { Game } from './game';
import './methods';

if (Meteor.isServer) {
  import { resetDatabase } from 'meteor/xolvio:cleaner';

  describe('Game methods', () => {

    describe('game.insert', () => {

      afterEach(() => {
        resetDatabase();
      });

      it('should add new game', function() {
        const id = Meteor.server.method_handlers['game.insert']('Undefined');
  
        expect(id).to.be.a('string');
      });
  
      it('should fail validate game.insert', function() {
        expect( () => {
          Meteor.server.method_handlers['game.insert']();
        }).to.throw('Name is required');
      });
    });

    describe('game.remove', () => {

      let id = undefined;
      beforeEach(function() {
        id = Meteor.server.method_handlers['game.insert']('Undefined');
      });

      it('should remove game', function() {
        expect(Game.findOne({_id: id})._id).to.be.equal(id);
        expect( () => {
          Meteor.server.method_handlers['game.remove'](id);
        }).to.not.throw();
        expect(Game.findOne({_id: id})).to.be.a('undefined');
      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['game.remove'](2313);
        }).to.throw();
      });
    });

    describe('goalkeeper.shotOn', () => {

      let id = undefined;
      before(function() {
        id = Meteor.server.method_handlers['game.insert']('Undefined');
      });

      after(function() {
        resetDatabase();
      });
      
      it('should increase shotOn value by 1', function() {
        expect(Game.findOne({_id: id}).goalkeeper.shotsOn).to.be.equal(0);
        Meteor.server.method_handlers['goalkeeper.shotsOn'](id, 1);
        expect(Game.findOne({_id: id}).goalkeeper.shotsOn).to.be.equal(1);
      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['goalkeeper.shotsOn'](id, 2);
        }).to.throw('2 is not an allowed value');
      });

      it('should throw invalid game_id error', function() {
        expect( () => {
          Meteor.server.method_handlers['goalkeeper.shotsOn']('id123Test', 1);
        }).to.throw('Game not found [404]');
      });
    });

    describe('opponent.goals.', () => {

      let id = undefined;
      before(function() {
        id = Meteor.server.method_handlers['game.insert']('Undefined');
      });

      after(function() {
        resetDatabase();
      });

      it('should increase opponent.goals and shots value', function() {
        expect(Game.findOne({_id: id}).goalsAgainst).to.be.equal(0);
        expect(Game.findOne({_id: id}).shotsAgainst).to.be.equal(0);
        Meteor.server.method_handlers['opponent.goals'](id, 1);
        expect(Game.findOne({_id: id}).goalsAgainst).to.be.equal(1);
        expect(Game.findOne({_id: id}).shotsAgainst).to.be.equal(1);
      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['opponent.goals'](id, 2);
        }).to.throw('2 is not an allowed value');
      });

      it('should throw invalid game_id error', function() {
        expect( () => {
          Meteor.server.method_handlers['opponent.goals']('id123Test', 1);
        }).to.throw('Game not found [404]');
      });
    });

    describe('game.goals', () => {

      let id = undefined;
      before(function() {
        id = Meteor.server.method_handlers['game.insert']('Undefined');
      });

      after(function() {
        resetDatabase();
      });

      it('should increase game.goals and shots value by 1', function() {
        expect(Game.findOne({_id: id}).goals).to.be.equal(0);
        expect(Game.findOne({_id: id}).shots).to.be.equal(0);
        Meteor.server.method_handlers['game.goals'](id, 1);
        expect(Game.findOne({_id: id}).goals).to.be.equal(1);
        expect(Game.findOne({_id: id}).shots).to.be.equal(1);
      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['game.goals'](id, 2);
        }).to.throw('2 is not an allowed value');
      });

      it('should throw invalid game_id error', function() {
        expect( () => {
          Meteor.server.method_handlers['opponent.goals']('id123Test', 1);
        }).to.throw('Game not found [404]');
      });
    });

    describe('game.shots', () => {

      let id = undefined;
      before(function() {
        id = Meteor.server.method_handlers['game.insert']('Undefined');
      });

      after(function() {
        resetDatabase();
      });

      it('should increase game.shots value by 1', function() {
        expect(Game.findOne({_id: id}).shots).to.be.equal(0);
        Meteor.server.method_handlers['game.shots'](id, 1);
        expect(Game.findOne({_id: id}).shots).to.be.equal(1);
      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['game.shots'](id, 2);
        }).to.throw('2 is not an allowed value');
      });

      it('should throw invalid game_id error', function() {
        expect( () => {
          Meteor.server.method_handlers['opponent.goals']('id123Test', 1);
        }).to.throw('Game not found [404]');
      });
    });

    describe('game.reset', () => {

      let id = undefined;
      before(function() {
        id = Meteor.server.method_handlers['game.insert']('Undefined');
      });

      after(function() {
        resetDatabase();
      });

      // it('should pass game.reset method/fake check', function() {
      //   expect( () => {
      //     Meteor.server.method_handlers['game.reset'](id, 2);
      //   }).to.throw('2 is not an allowed value');
      // });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['game.reset']('id123Test');
        }).to.throw();
      });

      it('should throw invalid game_id error', function() {
        expect( () => {
          Meteor.server.method_handlers['game.reset']('id123Test');
        }).to.throw('Game not found [404]');
      });
    });
  });
}