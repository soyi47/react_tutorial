import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrernheit) {
    return (fahrernheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');
    const [celsius, setCelsius] = useState(temperature);
    const [fahrenheit, setfahrenheit] = useState(tryConvert(temperature, toFahrenheit));

    /*
    function handleCelsiusChange(temperature) {
        setScale('c');
        setTemperature(temperature);
        setCelsius(temperature);
        setfahrenheit(tryConvert(temperature, toFahrenheit));
    }

    function handleFahrenheitChange(temperature) {
        setScale('f');
        setTemperature(temperature);
        setCelsius(tryConvert(temperature, toCelsius));
        setfahrenheit(temperature);
    }
    */

    function handleChange(scale, temperature) {
        setScale(scale);
        setTemperature(temperature);
        setCelsius(scale === 'f' ? 
            tryConvert(temperature, toCelsius) : 
            temperature);
        setfahrenheit(scale === 'c' ? 
            tryConvert(temperature, toFahrenheit) : 
            temperature);
    }

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;