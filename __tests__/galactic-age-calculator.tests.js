import { GalacticAge, calculateAge, yearsLeft } from './../src/galactic-age-calculator.js'

describe('GalacticAge', () => {
  let reusableHuman;

  beforeEach(() => {
    reusableHuman = new GalacticAge(25, 0, 0, 0, 0, 87.1);
  });

  test('Should correctly create a Galactic Age object for a user that contains their age in Earth years and has props for their age in other planetary years and life expectancy', () => {
    expect(reusableHuman.earthAge).toBe(25);
    expect(reusableHuman.mercAge).toBe(0);
    expect(reusableHuman.venAge).toBe(0);
    expect(reusableHuman.marsAge).toBe(0);
    expect(reusableHuman.jupAge).toBe(0);
    expect(reusableHuman.lifeExpect).toBe(87.1);
  });

  test('Should correctly calculate the user age in Mercury years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.mercAge).toBe(6);
  })

  test('Should correctly calculate the user age in Venus years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.venAge).toBe(15.5);
  })
  
  test('Should correctly calculate the user age in Mars years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.marsAge).toBe(47);
  })

  test('Should correctly calculate the user age in Jupiter years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.jupAge).toBe(296.5);
  })

  test('Should correctly calculate the number of years a user has left on each planet based on average life expectancy in Earth years', () => {
    expect(reusableHuman.yearsLeft('mercury')).toEqual(14.904);
    expect(reusableHuman.yearsLeft('venus')).toEqual(38.502);
    expect(reusableHuman.yearsLeft('mars')).toEqual(116.748);
    expect(reusableHuman.yearsLeft('jupiter')).toEqual(736.506);
  });

  test('Should correctly return the number of years a user has lived beyond their average life expectancy based on average life expectancy in earth years', () => {
    let elderlyHuman = new GalacticAge(90, 0, 0, 0, 0, 87.1);

    expect(elderlyHuman.yearsLeft('mercury')).toEqual("Congratulations! You have exceeded your life expecancy by 0.696 mercury years.")
    expect(elderlyHuman.yearsLeft('venus')).toEqual("Congratulations! You have exceeded your life expecancy by 1.798 venus years.")
    expect(elderlyHuman.yearsLeft('mars')).toEqual("Congratulations! You have exceeded your life expecancy by 5.452 mars years.")
    expect(elderlyHuman.yearsLeft('jupiter')).toEqual("Congratulations! You have exceeded your life expecancy by 34.394 jupiter years.")
  })
})