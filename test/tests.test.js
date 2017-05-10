// @flow

import extractApi from '../index.js';

import { describe, it, expect } from './jasmine.js';

describe('Extract API', function() {
  ['/api/host/10', '/api/host/10/', 'api/host/10'].forEach(path => {
    it(`should extract the path id from ${path}`, () => {
      expect(extractApi(path)).toEqual('10');
    });
  });

  it('should throw when string is not found', () => {
    expect(() => extractApi('foo')).toThrow(
      'could not extract api id from foo'
    );
  });
});
