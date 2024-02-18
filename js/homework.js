//"Просунута робота з масивами"
// Задача 1
const resultsArray=[1, 2, [3, [4]]];
let resultsOfArray=resultsArray.flat(Infinity);
const productOfArray=resultsOfArray.reduce((accumulator, currentValue)=>accumulator * currentValue, 1);
console.log(resultsOfArray); 
console.log(productOfArray); // 24
//Задача 2
// приклад об'єкту
/*const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
    
    function optimizer(d) {
        const newData= Object.fromEntries(Object.entries(d).map(([key,value]=>[key.toLowerCase(),
        +(value).toFixed(2)]))
        );
        return newData;
    };
    
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
    

//Задача на фільтрування масиву

