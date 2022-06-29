'use strict';


const validateBrackets = require('../index');

describe('Validate Brackets', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  test('test {} =true', () => {
    let str = '{}';
    let result = validateBrackets(str);
    expect(result).toEqual(true);
  });
  test('test {}(){}=true', () => {
    let str = '{}(){}';
    let result = validateBrackets(str);
    expect(result).toEqual(true);
  });
  test('test ()[[Extra Characters]]=true', () => {
    let str = '()[[Extra Characters]]';
    let result = validateBrackets(str);
    expect(result).toEqual(true);
  });
  test('test (){}[[]]=true', () => {
    let str = '(){}[[]]';
    let result = validateBrackets(str);
    expect(result).toEqual(true);
  });
  test('test {}{Code}[Fellows](())=true', () => {
    let str = '{}{Code}[Fellows](())';
    let result = validateBrackets(str);
    expect(result).toEqual(true);
  });
  test('test [({)]=false', () => {
    let str = '[({)]';
    let result = validateBrackets(str);
    expect(result).toEqual(false);
  });
  test('test (](=false', () => {
    let str = '(](';
    let result = validateBrackets(str);
    expect(result).toEqual(false);
  });
  test('test {(})=false', () => {
    let str = '{(})';
    let result = validateBrackets(str);
    expect(result).toEqual(false);
  });
});
