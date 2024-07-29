class Temperature {
    constructor() {
      this._celsius = 0; 
      this._fahrenheit = 32; 
    }
    _celsiusToFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }
    _fahrenheitToCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5/9;
    }
    get celsius() {
      return this._celsius;
    }
    set celsius(value) {
      if (isNaN(value)) {
        throw new Error('Celsius temperature must be a number.');
      }
      this._celsius = parseFloat(value);
      this._fahrenheit = this._celsiusToFahrenheit(this._celsius);
    }
    get fahrenheit() {
      return this._fahrenheit;
    }
    set fahrenheit(value) {
      if (isNaN(value)) {
        throw new Error('Fahrenheit temperature must be a number.');
      }
      this._fahrenheit = parseFloat(value);
      this._celsius = this._fahrenheitToCelsius(this._fahrenheit);
    }
  }
  try {
    const temp = new Temperature();
  
    console.log(`Initial temperature: ${temp.celsius}°C, ${temp.fahrenheit}°F`);
  
    temp.celsius = 25;
    console.log(`After setting Celsius to 25°C: ${temp.celsius}°C, ${temp.fahrenheit}°F`);
  
    temp.fahrenheit = 77;
    console.log(`After setting Fahrenheit to 77°F: ${temp.celsius}°C, ${temp.fahrenheit}°F`);
  } catch (e) {
    console.error(e.message);
  }
  