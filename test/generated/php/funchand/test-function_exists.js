// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var function_exists = require('../../../../src/php/funchand/function_exists.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/funchand/function_exists.js (tested in test/generated/php/funchand/test-function_exists.js)', function () {
  it.skip('should pass example 1', function (done) {
    var expected = true
    var result = function_exists('isFinite')
    expect(result).to.deep.equal(expected)
    done()
  })
})