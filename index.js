/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputbtn = document.getElementById("input-btn")
const lengthField = document.getElementById("length-field")
const volumeField = document.getElementById("volume-field")
const massField = document.getElementById("mass-field")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

inputbtn.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        render(getInput)
    }
})

function getInput() {
    let input = Number(inputbtn.value)
    return input;
}

function convertMetrics(input, metric) {
    switch (metric) {
        case 'length':
            return (input)
    }
}

function render(conversion) {

}