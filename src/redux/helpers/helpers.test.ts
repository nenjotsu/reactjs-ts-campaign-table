import expect from 'expect';
import * as helpers from '.';

describe('loadState', () => {
  it('should return an object or undefined', () => {
    expect(helpers.loadState()).toBeDefined;
  });
});

describe('list of url', () => {
  it('should have getSingle function', () => {
    const getSingle = helpers.url.getSingle('1111');
    expect(getSingle).toBe(`${helpers.domain}/1111`);
  });
  it('should have findByName function', () => {
    const findByName = helpers.url.findByName('mobi');
    expect(findByName).toBe(`${helpers.domain}/find/mobi`);
  });
  it('should have delete function', () => {
    const findByName = helpers.url.delete('222');
    expect(findByName).toBe(`${helpers.domain}/222`);
  });
  it('should have patch function', () => {
    const findByName = helpers.url.patch('333');
    expect(findByName).toBe(`${helpers.domain}/333`);
  });
  it('should have genericDomain function', () => {
    const findByName = helpers.url.genericDomain;
    expect(findByName).toBe(`${helpers.domain}`);
  });
});

describe('headersJson', () => {
  it('should have content type property ', () => {
    expect(helpers.headersJson).toMatchObject;
  });
});
