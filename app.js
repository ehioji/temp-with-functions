let tempUnit;

function askName () {
    let userName = prompt("Hello, and welcome to the temperature converter! If you don't mind me asking, what is your name? ");
    return userName;
}

function getTempUnit (name) {
    tempUnit = prompt(`Thanks ${name}! So, what temperature unit would you like to use? (Enter 'f' for fahrenheit to celsius or 'c' for celsius to fahrenheit)`);
    return tempUnit;
}

function getTemperature () {
    let temperature = Number(prompt(`Great. Your selected temperature unit is ${tempUnit}; Now, what temperature would you like convert? (in degrees ${tempUnit})`));
    return temperature;
}

function fahToCelsius (temp) {
    return ((((temp - 32) * 5)) / 9);
}

function celsToFah (temp) {
    return ((((temp * 9) / 5) + 32));
}

function calcTemp (tempUnit, temperature) {
    if (tempUnit == 'f') {
        alert(`Fantastic. Your temperature (${temperature} degrees fahrenheit) is ${fahToCelsius(temperature)} degrees celsius!`);
    } else if (tempUnit == 'c') {
        alert(`Fantastic. Your temperature (${temperature} degrees celsius) is ${fahToCelsius(temperature)} degrees fahrenheit!`);
    }
}

calcTemp(getTempUnit(askName()), getTemperature());