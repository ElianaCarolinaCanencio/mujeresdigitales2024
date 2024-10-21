import React from 'react';
import './TemperatureInput.css';

const TemperatureInput = ({ temperature, scale, onTemperatureChange, onScaleChange }) => {
    const handleTemperatureChange = (e) => {
        onTemperatureChange(Number(e.target.value));
    };

    const handleScaleChange = (e) => {
        onScaleChange(e.target.value);
    };

    return (
        <div className="temperature-input">
            <label>
                Temperatura:
                <input
                    type="number"
                    value={temperature}
                    onChange={handleTemperatureChange}
                    className="input-field"
                />
            </label>
            <label>
                Escala:
                <select
                    value={scale}
                    onChange={handleScaleChange}
                    className="input-field"
                >
                    <option value="C">Celsius</option>
                    <option value="F">Fahrenheit</option>
                </select>
            </label>
        </div>
    );
};

export default TemperatureInput;
