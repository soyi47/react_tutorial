import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function TemperatureInput(props) {
    const temperature = props.temperature;
    const scale = props.scale;

    function handleChange(e) {
        props.onTemperatureChange(scale, e.target.value);
    }

    return (
        <fieldset>
            <legend>
                Enter temperature in {scaleNames[scale]} : 
            </legend>
            <input value={temperature} 
                onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;

