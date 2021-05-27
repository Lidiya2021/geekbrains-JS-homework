/*1. Задать температуру в градусах по Цельсию.
Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, 
где Tf – температура по Фаренгейту, Tc – температура по Цельсию*/
/*"use strict";*/
let Tc = prompt("Введите температуру в градусах по Цельсию", "");
let Tf = (9 / 5) * Tc + 32;
alert("Температура " + Tc + " градусов по Цельсию соответствует " + Tf + " градусов по Фаренгейту");

/*2. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).*/

let name = "Василий";
let admin = name;
alert(admin);

/*3. Вывести в консоль значения выражений и объяснить почему получились такие значения 
используя комментарии к каждому выражению:*/

let result1 = 10 + 10 + "10";
console.log(result1);/* т.к. первые два значения это числа, выполнится сложение 10+10=20, а третье значение это строка,  далее произойдет конкетинация "20"+"10",получится 2010*/

let result2 = 10 + "10" + 10;
console.log(result2);/*результат будет конкетинация 10+"10"="1010", затем "1010"+"10" в итоге 101010*/

let result3 = 10 + 10 + +"10";
console.log(result3);/*результат 30, т.к. первые два числа сложатся, третье, поскольку перед строкой стоит знак "+" прочитается как число и прибавится к сумме первых двух значений*/ 

let result4 = 10 / -"";
console.log(result4);/*результат -infiniti, т.к. сначала -"" прочитаются как -0, затем 
10/-0 и получим отрицательное занчение infiniti*/

let result5 = 10 / +"2,5";
console.log(result5);/* результат nan, т.к. нам предложено разделить число 10 на дробное число, записанное не верно(запятая вместо точки), т.е. nan, при делении числа на nan получается nan*/