import * as actions from '../user';

describe('User Actions', () => {
  test('should exist', () => {
    expect(actions.addPassword).toBeTruthy();
  });

  test('should add email by character', () => {
    const char = 'n';
    const expectedAction = {
      type: actions.ADD_EMAIL,
      data: char
    }
    expect(actions.addEmail('n')).toEqual(expectedAction);
  });

  test('should add password by character', () => {
    const char = 'p';
    const expectedAction = {
      type: actions.ADD_PASSWORD,
      data: char
    };
    expect(actions.addPassword('p')).toEqual(expectedAction);
  });

  test('should submit LOGIN_SUCCESS action', () => {
    const expectedAction = {
      type: actions.LOGIN_SUCCESS
    }

    expect(actions.submitLoginSuccess()).toEqual(expectedAction);
  });

  test('should submit LOGIN_FAIL action', () => {
    const expectedAction = {
      type: actions.LOGIN_FAIL
    }
    expect(actions.submitLoginFail()).toEqual(expectedAction);
  });

});