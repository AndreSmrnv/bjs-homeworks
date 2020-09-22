"use strict";


function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    const nowDate = new Date;
    let totalAmount = 0;
    let notCorrectParam = null;
    let notCorrectParamVal = null;
    if (isNaN(parseInt(percent))) {
        notCorrectParam = 'percent';
        notCorrectParamVal = percent;
    }
    if (isNaN(parseInt(contribution))) {
        notCorrectParam = 'contribution';
        notCorrectParamVal = contribution;
    }
    if (isNaN(parseInt(amount))) {
        notCorrectParam = 'amount';
        notCorrectParamVal = amount;
    }
    if (!(date instanceof Date)) {
        notCorrectParam = 'date';
        notCorrectParamVal = date;
    }
    
    if (notCorrectParam !== null ) {
        let notCorrectMessage = `Параметр ${notCorrectParam} содержит неправильное значение ${notCorrectParamVal}`;
        console.log(notCorrectMessage);
        return totalAmount = notCorrectMessage;
    }  
    
    let bodyCredit = amount - contribution;
    let monthsCredit = 0;
    monthsCredit = (date.getFullYear() - nowDate.getFullYear()) * 12;
    monthsCredit -= nowDate.getMonth() + 1;
    monthsCredit += date.getMonth() + 1;    

    let percentRateCredit = percent/(100 * 12);
    
    totalAmount = Math.round(monthsCredit * (bodyCredit * (percentRateCredit + percentRateCredit / (((1 + percentRateCredit) ** monthsCredit) - 1))) * 100) / 100;
    console.log(totalAmount);
     return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    let nameUser = name;
    if ((!nameUser || nameUser.length === 0)) {
        nameUser = 'Аноним';
    }
    greeting = `Привет, мир! Меня зовут ${nameUser}`;
    console.log(greeting);
     return greeting;
}