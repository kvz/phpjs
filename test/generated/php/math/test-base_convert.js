// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var base_convert = require('../../../../src/php/math/base_convert.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/base_convert.js (tested in test/generated/php/math/test-base_convert.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '101000110111001100110100'
    var result = base_convert('A37334', 16, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})
