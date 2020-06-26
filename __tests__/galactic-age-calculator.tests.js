import { GalacticAge } from './../src/galactic-age-calculator.js'

describe('GalacticAge', () => {
  let reusableHuman;

  beforeEach(() => {
    reusableHuman = new GalacticAge(25, 0, 0, 0, 0, 0)
  });

  test('Should correctly create a Galactic Age object for a user that contains their age in Earth years and has props for their age in other planetary years and life expectancy', () => {
    expect(reusableHuman.earthAge).toBe(25);
    expect(reusableHuman.mercAge).toBe(0);
    expect(reusableHuman.venAge).toBe(0);
    expect(reusableHuman.marsAge).toBe(0);
    expect(reusableHuman.jupAge).toBe(0);
    expect(reusableHuman.lifeExpect).toBe(0);
  })
})