// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example usage
const celsiusTemp = 25;
const fahrenheitTemp = 77;

console.log(`${celsiusTemp}°C is equal to ${celsiusToFahrenheit(celsiusTemp)}°F`);
console.log(`${fahrenheitTemp}°F is equal to ${fahrenheitToCelsius(fahrenheitTemp)}°C`);
