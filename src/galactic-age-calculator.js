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
    const earthLifeExpect = 87.1;
    let planetLifeExpect;

    if (planet === 'mercury') {
      planetLifeExpect = 0
    }
    else if (planet = 'venus') {
      planetLifeExpect = 0
    }
    else if (planet = 'mars') {
      planetLifeExpect = 0
    }
    else if (planet = 'jupiter') {
      planetLifeExpect = 0
    };
    return planetLifeExpect;
  }
}