// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strnatcmp = require('../../../../src/php/strings/strnatcmp.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/strnatcmp.js (tested in test/languages/php/strings/test-strnatcmp.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 0
    var result = strnatcmp('abc', 'abc')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = -1
    var result = strnatcmp('a', 'b')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 1
    var result = strnatcmp('10', '1')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 0
    var result = strnatcmp('0000abc', '0abc')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = -1
    var result = strnatcmp('1239', '12345')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = 1
    var result = strnatcmp('t01239', 't012345')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    var expected = -1
    var result = strnatcmp('0A', '5N')
    expect(result).to.deep.equal(expected)
    done()
  })
})
