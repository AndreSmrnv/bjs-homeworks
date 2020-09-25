"use strict";

//#1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        }
    fix() {
        this.state = this.state * 1.5;
    }        
    set state(stateValue) {
        if (stateValue < 0) {
            this._state = 0;
        }
        else if (stateValue > 100) {
            this._state = 100;
        }
        else this._state = stateValue;
            
    }           
    get state() {
        return this._state;
    }
                
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {    
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';    
    }
    
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {    
        super(name, releaseDate, pagesCount, state) ;
        this.author = author;
        this.type = 'book';
    }
    
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {    
        super(author, name, releaseDate, pagesCount, state) ;
        this.type = 'novel';      
    }
}      
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {    
        super(author, name, releaseDate, pagesCount, state) ; 
        this.type = 'fantastic';       
    }
    
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {    
        super(author, name, releaseDate, pagesCount, state) ;
        this.type = 'detective';        
    }
    
}

//#2
class Library  {
    constructor(name) {
        this.name = name;
        this.books = [];        
    }
    addBook(book) {        
         this.books.push(book);
    }
    findBookBy(type, value) {
        let typeItem = type ;
        let book = this.books.find(item => item[typeItem] == value); 
        return  book ? book : null;
    } 
    giveBookByName(bookName) {
        let typeItem = 'name' ;
        let indexBook = -1;
        let book = this.books.find(item => item[typeItem] == bookName); 
        if (book !== undefined) this.books.splice(this.books.findIndex(item => item[typeItem] == bookName),1) ;
        return  book ? book : null; 
    }                 
}

//#3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = [];        
    }
}
////tests
/*
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
sherlock.state = 15 ;
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
const picknickNB = new NovelBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
const picknickDB = new DetectiveBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
console.log(picknick.type);
console.log(picknickNB.type);
console.log(picknickDB.type);
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

//console.log(`name - ${library.books[0]['name']} | state - ${library.books[1]}`);
console.log(library.findBookBy("name", "Пикник на обочине").state); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
console.log(library.findBookBy("releaseDate", 1924));
//library.giveBookByName("Машина времени");
console.log(library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
for (let i of library.books) {
    console.log("книги после выдачи: " + i.name); 
}


*/