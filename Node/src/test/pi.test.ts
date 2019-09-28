import { Pi } from '../pi';
const pi = new Pi();
describe('Pi', () => {
  it('Default diameter', () => {
    expect(pi.diameter).toEqual(100000);
  });

  it('Result with default diameter', () => {
    expect(pi.calculatePi()).toEqual(3.141592627294015);
  });

  it('Result with custom diameter', () => {
    pi.diameter = 10;
    expect(pi.calculatePi()).toEqual(3.115105950558347);
  });
});
