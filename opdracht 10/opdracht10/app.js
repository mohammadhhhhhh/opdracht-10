// Functie om de waarden uit de input velden te halen
function getNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    return { num1, num2 };
}

// Functie om op te tellen
function add() {
    let numbers = getNumbers();
    document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 + numbers.num2);
}

// Functie om af te trekken
function minus() {
    let numbers = getNumbers();
    document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 - numbers.num2);
}

// Functie om te vermenigvuldigen
function multiply() {
    let numbers = getNumbers();
    document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 * numbers.num2);
}

// Functie om te delen
function devide() {
    let numbers = getNumbers();
    if (numbers.num2 != 0) {
        document.getElementById("result").innerHTML = "Antwoord: " + (numbers.num1 / numbers.num2);
    } else {
        document.getElementById("result").innerHTML = "Niet delen door nul!";
    }
}
    