// warning: This file is auto generated by `yarn build:tests`
// Do not edit by hand!

'use strict'

process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var var_dump = require('../../../../src/php/var/var_dump.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/var_dump.js (tested in test/generated/php/var/test-var_dump.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'int(1)'
    var result = var_dump(1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 'array(1) {\n    [self] =>\n    Circular Reference Detected\n}\n'
    const simpleCircular = {}
    simpleCircular.self = simpleCircular
    var result = var_dump(simpleCircular)
    expect(result).to.deep.equal(expected)
    done()
  })
})
