// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strcmp = require('../../../../src/php/strings/strcmp.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/strcmp.js (tested in test/generated/php/strings/test-strcmp.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 1
    var result = strcmp( 'waldo', 'owald' )
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = -1
    var result = strcmp( 'owald', 'waldo' )
    expect(result).to.deep.equal(expected)
    done()
  })
})
