// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var sqrt = require('../../../../src/php/math/sqrt.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/sqrt.js (tested in test/languages/php/math/test-sqrt.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 2953.5269424875746
    var result = sqrt(8723321.4)
    expect(result).to.deep.equal(expected)
    done()
  })
})
