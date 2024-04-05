// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var uksort = require('../../../../src/php/array/uksort.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/uksort.js (tested in test/generated/php/array/test-uksort.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}
    var $data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    uksort($data, function (key1, key2){ return (key1 === key2 ? 0 : (key1 > key2 ? 1 : -1)); })
    var result = $data
    expect(result).to.deep.equal(expected)
    done()
  })
})
