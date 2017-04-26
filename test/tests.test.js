// @flow

import extractApi from '../index.js';
import { format } from 'util';

import { describe, it, expect } from './jasmine.js';

describe('Extract API', function() {
  ['/api/host/10', '/api/host/10/', 'api/host/10'].forEach(function(path) {
    it(format('should extract the path id from %s', path), function() {
      expect(extractApi(path)).toEqual('10');
    });
  });
});
