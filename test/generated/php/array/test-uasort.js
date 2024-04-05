// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var uasort = require('../../../../src/php/array/uasort.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/uasort.js (tested in test/generated/php/array/test-uasort.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
    var $sorter = function (a, b) { if (a > b) {return 1;}if (a < b) {return -1;} return 0;}
    var $fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    uasort($fruits, $sorter)
    var result = $fruits
    expect(result).to.deep.equal(expected)
    done()
  })
})
