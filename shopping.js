// document.getElementById("plusButton").addEventListener("click", function () {
//     const currentIn = document.getElementById("currentInput");
//     const currentInP = parseFloat(currentIn.value) + 1;
//     currentIn.value = currentInP;
//     const plusTotalCurrent = currentInP * 1219;
//     document.getElementById("currentText").innerText = plusTotalCurrent;

//     });

// document.getElementById("minusButton").addEventListener("click", function () {
//     const currentIn = document.getElementById("currentInput");
//     currentInM = parseFloat(currentIn.value) - 1;
//     currentIn.value = currentInM;
//     const minusCurrentTotal = currentInM * 1219;
//     document.getElementById("currentText").innerText = minusCurrentTotal;

// });

    document.getElementById("plusButton").addEventListener("click", function () {
        handleBtnWithPrice(true);
    });
    document.getElementById("minusButton").addEventListener("click", function () {
        handleBtnWithPrice(false);
    });

    function handleBtnWithPrice(isIncrease){
        const currentIn = document.getElementById("currentInput");
        const currentInP = parseFloat(currentIn.value);
        let newCurrentInP = currentInP;

        if(isIncrease == false && newCurrentInP > 0){
            newCurrentInP = currentInP -1;
        }
        if(isIncrease == true){
            newCurrentInP = currentInP +1;
        }
        currentIn.value = newCurrentInP;
        const plusTotalCurrent = newCurrentInP * 1219;
        document.getElementById("currentText").innerText = plusTotalCurrent;
    }
