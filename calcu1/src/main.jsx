import React from 'react';
import ReactDOM from 'react-dom/client';
import TemperatureConverter from './components/TemperatureConverter'; // Asegúrate de que la ruta sea correcta
import './index.css'; // Archivo CSS global (si lo tienes)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TemperatureConverter />
    </React.StrictMode>
);

