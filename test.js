'use strict';

import { assert } from 'chai';
import makeSortKey from './src';

describe('makeSortKey', function() {
  it('should concatenate inputs', function() {
    assert.equal(makeSortKey('a', 'b'), 'a b');
  });

  it('should lowercase inputs', function() {
    assert.equal(makeSortKey('DUPONT'), 'dupont');
  });

  it('should trim inputs', function() {
    assert.equal(makeSortKey('  Apple  Computer '), 'apple computer');
  });

  it('should remove accents', function() {
    assert.equal(makeSortKey('dûpont'), 'dupont');
  });

  it('should ignore empty string', function() {
    assert.equal(makeSortKey('', '', 'Apple Computer'), 'apple computer');
  });

  it('should ignore null or undefined', function() {
    assert.equal(makeSortKey(null, undefined, 'a'), 'a');
  });
});
