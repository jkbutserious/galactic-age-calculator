import { GalacticAge } from './../src/galactic-age-calculator.js'

describe('GalacticAge', () => {
  let reusableHuman;

  beforeEach(() => {
    reusableHuman = new GalacticAge(25, 0, 0, 0, 0, 0);
  });

  test('Should correctly create a Galactic Age object for a user that contains their age in Earth years and has props for their age in other planetary years and life expectancy', () => {
    expect(reusableHuman.earthAge).toBe(25);
    expect(reusableHuman.mercAge).toBe(0);
    expect(reusableHuman.venAge).toBe(0);
    expect(reusableHuman.marsAge).toBe(0);
    expect(reusableHuman.jupAge).toBe(0);
    expect(reusableHuman.lifeExpect).toBe(0);
  });

  test('Should correctly calculate the user age in Mercury years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.mercAge).toBe(6);
  });

  test('Should correctly calculate the user age in Venus years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.venAge).toBe(15.5);
  });
  
  test('Should correctly calculate the user age in Mars years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.marsAge).toBe(47);
  });

  test('Should correctly calculate the user age in Jupiter years based on their age in Earth years', () => {
    reusableHuman.calculateAge();
    expect(reusableHuman.jupAge).toBe(296.5);
  });
  
  test('Should correctly calculate the user life expectancy in earth years based on their sex, smoking habits, and exercise habits', () => {
    reusableHuman.calculateLifeExpect('male', 'yes', 'yes');
    expect(reusableHuman.lifeExpect).toBe(68.1)
  });

  test('Should correctly calculate the number of years a user has left on each planet based on average life expectancy in Earth years', () => {
    reusableHuman.calculateLifeExpect('male', 'yes', 'yes');
    expect(reusableHuman.yearsLeft('mercury')).toEqual(10.344);
    expect(reusableHuman.yearsLeft('venus')).toEqual(26.722);
    expect(reusableHuman.yearsLeft('mars')).toEqual(81.028);
    expect(reusableHuman.yearsLeft('jupiter')).toEqual(511.166);
  });

  test('Should correctly return the number of years a user has lived beyond their average life expectancy based on average life expectancy in earth years', () => {
    let elderlyHuman = new GalacticAge(90, 0, 0, 0, 0, 87.1);

    expect(elderlyHuman.yearsLeft('mercury')).toEqual("Congratulations! You have exceeded your life expecancy by 0.696 mercury years.")
    expect(elderlyHuman.yearsLeft('venus')).toEqual("Congratulations! You have exceeded your life expecancy by 1.798 venus years.")
    expect(elderlyHuman.yearsLeft('mars')).toEqual("Congratulations! You have exceeded your life expecancy by 5.452 mars years.")
    expect(elderlyHuman.yearsLeft('jupiter')).toEqual("Congratulations! You have exceeded your life expecancy by 34.394 jupiter years.")
  });
});