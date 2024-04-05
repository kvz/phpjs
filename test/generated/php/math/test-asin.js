// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var asin = require('../../../../src/php/math/asin.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/asin.js (tested in test/generated/php/math/test-asin.js)', function () {
  it('should pass example 1', function (done) {
    var expected = "0.304692654015397"
    var result = (asin(0.3) + '').substr(0, 17)
    expect(result).to.deep.equal(expected)
    done()
  })
})
