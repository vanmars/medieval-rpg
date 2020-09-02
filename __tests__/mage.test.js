import Mage from './../src/mage.js';

describe('mage', () => {
  test('returns attributes of mage object', () => {
    const mage = new Mage();
    expect(mage.strength).toEqual(10);
    expect(mage.healthPoints).toEqual(100);
    expect(mage.defense).toEqual(50);
    expect(mage.intelligence).toEqual(100);
  });
  test('returns a damage roll with a value less than/equal to -1 and greater than/equal to -6', () => {
    const mage = new Mage();
    expect(mage.roll()).toBeLessThanOrEqual(-1);
    expect(mage.roll()).toBeGreaterThanOrEqual(-6);
  });
  test('to show healthPoints being depleted when calling the roll()', () => {
    const mage = new Mage();
    mage.applyDamage(-4);
    expect(mage.healthPoints).toEqual(96);
  });
});