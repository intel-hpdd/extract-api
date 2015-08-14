'use strict';

var extractApiId = require('../index');
var format = require('util').format;

describe('Extract API', function () {

  ['/api/host/10', '/api/host/10/', 'api/host/10'].forEach(function (path) {
    it(format('should extract the path id from %s', path), function () {
      expect(extractApiId(path)).toEqual('10');
    });
  });

  [7, true, false, [], {}, null, undefined, NaN].forEach(function (path) {
    it(format('should return undefined if %s is passed in', path), function () {
      expect(extractApiId(path)).toEqual(undefined);
    });
  });
});
