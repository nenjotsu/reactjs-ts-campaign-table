import expect from 'expect';
import * as TYPE from './types';
import * as ACTION from './actions';

describe('Error Types', () => {
  it('has type ON_ERROR_API', () => {
    expect(TYPE.ON_ERROR_API).toEqual('[error] api');
  });
  it('has action ON_ERROR_API', () => {
    expect(ACTION.onErrorApi()).toBeDefined;
  });
});
