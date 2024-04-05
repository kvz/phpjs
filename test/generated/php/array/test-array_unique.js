// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_unique = require('../../../../src/php/array/array_unique.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_unique.js (tested in test/generated/php/array/test-array_unique.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {0: 'Kevin', 2: 'van', 3: 'Zonneveld'}
    var result = array_unique(['Kevin','Kevin','van','Zonneveld','Kevin'])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = {a: 'green', 0: 'red', 1: 'blue'}
    var result = array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'})
    expect(result).to.deep.equal(expected)
    done()
  })
})