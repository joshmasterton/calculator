import "./index.css";

const calculator = (() => {
    const gridArray = [
        {data: "", type: "empty"}, {data: "AC", type: "clear"},
        {data: "", type: "empty"}, {data: "+", type: "operator"},
        {data: "7", type: "number"}, {data: "8", type: "number"},
        {data: "9", type: "number"}, {data: "*", type: "operator"},
        {data: "4", type: "number"}, {data: "5", type: "number"},
        {data: "6", type: "number"}, {data: "-", type: "operator"},
        {data: "1", type: "number"}, {data: "2", type: "number"},
        {data: "3", type: "number"}, {data: "+", type: "operator"},
        {data: "", type: "empty"}, {data: "0", type: "number"},
        {data: "", type: "empty"}, {data: "=", type: "equal"},
    ];

    return {gridArray};
})();

const displayController = (() => {
    const displayCon = document.getElementById("displayCon");
    const gridCon = document.getElementById("gridCon");
    
    const gridDisplay = () => {
        const gridArrayLength = calculator.gridArray.length;

        for(let i = 0; i < gridArrayLength; i++){
            const grid = document.createElement("button");
            grid.className = "grid";
            grid.innerHTML = calculator.gridArray[i].data;
            gridCon.appendChild(grid);
        };
    };

    return {gridDisplay};
})();

displayController.gridDisplay();