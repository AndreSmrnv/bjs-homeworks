"use strict";
//console.log(getSolutions(1, 5, 4));
//console.log(getSolutions(1, 2, 1));
//console.log(getSolutions(1, 2, 10));
//showSolutionsMessage(1, 5, 4);
//showSolutionsMessage(1, 2, 1);
//showSolutionsMessage(1, 2, 10);
console.log(getDecodedValue(1));
console.log(getDecodedValue(0));
console.log(getPersonData({aaa: 1, bbb: 0}));

//#1
function getSolutions(a,b,c) {
    
    let x = [];
    
    let D = b ** 2 - 4 * a  * c;
    if (D > 0) {                
        x.push((-b + Math.sqrt(D)) / (2 * a));
        x.push((-b - Math.sqrt(D)) / (2 * a));
    }
    else if (D === 0) {      
        x.push((-b) / (2 * a));
    }
      
     return {D, roots:x};
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D > 0) {  
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);       
    }
    else if (result.D === 0) { 
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);        
    }
    else {
        console.log('Уравнение не имеет вещественных корней');
    }
}

//#2
function getAverageScore(data) {
    let averageScore = {};
    let allAverageMark = [];
    for (let itemData in data) {                 
        averageScore[itemData] = getAverageMark(data[itemData]);
        allAverageMark.push(averageScore[itemData]);
    }
    averageScore.average = getAverageMark(allAverageMark);
    //console.log(averageScore);
    return averageScore;
}

function getAverageMark(marks){
    let averageMark = 0;
    let summaMarks = 0;
    let arrayOfMarks = [];
      
    arrayOfMarks = marks;
    let lengthArrayOfMarks = arrayOfMarks.length;
    if (lengthArrayOfMarks === 0) {
        averageMark = 0;
        return averageMark;
    }
    
    for (let mark of arrayOfMarks) {
        summaMarks += Number(mark);       
    } 
    averageMark = (summaMarks / arrayOfMarks.length);    
    
     return averageMark;
}

//#3
function getPersonData(secretData) {
    let decriptPersonData = {};
    decriptPersonData.firstName = getDecodedValue(secretData.aaa) ;
    decriptPersonData.lastName = getDecodedValue(secretData.bbb) ;
    return decriptPersonData;
}

function getDecodedValue(secret) {
    return (secret == 0) ? "Родриго" : "Эмильо";
}
