// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var inet_ntop = require('../../../../src/php/network/inet_ntop.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/network/inet_ntop.js (tested in test/generated/php/network/test-inet_ntop.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '127.0.0.1'
    var result = inet_ntop('\x7F\x00\x00\x01')
    expect(result).to.deep.equal(expected)
    done()
  })
})
