'use strict';

if (process.env.RUNNER === 'CI') {
  var krustyJasmineReporter = require('krusty-jasmine-reporter');

  var junitReporter = new krustyJasmineReporter.KrustyJasmineJUnitReporter({
    specTimer: new jasmine.Timer(),
    JUnitReportSavePath: process.env.SAVE_PATH || './',
    JUnitReportFilePrefix: process.env.FILE_PREFIX || 'extract-api-results',
    JUnitReportSuiteName: 'Extract Api Reports',
    JUnitReportPackageName: 'Extract Api Reports'
  });

  jasmine.getEnv().addReporter(junitReporter);
}
