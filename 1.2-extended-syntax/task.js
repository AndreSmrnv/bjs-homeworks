"use strict";
//getResult(1,-4,4); // D = 0
//getResult(2,1,3); // D < 0
//getResult(2,5,-7); // D > 0
//getAverageMark([3,4,5]);
//getAverageMark("2 3 4 5 2 5 8");
askDrink(1993, 4, 6);
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
    let discriminantD = -1;
    discriminantD = b ** 2 - 4 * a  * c;
    if (discriminantD > 0) {
        let x1 = ((-b - Math.sqrt(discriminantD)) / (2 * a));
        let x2 = ((-b + Math.sqrt(discriminantD)) / (2 * a));
        x.push(x2);
        x.push(x1);
    }
    else if (discriminantD === 0) {
        let x1 = (-b) / (2 * a);
        x.push(x1);
    }
    
    //console.log(`D - ${discriminantD} `, x);
     return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark = 0;
    let summaMarks = 0;
    let arrayOfMarks = [];
    
    //console.log(marks);
    /*if (marks.indexOf(',') !== -1) {
        arrayOfMarks = marks.split(','); 
    } else if (marks.indexOf(' ') !== -1) {
        arrayOfMarks = marks.split(' ');
    }*/
    //arrayOfMarks = marks.split(','); 
    arrayOfMarks = marks;
    let lengthArrayOfMarks = arrayOfMarks.length;
    if (lengthArrayOfMarks > 0) {
        if (lengthArrayOfMarks > 4) arrayOfMarks.splice(5,lengthArrayOfMarks);
        for (let mark of arrayOfMarks) {
            summaMarks += Number(mark);
            //console.log(`оценка - ${mark} | сумма - ${summaMarks} `);
        } 
        averageMark = Math.round(summaMarks / arrayOfMarks.length);
    }
    else {
       // console.log('оценок нет');
        averageMark = 0;
    }
    //console.log(`средняя оценка - ${averageMark} | сумма - ${averageMark} |  `, arrayOfMarks);
     return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result;
    let birthDate = new Date(dateOfBirthday);
    let today = new Date();
    let UsersAge = (today.getFullYear() - birthDate.getFullYear());
    console.log (`User - ${name} | ДР - ${UsersAge} | Year - ${birthDate.getFullYear()}`)
    if (UsersAge >18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } 

    
     return result;
}