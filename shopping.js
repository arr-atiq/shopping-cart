const plusBtn = document.getElementById("plusButton").addEventListener("click", function () {
    const currentIn = document.getElementById("currentInput").value;
    const currentInM = parseFloat(currentIn) + 1;
    document.getElementById("currentInput").value = currentInM;

    const currentText = document.getElementById("currentText").innerText;
    const currentTextM = parseFloat(currentText);
    const totalAmount = currentInM + currentTextM;
    document.getElementById("currentText").innerText = totalAmount;
    
    });

const minusBtn = document.getElementById("minusButton").addEventListener("click", function () {
    const currentIn = document.getElementById("currentInput");
    currentIn.value = parseFloat(currentIn.value) - 1;
})
