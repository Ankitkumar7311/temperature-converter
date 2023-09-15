document.addEventListener("DOMContentLoaded", function () {
    const inputTemperature = document.getElementById("inputTemperature");
    const fromUnit = document.getElementById("fromUnit");
    const convertButton = document.getElementById("convertButton");
    const resultText = document.getElementById("resultText");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(inputTemperature.value);
        const unit = fromUnit.value;

        if (isNaN(temperature)) {
            resultText.textContent = "Please enter a valid temperature.";
            return;
        }

        if (unit === "kelvin") {
            // Kelvin to Fahrenheit formula
            const fahrenheit = (temperature - 273.15) * 9/5 + 32;
            resultText.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
        } else if (unit === "fahrenheit") {
            // Fahrenheit to Kelvin formula
            const kelvin = (temperature - 32) * 5/9 + 273.15;
            resultText.textContent = `Temperature in Kelvin: ${kelvin.toFixed(2)} K`;
        }
    });
});
