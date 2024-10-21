import React from 'react';
import './TemperatureDisplay.css';

const TemperatureDisplay = ({ temperature, scale }) => {
    const toCelsius = (temp) => scale === 'F' ? (temp - 32) * 5 / 9 : temp;
    const toFahrenheit = (temp) => scale === 'C' ? (temp * 9 / 5) + 32 : temp;

    const celsius = toCelsius(temperature);
    const fahrenheit = toFahrenheit(temperature);

    return (
        <div className="temperature-display">
            <p>{temperature}°{scale} = {celsius.toFixed(2)}°C</p>
            <p>{temperature}°{scale} = {fahrenheit.toFixed(2)}°F</p>
        </div>
    );
};

export default TemperatureDisplay;
