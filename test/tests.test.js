// @flow

import extractApi from '../index.js';

import { describe, it, expect } from './jasmine.js';

describe('Extract API', function() {
  ['/api/host/10', '/api/host/10/', 'api/host/10'].forEach(function(path) {
    it(`should extract the path id from ${path}`, function() {
      expect(extractApi(path)).toEqual('10');
    });
  });
});
