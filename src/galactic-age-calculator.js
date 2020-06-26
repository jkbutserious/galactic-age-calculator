// Business Logic
export class GalacticAge {
  constructor(earthAge, mercAge, venAge, marsAge, jupAge, lifeExpect) {
    this.earthAge = earthAge;
    this.mercAge = mercAge;
    this.venAge = venAge;
    this.marsAge = marsAge;
    this.jupAge = jupAge;
    this.lifeExpect = lifeExpect;
  }

  calculateAge() {
    this.mercAge = this.earthAge * 0.24;
    this.venAge = this.earthAge * 0.62;
    this.marsAge = this.earthAge * 1.88;
    this.jupAge = this.earthAge * 11.86;
  }

  yearsLeft(planet) {
    let planetLifeExpect;
    let surpassedLifeExpect;

    if (this.lifeExpect - this.earthAge >= 0) {
      if (planet === 'mercury') {
        planetLifeExpect = parseFloat(((this.lifeExpect - this.earthAge) * 0.24).toFixed(3))
      }
      else if (planet === 'venus') {
        planetLifeExpect = parseFloat(((this.lifeExpect - this.earthAge) * 0.62).toFixed(3))
      }
      else if (planet === 'mars') {
        planetLifeExpect = parseFloat(((this.lifeExpect - this.earthAge) * 1.88).toFixed(3))
      }
      else if (planet === 'jupiter') {
        planetLifeExpect = parseFloat(((this.lifeExpect - this.earthAge) * 11.86).toFixed(3))
      };
    }
    else {
      if (planet === 'mercury') {
        planetLifeExpect = "Congratulations! You have exceeded your life expecancy by " + parseFloat(((this.lifeExpect - this.earthAge) * 0.24 * -1).toFixed(3)) + " " + planet + " years."
      }
      else if (planet === 'venus') {
        planetLifeExpect = "Congratulations! You have exceeded your life expecancy by " + parseFloat(((this.lifeExpect - this.earthAge) * 0.62 * -1).toFixed(3)) + " " + planet + " years."
      }
      else if (planet === 'mars') {
        planetLifeExpect = "Congratulations! You have exceeded your life expecancy by " + parseFloat(((this.lifeExpect - this.earthAge) * 1.88 * -1).toFixed(3)) + " " + planet + " years."
      }
      else if (planet === 'jupiter') {
        planetLifeExpect = "Congratulations! You have exceeded your life expecancy by " + parseFloat(((this.lifeExpect - this.earthAge) * 11.86 * -1).toFixed(3)) + " " + planet + " years."
      };
    }
    return planetLifeExpect;
  }
}