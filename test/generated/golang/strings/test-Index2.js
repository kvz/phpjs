// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var Index = require('../../../../src/golang/strings/Index2.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/golang/strings/Index2.js (tested in test/generated/golang/strings/test-Index2.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 0
    var result = Index('Kevin', 'K')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = -1
    var result = Index('Kevin', 'Z')
    expect(result).to.deep.equal(expected)
    done()
  })
})