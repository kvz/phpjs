// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ascii_uppercase = require('../../../../src/python/string/ascii_uppercase.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/python/string/ascii_uppercase.js (tested in test/generated/python/string/test-ascii_uppercase.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ascii_uppercase()
    expect(result).to.deep.equal(expected)
    done()
  })
})
