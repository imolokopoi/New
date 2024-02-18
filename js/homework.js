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

