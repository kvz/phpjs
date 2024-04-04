// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var sinh = require('../../../../src/php/math/sinh.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/sinh.js (tested in test/languages/php/math/test-sinh.js)', function () {
  it('should pass example 1', function (done) {
    var expected = -1.1497971402636502
    var result = sinh(-0.9834330348825909)
    expect(result).to.deep.equal(expected)
    done()
  })
})
