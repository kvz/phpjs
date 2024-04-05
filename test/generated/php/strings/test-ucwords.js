// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ucwords = require('../../../../src/php/strings/ucwords.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/ucwords.js (tested in test/generated/php/strings/test-ucwords.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Kevin Van  Zonneveld'
    var result = ucwords('kevin van  zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'HELLO WORLD'
    var result = ucwords('HELLO WORLD')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 'У Мэри Был Маленький Ягненок И Она Его Очень Любила'
    var result = ucwords('у мэри был маленький ягненок и она его очень любила')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 'Τάχιστη Αλώπηξ Βαφής Ψημένη Γη, Δρασκελίζει Υπέρ Νωθρού Κυνός'
    var result = ucwords('τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός')
    expect(result).to.deep.equal(expected)
    done()
  })
})
