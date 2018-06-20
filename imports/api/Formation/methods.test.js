import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import sinon from 'sinon';

import './methods';

if (Meteor.isServer) {
  import { resetDatabase } from 'meteor/xolvio:cleaner';

  describe.skip('Formation methods', () => {

    describe('formation.insert', () => {
      it('should add new formation');
      it('should throw validation error')
    });

    describe('formation.remove', () => {
      it('should remove formation');
      it('should throw validation error');
      it('should throw invalid formation._id error');
    });

    describe('formation.reset', () => {
      it('should pass formation reset method/fake check');
      it('should throw validation error');
      it('should throw invalid game_id error');
    });
  });
}