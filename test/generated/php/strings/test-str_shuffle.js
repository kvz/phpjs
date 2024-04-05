// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var str_shuffle = require('../../../../src/php/strings/str_shuffle.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/str_shuffle.js (tested in test/generated/php/strings/test-str_shuffle.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 6
    var $shuffled = str_shuffle("abcdef")
    var result = $shuffled.length
    expect(result).to.deep.equal(expected)
    done()
  })
})