    let displayStr = "";

    let firstNumber = "0";
    let secondNumber = "";
    let operator = "";
    let equaled = false;
    let result = 0;
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
        firstNumber = "0";
        secondNumber = "";
        operator = "";
        equaled = false;
        result = 0;

    }
    function buttonClicked(event) 
    {

        const eventTarget = event.target;

        if(eventTarget.className === "numbers") 
        {
            if(!secondNumber && firstNumber === "0" && eventTarget.textContent !== "." )
            {
                firstNumber = eventTarget.textContent;
                display.textContent = firstNumber;
                
            } else if (!operator)
            {
                firstNumber += eventTarget.textContent;
                display.textContent = firstNumber;
            }
            
            if( firstNumber && operator && !secondNumber) {
                secondNumber = eventTarget.textContent;
                display.textContent = secondNumber;
            } else if (firstNumber && operator && secondNumber)
            {
                firstNumber += eventTarget.textContent;
                display.textContent = firstNumber;
            }


        }

        if(eventTarget.className === "operator")
        {
            if(!secondNumber && !operator)
            {
                operator = eventTarget.textContent;
            }

            if(operator && secondNumber && firstNumber)
            {
                operator = eventTarget.textContent;
                result =  operate(operator, Number(firstNumber), Number(secondNumber) );
                display.textContent =  result;
                firstNumber =  result;
                operator = "";
                secondNumber = "";

            }

        }
        if(eventTarget.id === "equal")
        {
            if(secondNumber && operator)
            {
                result =  operate(operator, Number(firstNumber), Number(secondNumber) );
                display.textContent =  result;
                firstNumber =  result;
                operator = "";
                secondNumber = "";
                equaled === true;
            
            } 

        }

        if(eventTarget.id === "ac" )
        {
            display.textContent = "0";
            clearEverything();
            equaled === false;
        }
    }

    

    const buttonContainers = document.querySelectorAll(".button-containers");

    for( let buttonContainer of buttonContainers)
    {
        buttonContainer.addEventListener("click", buttonClicked);
    }
