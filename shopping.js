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

    // document.getElementById("plusButton").addEventListener("click", function () {
    //     handleBtnWithPrice(true);
    // });
    // document.getElementById("minusButton").addEventListener("click", function () {
    //     handleBtnWithPrice(false);
    // });

    // function handleBtnWithPrice(isIncrease){
    //     const currentIn = document.getElementById("currentInput");
    //     const currentInP = parseFloat(currentIn.value);
    //     let newCurrentInP = currentInP;

    //     if(isIncrease == false && newCurrentInP > 0){
    //         newCurrentInP = currentInP -1;
    //     }
    //     if(isIncrease == true){
    //         newCurrentInP = currentInP +1;
    //     }
    //     currentIn.value = newCurrentInP;
    //     const plusTotalCurrent = newCurrentInP * 1219;
    //     document.getElementById("currentText").innerText = plusTotalCurrent;
    // }

    // document.getElementById("minus-count").addEventListener("click", function(){
    //     eventHandlerForCount(false);
    // })
    // document.getElementById("plus-count").addEventListener("click", function(){
    //     eventHandlerForCount(true);
    // })
    // function eventHandlerForCount(isIncreases){
    //     const inputCount = document.getElementById("input-count");
    //     const newInputCount = parseFloat(inputCount.value);
    //     let newCount = newInputCount;
    //     if(isIncreases == false &&  newInputCount>0){
    //         newCount = newInputCount - 1;
    //     }
    //     if(isIncreases == true){
    //         newCount = newInputCount +1;
    //     }
    //     inputCount.value = newCount;
    //     const totalCount = newCount * 59;
    //     document.getElementById("current-value").innerText = totalCount;
    // }

    function eventHandlerForCount(product, isIncreases) {
        const ProductInputCount = document.getElementById(product + "-count");
        const newInputCount = parseFloat(ProductInputCount.value);
        let ProductNewCount = newInputCount;
        if (isIncreases == false && newInputCount > 0) {
            ProductNewCount = newInputCount - 1;
        }
        if (isIncreases == true) {
            ProductNewCount = newInputCount + 1;
        }
        ProductInputCount.value = ProductNewCount;
        let priceTotal = 0;
        if (product == 'phone') {
            priceTotal = ProductNewCount * 1219;
        }
        if (product == 'case') {
            priceTotal = ProductNewCount * 59;
        }
        document.getElementById(product + "-text").innerText = priceTotal;
        subTotalPrice();
    }

    function subTotalPrice() {

        const phoneCount = getInputValue('phone');
        const caseCount = getInputValue('case');
        const totalNewCount = phoneCount * 1219 + caseCount * 59;
        document.getElementById("total-price").innerText = '$' + totalNewCount;
        const tax = Math.round(totalNewCount * 0.1);
        document.getElementById('tax-total').innerText = "$" + tax;
        const grand = tax + totalNewCount;
        document.getElementById('grand-total').innerText = "$" + grand;
    }
    function getInputValue(product) {
        const inputProductCount = document.getElementById(product + "-count");
        newProductCount = parseFloat(inputProductCount.value);
        return newProductCount;
    }

            // function subTotalPrice(){
            //     const phoneCount = document.getElementById("phone-count");
            //     newPhoneCount = parseFloat(phoneCount.value);
            //     const caseCount = document.getElementById("case-count");
            //     newCaseCount = parseFloat(caseCount.value);
            //     totalNewCount = newPhoneCount * 1219 + newCaseCount * 59;
            //     document.getElementById("total-price").innerText = '$' + totalNewCount;
            // }