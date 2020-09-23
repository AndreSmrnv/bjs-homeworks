"use strict";

//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function (string) {
    let stringCompare = this.split(' ').join('');
    stringCompare = stringCompare.toLowerCase();
    let lenStringCompare = stringCompare.length;
    for (let i = 0; i < lenStringCompare/2; i++) {
        if (stringCompare[i] !== stringCompare[lenStringCompare - 1 - i]) {
            return false;
        }
    }
    return true;

}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь roundedAverage
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
    averageMark = Math.round(summaMarks / arrayOfMarks.length);   
     return averageMark;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = Date.now();
    let birthDay = Number(new Date(birthday));
    let diff = now - birthDay;
    let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    let verdict = (age > 18) ? true : false ;
    return verdict;
}
//console.log("Еле-еле".isPalindrome());
//console.log (checkBirthday("1990-01-01"));
//console.log (checkBirthday("2020-01-01"));