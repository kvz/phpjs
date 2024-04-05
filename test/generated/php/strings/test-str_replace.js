// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var str_replace = require('../../../../src/php/strings/str_replace.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/str_replace.js (tested in test/generated/php/strings/test-str_replace.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Kevin.van.Zonneveld'
    var result = str_replace(' ', '.', 'Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'hemmo, mars'
    var result = str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'AxDxAxDx'
    var result = str_replace(Array('S','F'),'x','ASDFASDF')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 4
    var countObj = {}
    str_replace(['A','D'], ['x','y'] , 'ASDFASDF' , countObj)
    var result = countObj.value
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = 'aaa'
    var result = str_replace('', '.', 'aaa')
    expect(result).to.deep.equal(expected)
    done()
  })
})
