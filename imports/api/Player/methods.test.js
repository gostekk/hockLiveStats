import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import sinon from 'sinon';

import './methods';

if (Meteor.isServer) {
  import { resetDatabase } from 'meteor/xolvio:cleaner';

  describe.skip('Player methods', () => {
    afterEach(() => {
      resetDatabase();
    });

    describe('player.insert', () => {
      it('should add new player');
      it('should throw validation error');
    });

    describe('player.remove', () => {
      it('should remove player');
      it('should throw validation error');
      it('should throw invalid id error');
    });

    describe('player.editName', () => {
      it('should change player name');
      it('should throw validation error');
      it('should throw invalid id error');
    });

    describe('player.shot', () => {
      it('should increment player shot value');
      it('should throw validation error');
      it('should throw invalid id error');
    });

    describe('player.goal', () => {
      it('should increment player goal value');
      it('should throw validation error');
      it('should throw invalid id error');
    });

    describe('player.assists', () => {
      it('should increment player assist value');
      it('should throw validation error');
      it('should throw invalid id error');
    });

    describe('player.pm', () => {
      it('should increment player penalty minutes value');
      it('should throw validation error');
      it('should throw invalid id error');
    });

    describe('player.reset', () => {
      it('should pass player.reset method/fake check');
      it('should throw validation error');
      it('should throw invalid id error');
    });
  });
}