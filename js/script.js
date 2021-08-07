function parseArr(inValues) {
    console.log(inValues);
    let temp = inValues;
    let arr = [];
    let element = "";
    let f = 0;
    for (let i=0, newArr=0; ; i++) {
        let symbol = String(temp.substr(i, 1));
        //element += symbol === " " ? "" : symbol;

        if (symbol && (symbol != " ")) f = 1;
        console.log("flag");

        if ((symbol === " ") || (symbol === "") && (f == 1)) {
            f = 0;
            arr[newArr] = element;
            console.log(element);
            newArr++;
            element = "";
        }
        element += f == 1 ? symbol : "";
        if (symbol === "") {
            //console.log("stop");
            //console.log(arr);
            return arr;
            brake;
        }
    }

}

//task 1
function arrSum(inputArr) {
    let result = 0;
    for (let i=0; i<inputArr.length; i++) {
        result += parseFloat(inputArr[i]);
    }
    return result;

    // для случая если надо собрать все символы в одну строку
    // let result = "";
    // for (let i=0; i<inputArr.length; i++) {
    //     result += inputArr[i];
    // }
    // return result;
}
//task 2
function searchValue(inputArr, value) {
    for (let i=0; i<inputArr.length; i++) {
        if (inputArr[i] == value) return i;
    }
    return -1;
}
//task 3
function addArr(arrFirst, arrSecond){
    let newArr = [];
    for (let i=0; i<arrFirst.length; i++) newArr[i] = arrFirst[i];
    for (let i=0; i<arrSecond.length; i++) newArr[arrFirst.length+i] = arrSecond[i];
    return newArr;
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
    let arr = parseArr(enteredArr);
    let  inEnteredArr = document.querySelector(".search-arr-in");
    inEnteredArr.innerHTML = arr;
    let  inEnteredValue = document.querySelector(".search-value-in");
    inEnteredValue.innerHTML = enteredValue;

    let  searchOut = document.querySelector(".search-out");
    searchOut.innerHTML = searchValue(arr, enteredValue);
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




