// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var _php_cast_float = require('../../../../src/php/_helpers/_php_cast_float.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/_helpers/_php_cast_float.js (tested in test/generated/php/_helpers/test-_php_cast_float.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 0
    var result = _php_cast_float(false)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 1
    var result = _php_cast_float(true)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 0
    var result = _php_cast_float(0)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 1
    var result = _php_cast_float(1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = 3.14
    var result = _php_cast_float(3.14)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = 0
    var result = _php_cast_float('')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    var expected = 0
    var result = _php_cast_float('0')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    var expected = 0
    var result = _php_cast_float('abc')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 9', function (done) {
    var expected = 0
    var result = _php_cast_float(null)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 10', function (done) {
    var expected = 0
    var result = _php_cast_float(undefined)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 11', function (done) {
    var expected = 123
    var result = _php_cast_float('123abc')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 12', function (done) {
    var expected = 1230000
    var result = _php_cast_float('123e4')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 13', function (done) {
    var expected = 8589934593
    var result = _php_cast_float(0x200000001)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 14', function (done) {
    var expected = 3.14
    var result = _php_cast_float('3.14abc')
    expect(result).to.deep.equal(expected)
    done()
  })
})
