//Task 1
let x = 20
let y = 58
let z = 42

let xyz = x + y + z;
console.log(xyz)


//Task 2
const sekond = 60;       //- количество секунд в минуте
const minute = 60;       //- количество минут в часу
const hour = 24;         //- количество часов в сутках
const year = 365;        //- количество суток в году

let myAgeInSeconds = sekond * minute * hour * year * 23;
console.log(myAgeInSeconds)


//Task 3
let count = 42
let userName = '42'

// 1 способ
let text = count.toString()
let number = Number(userName)
console.log(typeof number);
console.log(typeof text);

//2 способ
let text2 = count + "";
let number2 = parseInt(userName, 10);
console.log(typeof text2);
console.log(typeof number2);


//Task 4
let a = 1
let b = 2
let c = "белых медведей"
console.log("" + a + b + " " + c)


//Task 5
let t5_1 = "доступ";
let t5_2 = "морпех";
let t5_3 = "наледь"
let t5_4 = "попрек"
let t5_5 = "рубило"
let lengthWords = t5_1.length + t5_2.length + t5_3.length + t5_4.length + t5_5.length;
console.log(lengthWords);
// 2 способ
console.log((t5_1 + t5_2 + t5_3 + t5_4 + t5_5).length)


//Task 6
let stroka = "пожелые коты";
let numer = 18;
let boolean = true;
console.log(`Variable: ${Object.keys({stroka})[0]} have type: ${typeof stroka}`);
console.log(`Variable: ${Object.keys({numer})[0]} have type: ${typeof numer}`);
console.log(`Variable: ${Object.keys({boolean})[0]} have type: ${typeof boolean}`);

//Task 7
let name = prompt("Введите ваше имя ", "Имя");
let age = prompt("Введите ваш возраст", "100");
console.log("Вас зовут: " + name + " лет вам: " + age)

//ADVANCED level
// Task 1 👨‍🏫
let ad_1 = 4;
let bd_1 = 3;
[ad_1, bd_1] = [bd_1, ad_1];
console.log(ad_1, bd_1)

//Task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

