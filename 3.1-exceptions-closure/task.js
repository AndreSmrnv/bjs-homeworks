"use strict";

//#1
function parseCount (numInput) {
    let result = Number.parseInt(numInput);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}
function validateCount (numInput) {
    let result = 0;
    try {
        result = parseCount (numInput)
    } catch(err) {
        result = new Error(err.message);
    } finally {
        return result;
    }
        
}
class Triangle {
    constructor(a, b, c) {
        if ( ((a + b) < c) || ((a + c) < b) || ((c + b) < a) ) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        this.a = a;
        this.b = b;
        this.c = c;                 
    }
        
    getPerimeter() {
        return (this.a && this.b && this.c) ? this.roundValue((this.a + this.b +this.c)) : 'Ошибка! Треугольник не существует';
    } 
    getArea() {
        let p = this.getPerimeter() / 2;
        return (this.a && this.b && this.c) ? this.roundValue((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c) ))) : 'Ошибка! Треугольник не существует';
    }
    roundValue(intValue) {
        return (Math.round(intValue * 1000) / 1000);
    } 
}
function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);  
    }
    catch (err) {
        class badTriangle extends Triangle {
        }
        return new badTriangle();
    }
    
}

////tests
/*
console.log(parseCount('2'));
console.log(validateCount('as'));
const triangle = getTriangle(1,3,100);
console.log(triangle.getArea());
console.log(triangle.getPerimeter());
console.log(triangle);
const triangle1 = new Triangle(6,10,15);
console.log(triangle1);
console.log(triangle1.getPerimeter());
console.log(triangle1.getArea());
*/