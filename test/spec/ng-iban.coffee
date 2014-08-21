'use strict'

describe 'Directive: iban', ->

  # load the directive's module
  beforeEach module 'mm.iban'

  scope = undefined
  compile = undefined
  form = undefined

  beforeEach inject ($rootScope, _$compile_) ->
    scope = $rootScope.$new()
    compile = _$compile_

    compile('<form name="form"><input name="iban" ng-model="iban" ng-iban required/><input name="optional" ng-model="optional" ng-iban/></form>')(scope)
    form = scope.form

  it 'optional should pass with empty IBAN', ->
    form.optional.$setViewValue undefined
    scope.$digest()
    expect(scope.optional).toEqual undefined
    expect(form.optional.$valid).toBe true

  it 'optional should pass with valid IBAN', ->
    form.optional.$setViewValue 'NL86 INGB 0002 4455 88'
    scope.$digest()
    expect(scope.optional).toEqual 'NL86 INGB 0002 4455 88'
    expect(form.optional.$valid).toBe true

  it 'optional should fail with invalid IBAN', ->
    form.optional.$setViewValue 'NL87 INGB 0002 4455 88'
    scope.$digest()
    expect(scope.optional).toEqual undefined
    expect(form.optional.$valid).toBe false

  it 'required should fail with empty IBAN', ->
    form.iban.$setViewValue undefined
    scope.$digest()
    expect(scope.iban).toEqual undefined
    expect(form.iban.$valid).toBe false

  it 'required should pass with valid IBAN', ->
    form.iban.$setViewValue 'NL86 INGB 0002 4455 88'
    scope.$digest()
    expect(scope.iban).toEqual 'NL86 INGB 0002 4455 88'
    expect(form.iban.$valid).toBe true

  it 'required should fail with invalid IBAN', ->
    form.iban.$setViewValue 'NL87 INGB 0002 4455 88'
    scope.$digest()
    expect(scope.iban).toEqual undefined
    expect(form.iban.$valid).toBe false
