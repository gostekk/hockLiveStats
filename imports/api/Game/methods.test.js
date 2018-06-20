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

      it('should add new game', () => {
        const id = Meteor.server.method_handlers['game.insert']('Undefined');
  
        expect(id).to.be.a('string');
      });
  
      it('should fail validate game.insert', () => {
        expect( () => {
          Meteor.server.method_handlers['game.insert']();
        }).to.throw('Name is required');
      });
    });

    describe('game.remove', () => {

      it('should remove game', () => {
        const id = Meteor.server.method_handlers['game.insert']('Undefined');

        expect(Game.findOne({_id: id})._id).to.be.equal(id);
        expect( () => {
          Meteor.server.method_handlers['game.remove'](id);
        }).to.not.throw();
        expect(Game.findOne({_id: id})).to.be.a('undefined');
      });

      it('should throw validation error');
      it('should throw invalid game._id error');
    });

    describe('goalkeeper.shotOn', () => {
      it('should pass shotOn method');
      it('should throw validation error');
      it('should throw invalid game_id error');
    });

    describe('opponent.goals.', () => {
      it('should pass opponent.goals method');
      it('should throw validation error');
      it('should throw invalid game_id error');
    });

    describe('game.goals', () => {
      it('should pass game.goals method');
      it('should throw validation error');
      it('should throw invalid game_id error');
    });

    describe('game.shots', () => {
      it('should pass game.shots method');
      it('should throw validation error');
      it('should throw invalid game_id error');
    });

    describe('game.reset', () => {
      it('should pass game.reset method/fake check');
      it('should throw validation error');
      it('should throw invalid game_id error');
    });
  });
}