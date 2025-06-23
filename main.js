    let displayStr = "";

    let firstNumber = "";
    let secondNumber = "";
    let operator = "";
    let equaled = false;
    let display = document.querySelector("#display");

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2)
    {
        return num1 / num2;
    }

    function operate( operator, num1, num2)
    {
        let result;
        switch (operator) {
            
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
        }

        return result;
    }


    function clearEverything() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        equaled = false;

    }
    function buttonClicked(event) {


        if (!firstNumber)
        {

            if (event.target.className === "numbers")
            {
                firstNumber += event.target.textContent;
                display.textContent = firstNumber;

            }

        } else if (!operator)
        {
            if (event.target.className === "numbers")
            {
                firstNumber += event.target.textContent;
                display.textContent = firstNumber;
            } else if (event.target.className === "operator") {
                operator = event.target.textContent;
                display.textContent = firstNumber;
        
            }

        } else if (!secondNumber) {

            if (event.target.className === "numbers")
            {
                secondNumber += event.target.textContent;
                display.textContent = secondNumber;
            } 
        } else if (!equaled)
        {
            if (event.target.className === "numbers")
            {
                secondNumber += event.target.textContent;
                display.textContent = secondNumber;
            } else if (event.target.id === "equal" ) 
            {
                result =  operate(operator, Number(firstNumber), Number(secondNumber) );
                display.textContent = result;
                firstNumber = result;
                secondNumber = "";
            } else if (event.target.className === "operator" && event.target.id !== "equal")
            {
                result =  operate(operator, Number(firstNumber), Number(secondNumber) );
                display.textContent = result;
                firstNumber = result;
                secondNumber = "";
            }

        }

        if(event.target.id === "ac" )
        {
            display.textContent = "0";
            clearEverything();

        }
            



    }

    

    const buttonContainers = document.querySelectorAll(".button-containers");

    for( let buttonContainer of buttonContainers)
    {
        buttonContainer.addEventListener("click", buttonClicked);
    }
