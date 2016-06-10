'use strict'

describe 'Filter: iban', ->

  # load the filter's module
  beforeEach module 'mm.iban'

  filter = undefined

  beforeEach inject ($filter) ->
    filter = $filter 'iban'

  it 'electronic IBAN should become print IBAN', ->
    expect(filter('NL91ABNA0417164300')).toEqual 'NL91 ABNA 0417 1643 00'

  it 'invalid IBAN should stay untouched', ->
    expect(filter('INVALIDIBAN')).toEqual 'INVALIDIBAN'
    expect(filter('NL90ABNA0417164300')).toEqual 'NL90ABNA0417164300'

  it 'mind custom separator', ->
    expect(filter('NL91ABNA0417164300', '-')).toEqual 'NL91-ABNA-0417-1643-00'
    expect(filter('NL91ABNA0417164300', '')).toEqual 'NL91ABNA0417164300'
