// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var count = require('../../../../src/php/array/count.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/count.js (tested in test/generated/php/array/test-count.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 6
    var result = count([[0,0],[0,-4]], 'COUNT_RECURSIVE')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 6
    var result = count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE')
    expect(result).to.deep.equal(expected)
    done()
  })
})