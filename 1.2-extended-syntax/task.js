"use strict";
//getResult(1,-4,4); // D = 0
//getResult(2,1,3); // D < 0
//getResult(2,5,-7); // D > 0
//getAverageMark([3,4,5]);
//getAverageMark([2,3,4,5,2,5,8]);
//askDrink(Alex,1993, 4, 6);

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
   
    let discriminantD = b ** 2 - 4 * a  * c;
    if (discriminantD > 0) {        
        x.push((-b - Math.sqrt(discriminantD)) / (2 * a));
        x.push((-b + Math.sqrt(discriminantD)) / (2 * a));
    }
    else if (discriminantD === 0) {      
        x.push((-b) / (2 * a));
    }
      
     return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark = 0;
    let summaMarks = 0;
    let arrayOfMarks = [];
    const maxUseMarks= 5;  
    arrayOfMarks = marks;
    let lengthArrayOfMarks = arrayOfMarks.length;
    if (lengthArrayOfMarks === 0) {
        averageMark = 0;
        return averageMark;
    }
    
    if (lengthArrayOfMarks > maxUseMarks) arrayOfMarks.splice(maxUseMarks);
    for (let mark of arrayOfMarks) {
        summaMarks += Number(mark);       
    } 
    averageMark = Math.round(summaMarks / arrayOfMarks.length);    
    
     return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result;
    let birthDate = new Date(dateOfBirthday);
    let today = new Date();
    let usersAge = (today.getFullYear() - birthDate.getFullYear());
    if (usersAge >18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } 

    
     return result;
}