import expect from 'expect';
import { ON_ERROR_API } from './types';

describe('Error Types', () => {
  it('should have ON_ERROR_API', () => {
    expect(ON_ERROR_API).toBe('[error] api');
  });
});
