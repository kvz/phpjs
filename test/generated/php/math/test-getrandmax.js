// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var getrandmax = require('../../../../src/php/math/getrandmax.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/getrandmax.js (tested in test/generated/php/math/test-getrandmax.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 2147483647
    var result = getrandmax()
    expect(result).to.deep.equal(expected)
    done()
  })
})
