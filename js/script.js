"use strict"
//Напишіть функцію яка ітеративно (в циклі) буде знаходити суму 
  //всіх непарних додатніх чисел до якогось числа.
 
  function iterativeOddSumTo(number) {
    let oddSumm=0;
for (let i=1; i<=number; i+=2){
    oddSumm+=i;

};
return oddSumm;
};
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(9)) // 25
    console.log(iterativeOddSumTo(10)) // 25

   // Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.  
    function recursiveOddSumTo(number) {
        if (number<=0){
        return 0;}
        else if (number%2===0){
            return recursiveOddSumTo(number-1);
        }
        else {return number+recursiveOddSumTo(number-2);}
    };
        console.log(recursiveOddSumTo(1)) // 1
        console.log(recursiveOddSumTo(9)) // 25
        console.log(recursiveOddSumTo(10)) // 25   

//
//Напишіть стрілочну функцію isXOEqual яка перевіряє чи рядок має однакову кількість символів «x» та «o». 
//Функція повинна повертати логічне значення та бути нечутливою до регістру. Рядок може містити будь-які 
//символи.


const isXOEqual = (str) => {
    let sumo=0;
    let sumx=0;
    str=str.toLowerCase();
    console.log(str)
    for (let it=0; it<str.length; it++){
    if (str[it]==="o"){
            sumo++;
        }
    else if (str[it]==="x"){
            sumx++;
    }
}
return sumo===sumx;
}

console.log(isXOEqual("ooxx")) // true
console.log(isXOEqual("xooxx")) // false
console.log(isXOEqual("ooxXm")) // true
console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
console.log(isXOEqual("zzoo")) // false