// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_string = require('../../../../src/php/var/is_string.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_string.js (tested in test/languages/php/var/test-is_string.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = is_string('23')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = false
    var result = is_string(23.5)
    expect(result).to.deep.equal(expected)
    done()
  })
})
