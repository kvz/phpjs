// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var bcdiv = require('../../../../src/php/bc/bcdiv.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/bc/bcdiv.js (tested in test/languages/php/bc/test-bcdiv.js)', function () {
  it('should pass example 1', function (done) {
    var expected = '0'
    var result = bcdiv('1', '2')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = '0.50'
    var result = bcdiv('1', '2', 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = '-0.2000'
    var result = bcdiv('-1', '5', 4)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = '4526580661.75'
    var result = bcdiv('8728932001983192837219398127471', '1928372132132819737213', 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})
