// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strlen = require('../../../../src/php/strings/strlen.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/strlen.js (tested in test/languages/php/strings/test-strlen.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 19
    var result = strlen('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 3
    ini_set('unicode.semantics', 'on')
    var result = strlen('A\ud87e\udc04Z')
    expect(result).to.deep.equal(expected)
    done()
  })
})
