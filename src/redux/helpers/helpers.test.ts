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
  it.skip('should have findByName function', () => {
    const findByName = helpers.url.findByName('mobi');
    expect(findByName).toBe(`${helpers.domain}find/mobi`);
  });
  it.skip('should have findByName function', () => {
    const findByName = helpers.url.findByName('mobi');
    expect(findByName).toBe(`${helpers.domain}find/mobi`);
  });
  // export const url = {
  //   getSingle: (id: string) => `${domain}/${id}`,
  //   findByName: (name: string) => `${domain}/find/${name}`,
  //   delete: (id: string) => `${domain}/${id}`,
  //   patch: (id: string) => `${domain}/${id}`,
  //   genericDomain: domain,
  // };
});
