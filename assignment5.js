// BMI = mass / (height * height)
// mass in kg, height in meter
// Store two persons mass and height in variables
// Calculate their BMI accordingly
// Compare their BMI, store the result in variable lucasHigherBMI, Log blew message to console: "The BMI of Peter is ?, The BMI of Lucas is ?, Peter's BMI is higher than Lucas's BMI that is True/False"
// Test data:
// Lucas: 78kg 1.69m tall
// Peter: 92kg 1.95m tall

const lucas = {
    name: "Lucas",
    height: 1.69,
    mass: 78,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

const peter = {
    name: "Peter",
    height: 1.95,
    mass: 92,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(lucas.calcBMI());
console.log(peter.calcBMI());

if (lucas.bmi > peter.bmi) {
    console.log(
        `The BMI of ${lucas.name} is (${lucas.bmi}). The BMI of ${peter.name} is (${peter.bmi})`
    );
} else if (peter.bmi > lucas.bmi) {
    console.log(
        `${lucas.name}'s BMI (${peter.bmi}) is higher than (${lucas.name})'s BMI (${peter.bmi})`
    );
}

// The Temperature Converter - Let's make a converter based on the steps here and display the converted result. 
// Use template literals Only to display the result
// Store a Celsius temperature into a variable. Convert it to Fahrenheit and output "NN°C is NN°F".
// Now store a Fahrenheit temperature into a variable. Convert it to Celsius and output "NN°F is
// NN°C."


"use strict";
const CovertCelsiusToFahrenheit = function(celsius) {
    const cTemp = celsius;
    const toFahr = cTemp * (9 / 5) + 32;
    const msg = `${cTemp}\xB0C is ${toFahr} \xB0F .`;
    return msg;
}

const CovertFahrenheitToCelsius = function(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * (5 / 9);
    const msg = `${fTemp}\xB0F is ${fToCel} \xB0C .`;
    return msg;
}

console.log(CovertCelsiusToFahrenheit(100));
console.log(CovertCelsiusToFahrenheit(0));
console.log(CovertCelsiusToFahrenheit(10));

console.log(CovertFahrenheitToCelsius(32));
console.log(CovertFahrenheitToCelsius(10));
console.log(CovertFahrenheitToCelsius(102));