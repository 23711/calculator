const writeOnScreen = (element)=>{
    let elementClicked = element.target.innerText
    screen.value += elementClicked;
    return elementClicked
}
const deleteNumber = ()=> {
    let length = screen.value.length;
    let newValue = screen.value.slice(0,length - 1);
    screen.value = newValue;
}
const doOperation = (x ,y ,operator)=>{
    let answer;
    if(operator === "+"){
        return answer = x + y;
    }
    if(operator === "-"){
        return answer = x - y;
    }
    if(operator === "x"){
        return answer = x * y;
    }
    if(operator === "/"){
        return answer = x / y;
    }
}
const chooseOperation = (element)=> {
    for (let index = 0; index < element.length; index++) {
        const elements = element[index];
        if(elements === "+"){
            return "+"
        }
        if(elements === "-"){
            return "-"
        }
        if(elements === "x"){
            return "x"
        }
        if(elements === "/"){
            return "/"
        }
    }
    
}
const stringToNumber = (string, array) => {
    for (let index = 0; index < string.length; index++) {
        let element = string[index];
        array.push(Number(element))  
    }
}
const printScreen = (value)=> {
    if(value === undefined){
        screen.value = "Error"
        return
    }
    if(value === NaN){
        screen.value = "Error"
        return
    } else {
        screen.value = value;
    }

}
const clear = () => {
    screen.value = ""
}
const equalTo = ()=>{
    let stringOperation = screen.value;
    let resultOfOperator = chooseOperation(stringOperation);
    stringOperation = stringOperation.split(resultOfOperator);
    let arrayOfNumbers = []
    stringToNumber(stringOperation,arrayOfNumbers)
    let answer = doOperation(arrayOfNumbers[0],arrayOfNumbers[1],resultOfOperator);
    printScreen(answer);
}

const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".arithmetic");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");


numbers.forEach((element)=>{
    element.addEventListener("click", writeOnScreen);
})

operators.forEach((element)=>{
    element.addEventListener("click",  writeOnScreen);
})

del.addEventListener("click", deleteNumber);

equal.addEventListener("click", equalTo);

clearButton.addEventListener("click", clear);