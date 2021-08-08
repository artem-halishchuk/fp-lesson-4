//task 1
function arrSum(inputArr) {
    let result = 0;
    for (let i=0; i<inputArr.length; i++) result += parseFloat(inputArr[i]);
    return result;

    // для случая если надо собрать все символы в одну строку
    // let result = "";
    // for (let i=0; i<inputArr.length; i++) {
    //     result += inputArr[i];
    // }
    // return result;
}
//task 2
function searchValue(inArr, inValue) {
    let outArr = [];
    for (let i=0, n=-1; i<inArr.length; i++) {
        console.log(inArr[i]);
        console.log(inValue[0]);
        if (inArr[i] == inValue[0]) {
            n++;
            outArr[n] = i;
        }
    }
    if (outArr.length == 0) return -1;
    else return outArr;
}
//task 3
function addArr(arrFirst, arrSecond){
    let newArr = [];
    for (let i=0; i<arrFirst.length; i++) newArr[i] = arrFirst[i];
    for (let i=0; i<arrSecond.length; i++) newArr[arrFirst.length+i] = arrSecond[i];
    return newArr;
}

function parseArr(inValues) {
    let temp = inValues;
    console.log(temp);
    let arr = [];
    let element = "";
    let f = 1;

    for (let i=0, newArr=-1; ; i++) {
        let symbol = String(temp.substr(i, 1));
        if (symbol === " " && f === 1) continue;
        else if (symbol !== " " && symbol !== "") {
            element += symbol;
            f = 0;
        } else if (symbol === " " && element != "") {
            f = 1;
            arr[++newArr] = element;
            element = "";
        } else if (symbol === "") {
            arr[++newArr] = element;
            break;
        }
    }
    console.log(arr);
    return arr;
}
function arrSumEntered() {
    let enteredArr = prompt("Введите массив элементов (элементы разделять проблелом)");
    let  inArrSum = document.querySelector(".in-arr-sum");
    let doneArr = parseArr(enteredArr);
    inArrSum.innerHTML = doneArr;
    let  outArrSum = document.querySelector(".out-arr-sum");
    outArrSum.innerHTML = arrSum(doneArr);

}
function searchEntered() {
    let enteredArr = prompt("Введите массив элементов (элементы разделять проблелом)");
    let enteredValue = prompt("Введите искомое значение");
    let array = parseArr(enteredArr);
    let value = parseArr(enteredValue)
    let  inEnteredArr = document.querySelector(".search-arr-in");
    inEnteredArr.innerHTML = array;
    let  inEnteredValue = document.querySelector(".search-value-in");
    inEnteredValue.innerHTML = enteredValue;

    let  searchOut = document.querySelector(".search-out");
    searchOut.innerHTML = searchValue(array, value);
}
function addArrEntered() {
    let enteredArrFirst = prompt("Введите первый массив элементов (элементы разделять проблелом)");
    let enteredArrSecond = prompt("Введите второй массив элементов (элементы разделять проблелом)");
    let arrFirstParse = parseArr(enteredArrFirst);
    let arrSecondParse = parseArr(enteredArrSecond);

    let  inArrFirst = document.querySelector(".addArr-first");
    inArrFirst.innerHTML = arrFirstParse;
    let  inArrSecond = document.querySelector(".addArr-second");
    inArrSecond.innerHTML = arrSecondParse;

    let  outArr = document.querySelector(".addArr-out");
    outArr.innerHTML = addArr(arrFirstParse, arrSecondParse);
}






