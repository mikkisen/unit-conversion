/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const modeBtn = document.getElementById("mode-btn")
const inputbtn = document.getElementById("input-btn")
const convertBtn = document.getElementById("convert-btn")
const lengthField = document.getElementById("length-field")
const volumeField = document.getElementById("volume-field")
const massField = document.getElementById("mass-field")

let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

inputbtn.addEventListener("keypress", function (e) {
    if (inputbtn.value) {
        if (e.key === 'Enter') {
            render()
        }
    }
})

convertBtn.addEventListener("click", function () {
    if (inputbtn.value) {
        render()
    }
})

function getInput() {
    let input = Number(inputbtn.value)
    return input
}

function convertMetrics(input, metric) {
    switch (metric) {
        case 'length':
            return `${input} meters = ${(input * meterToFeet).toFixed(3)} feet | ${input} feet = ${(input / meterToFeet).toFixed(3)} meters`
        case 'volume':
            return `${input} liters = ${(input * literToGallon).toFixed(3)} gallons | ${input} gallons = ${(input / literToGallon).toFixed(3)} liters`
        case 'mass':
            return `${input} kilos = ${(input * kilogramToPound).toFixed(3)} pounds | ${input} pounds = ${(input / kilogramToPound).toFixed(3)} kilos`
            defult:
            throw new Error("Invalid target metric")
    }
}

function render() {
    lengthResult.textContent = convertMetrics(getInput(), "length")
    volumeResult.textContent = convertMetrics(getInput(), "volume")
    massResult.textContent = convertMetrics(getInput(), "mass")
}