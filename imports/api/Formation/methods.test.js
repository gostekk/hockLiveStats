import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';

import { Formation } from './formation';
import './methods';

if (Meteor.isServer) {
  import { resetDatabase } from 'meteor/xolvio:cleaner';

  describe('Formation methods', () => {

    describe('formation.insert', () => {

      after(() => {
        resetDatabase();
      });

      it('should add new formation', function() {
        const id = Meteor.server.method_handlers['formation.insert']('gameID123', 1);
  
        expect(id).to.be.a('string');
      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['formation.insert']();
        }).to.throw('Game ID is required');
        expect( () => {
          Meteor.server.method_handlers['formation.insert']('id123test');
        }).to.throw('Order is required');
      });
    });

    describe('formation.remove', () => {

      let id = undefined;

      beforeEach(function() {
        id = Meteor.server.method_handlers['formation.insert']('gameID123', 1);
      });

      after(function() {
        resetDatabase();
      });

      it('should remove formation', function() {
        expect(Formation.findOne({_id: id})._id).to.be.equal(id);
        expect( () => {
          Meteor.server.method_handlers['formation.remove'](id);
        }).to.not.throw();
        expect(Formation.findOne({_id: id})).to.be.a('undefined');
      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['formation.remove'](2313);
        }).to.throw();
      });
    });

    describe('formation.reset', () => {

      let id = undefined;

      beforeEach(function() {
        id = Meteor.server.method_handlers['formation.insert']('gameID123', 1);
      });

      after(function() {
        resetDatabase();
      });

      it.skip('should pass formation reset method/fake check', function() {

      });

      it('should throw validation error', function() {
        expect( () => {
          Meteor.server.method_handlers['formations.reset'](123);
        }).to.throw();
      });

      it('should throw invalid formation_id', function() {
        expect( () => {
          Meteor.server.method_handlers['formations.reset']('id123Test');
        }).to.throw('Formations not found [404]');
      });
    });
  });
}