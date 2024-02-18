"use strict"
//Напишіть функцію яка ітеративно (в циклі) буде знаходити суму 
  //всіх непарних додатніх чисел до якогось числа.
 
  //function iterativeOddSumTo(number) {
    //let oddSumm=0;
//for (let i=1; i<=number; i+=2){
  //  oddSumm+=i;

//};
//return oddSumm;
//};
//    console.log(iterativeOddSumTo(1)) // 1
//    console.log(iterativeOddSumTo(9)) // 25
//    console.log(iterativeOddSumTo(10)) // 25

   // Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.  
//    function recursiveOddSumTo(number) {
//        if (number<=1){
//        return 0;}
//        else if (number%2===0){
//            return recursiveOddSumTo(number-1);
//        }
//        else {return number+recursiveOddSumTo(number-2);}
//    };
//        console.log(recursiveOddSumTo(1)) // 1
//        console.log(recursiveOddSumTo(9)) // 25
//        console.log(recursiveOddSumTo(10)) // 25   

//
//Напишіть стрілочну функцію isXOEqual яка перевіряє чи рядок має однакову кількість символів «x» та «o». 
//Функція повинна повертати логічне значення та бути нечутливою до регістру. Рядок може містити будь-які 
//символи.


/*const isXOEqual = (str) => {
    let sumO=0;
    let sumX=0;
    str=str.toLowerCase();
    console.log(str)
    //for (let it=0; it<str.length; it++)
    for (let it of str) {
    //if (str[it]==="o")
    if (it==="o"){
            sumO++;
        }
    //else if (str[it]==="x")
    else if (it==="x"){
            sumX++;
    }
}
return sumO===sumX;
}

console.log(isXOEqual("ooxx")) // true
console.log(isXOEqual("xooxx")) // false
console.log(isXOEqual("ooxXm")) // true
console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")) // false

//"Просунута робота з масивами"
// Задача 1
// const resultsArray=[1, 2, [3, [4]]];
// let resultsOfArray=resultsArray.flat(Infinity);
// const productOfArray=resultsOfArray.reduce((accumulator, currentValue)=>accumulator * currentValue, 1);
// console.log(resultsOfArray); 
// console.log(productOfArray); // 24
//Задача 2
// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
    
    function optimizer(d) {
        const newData= Object.fromEntries(Object.entries(d).map(([key,value])=>
        [key.toLowerCase(),
        parseFloat(value).toFixed(2)]))
        ;
        return newData;
    };
    
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
    

//Задача на фільтрування масиву

//const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон',
// 'Олена'];
//let filteredNames=userNames.filter(names=>["А","Е","Є","И","І","Ї","О","У","Ю","Я","A","E","I","O","U","Y"].includes(names[0]));
//console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
//filteredNames=userNames.filter(name=>{
//    if(["А","Е","Є","И","І","Ї","О","У","Ю","Я","A","E","I","O","U","Y"].includes(name[0])){
//        return true
//    }
//    else {
//        return false
//    };
//});

//console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

const splitNames = userNames.map(name => name.split(" "));

splitNames.sort(function(a, b) {
  const lastNameA = a[0].toLowerCase();
  const lastNameB = b[0].toLowerCase();

  if (lastNameA < lastNameB) {
    return -1;
  } else if (lastNameA > lastNameB) {
    return 1;
  } else {
    return 0;
  }
});


initials = splitNames.map(function(nameParts) {
  const firstNameInitial = nameParts[1].charAt(0);
  const middleNameInitial = nameParts[2].charAt(0);
  const lastNameInitial = nameParts[0].charAt(0);
  return `${firstNameInitial}.${middleNameInitial}.${lastNameInitial}.`;
});

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

