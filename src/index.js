import "./index.css";

const calculator = (() => {
    const gridArray = [
        {data: "", type: "empty"}, {data: "AC", type: "clear"},
        {data: "/", type: "operator"}, {data: "+", type: "operator"},
        {data: "7", type: "number"}, {data: "8", type: "number"},
        {data: "9", type: "number"}, {data: "*", type: "operator"},
        {data: "4", type: "number"}, {data: "5", type: "number"},
        {data: "6", type: "number"}, {data: "-", type: "operator"},
        {data: "1", type: "number"}, {data: "2", type: "number"},
        {data: "3", type: "number"}, {data: "+", type: "operator"},
        {data: "", type: "empty"}, {data: "0", type: "number"},
        {data: "", type: "empty"}, {data: "=", type: "equal"},
    ];

    let numberOne = "";
    let numberTwo = "";
    let operatorOne = "";
    let operatorTwo = "";
    let result = "";

    const numberClick = (e, display) => {
        if(operatorOne === ""){
            numberOne += e.target.innerHTML;
            display.innerHTML = numberOne;
        }else if(operatorOne != ""){
            numberTwo += e.target.innerHTML;
            display.innerHTML = numberTwo;
        };
        console.log({numberOne, numberTwo, operatorOne, operatorTwo, result});
    };

    const operatorClick = (e, display) => {
        e.preventDefault();
        if(numberOne != "" && numberTwo === ""){
            operatorOne = e.target.innerHTML;
            display.innerHTML = operatorOne;
        }else if(numberTwo != ""){
            operatorTwo = e.target.innerHTML;
            calculateResult();
            display.innerHTML = result;
            numberOne = result;
            numberTwo = "";
            operatorOne = operatorTwo;
            operatorTwo = "";
            result = "";
        };
    };

    const equalClick = (e, display) => {
        e.preventDefault();
        if(numberOne != "" && operatorOne != "" && numberTwo != ""){
            calculateResult();
            display.innerHTML = result;
            numberOne = result;
            numberTwo = "";
            operatorOne = "";
            operatorTwo = "";
            result = "";
        };
    };

    const clearClick = (e, display) => {
        e.preventDefault();
        display.innerHTML = ""
        numberOne = "";
        numberTwo = "";
        operatorOne = "";
        operatorTwo = "";
        result = "";
    };

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    const calculateResult = () => {
        if(operatorOne === "+"){
            result = add(parseInt(numberOne), parseInt(numberTwo));
        }else if(operatorOne === "-"){
            result = sub(parseInt(numberOne), parseInt(numberTwo));
        }else if(operatorOne === "/"){
            result = divide(parseInt(numberOne), parseInt(numberTwo));
        }else if(operatorOne === "*"){
            result = multiply(parseInt(numberOne), parseInt(numberTwo));
        };     
    };

    return {
        gridArray,
        numberClick,
        operatorClick,
        equalClick,
        clearClick,
    };
})();

const displayController = (() => {
    const displayCon = document.getElementById("displayCon");
    const gridCon = document.getElementById("gridCon");
    
    const gridDisplay = () => {
        const gridArrayLength = calculator.gridArray.length;

        for(let i = 0; i < gridArrayLength; i++){
            const grid = document.createElement("button");
            grid.innerHTML = calculator.gridArray[i].data;
            grid.className = calculator.gridArray[i].type;
            gridCon.appendChild(grid);
        };

        const getNumbers = document.getElementsByClassName("number");
        const getOperators = document.getElementsByClassName("operator");
        const getEqual = document.getElementsByClassName("equal");
        const getClear = document.getElementsByClassName("clear");

        for(let i = 0; i < getNumbers.length; i++){
            getNumbers[i].addEventListener("click", (e) => {
                calculator.numberClick(e, displayCon);
            });
        };

        for(let i = 0; i < getOperators.length; i++){
            getOperators[i].addEventListener("click", (e) => {
                calculator.operatorClick(e, displayCon);
            });
        };

        for(let i = 0; i < getEqual.length; i++){
            getEqual[i].addEventListener("click", (e) => {
                calculator.equalClick(e, displayCon);
            });
        };

        for(let i = 0; i < getClear.length; i++){
            getClear[i].addEventListener("click", (e) => {
                calculator.clearClick(e, displayCon);
            });
        };

    };

    return {gridDisplay};
})();

displayController.gridDisplay();