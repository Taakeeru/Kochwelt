function calculateIngredients() {

    let inputNumber = +document.getElementById("input").value;

    document.getElementById("calculate1").innerHTML = `${0.5 * inputNumber} Kopf`
    document.getElementById("calculate2").innerHTML = `${0.5 * inputNumber} Tasse`
    document.getElementById("calculate3").innerHTML = `${0.5 * inputNumber} TL`
    document.getElementById("calculate4").innerHTML = `${0.5 * inputNumber} TL`
    document.getElementById("calculate5").innerHTML = `${0.5 * inputNumber} TL`
    document.getElementById("calculate6").innerHTML = `${0.5 * inputNumber} TL`
    document.getElementById("calculate7").innerHTML = `${0.5 * inputNumber} TL`
    document.getElementById("calculate8").innerHTML = `${125 * inputNumber} ml`
    document.getElementById("calculate9").innerHTML = `${0.5 * inputNumber} EL`
    document.getElementById("calculate10").innerHTML = `${1 * inputNumber} EL`
    document.getElementById("calculate11").innerHTML = `${1 * inputNumber} EL`
    document.getElementById("calculate12").innerHTML = `${1.5 * inputNumber} EL`
};