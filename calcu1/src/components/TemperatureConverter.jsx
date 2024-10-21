import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import TemperatureDisplay from './TemperatureDisplay';
import './TemperatureConverter.css';

function TemperatureConverter() {
    const [temperature, setTemperature] = useState(0);
    const [scale, setScale] = useState('C'); // 'C' para Celsius, 'F' para Fahrenheit

    const handleTemperatureChange = (temp) => {
        setTemperature(temp);
    };

    const handleScaleChange = (newScale) => {
        setScale(newScale);
    };

    return (
        <div className="temperature-converter">
            <h1>Calculadora de Temperatura</h1>
            <TemperatureInput 
                temperature={temperature} 
                scale={scale} 
                onTemperatureChange={handleTemperatureChange} 
                onScaleChange={handleScaleChange} 
            />
            <TemperatureDisplay 
                temperature={temperature} 
                scale={scale} 
            />
        </div>
    );
}

export default TemperatureConverter;
