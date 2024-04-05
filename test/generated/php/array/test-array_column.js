// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_column = require('../../../../src/php/array/array_column.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_column.js (tested in test/generated/php/array/test-array_column.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {0: "Alex", 1: "Elvis", 2: "Michael"}
    var result = array_column([{name: 'Alex', value: 1}, {name: 'Elvis', value: 2}, {name: 'Michael', value: 3}], 'name')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = {0: "Alex", 1: "Elvis", 2: "Michael"}
    var result = array_column({0: {name: 'Alex', value: 1}, 1: {name: 'Elvis', value: 2}, 2: {name: 'Michael', value: 3}}, 'name')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = {1: "Alex", 2: "Elvis", 3: "Michael"}
    var result = array_column([{name: 'Alex', value: 1}, {name: 'Elvis', value: 2}, {name: 'Michael', value: 3}], 'name', 'value')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = {1: {name: 'Alex', value: 1}, 2: {name: 'Elvis', value: 2}, 3: {name: 'Michael', value: 3}}
    var result = array_column([{name: 'Alex', value: 1}, {name: 'Elvis', value: 2}, {name: 'Michael', value: 3}], null, 'value')
    expect(result).to.deep.equal(expected)
    done()
  })
})