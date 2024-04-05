function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const originalUnit = document.getElementById("unitSelect").value;
  let convertedTemperatures = "";

  if (originalUnit === "Celsius") {
    const fahrenheit = (temperatureInput * 9) / 5 + 32;
    const kelvin = temperatureInput + 273.15;
    convertedTemperatures = `${temperatureInput}°C = ${fahrenheit.toFixed(
      2
    )}°F, ${kelvin.toFixed(2)}K`;
  } else if (originalUnit === "Fahrenheit") {
    const celsius = ((temperatureInput - 32) * 5) / 9;
    const kelvin = ((temperatureInput - 32) * 5) / 9 + 273.15;
    convertedTemperatures = `${temperatureInput}°F = ${celsius.toFixed(
      2
    )}°C, ${kelvin.toFixed(2)}K`;
  } else if (originalUnit === "Kelvin") {
    const celsius = temperatureInput - 273.15;
    const fahrenheit = ((temperatureInput - 273.15) * 9) / 5 + 32;
    convertedTemperatures = `${temperatureInput}K = ${celsius.toFixed(
      2
    )}°C, ${fahrenheit.toFixed(2)}°F`;
  }

  document.getElementById("results").textContent = convertedTemperatures;
}
