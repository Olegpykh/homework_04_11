// 1 уровень сложности: МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ JS
// Напишите выражение, которое вычисляет сумму чисел 5 и 10.
let a = 5;
let b = 10;
console.log(a + b);
//Используя оператор вычитания, найдите разницу между 20 и 7.

let c = 20;
let d = 7;
console.log(c - d);

//Какой результат даст выражение 8 * 3?
24;
//Что вернёт оператор деления при вычислении 15 / 3?
0;
//Используя оператор остатка от деления, найдите остаток от 17 % 5.

let a1 = 17;
let b1 = 5;
console.log(a1 % b1);

//Увеличьте значение переменной x на 1, используя инкремент.

let x = 2;
x++;
console.log(x);

//Уменьшите значение переменной y на 1, используя декремент.
let y = 10;
y--;
console.log(y);

//Используйте оператор возведения в степень для вычисления 2 ** 4.

let a2 = 2;
let b2 = 4;
console.log(a2 ** b2);

//Если z = 10, чему будет равно z += 5?
15;

//Если a = 6, чему будет равно a *= 3?
18;

// ОПЕРАТОРЫ СРАВНЕНИЯ JS
// Что вернёт выражение 5 > 3?
true;
// Какой результат даст сравнение 7 <= 7?
true;
// Верно ли, что 10 == '10'?

// yes!!!!!!!!!

// Чем отличается оператор == от ===?

// Строгое несравнение по значению и строгое по типу данных

// Что вернёт выражение 0 === false?

// On vernet False!!!!!!!!!!!!!!!!!!!!

// Какой результат даст сравнение 'apple' > 'banana'?

// false!!!!!!!!!!

// Что вернёт выражение null == undefined?

// true!!!!!!!!!!!

// Верно ли, что NaN == NaN?

// NO!!!!!!!!!!!

// Какой результат даст выражение 5 != '5'?

// false!!!!!!!!!!!!!!!!!!

// Что вернёт выражение '5' !== 5?

// TRUE!!!!!!!

// ПРЕОБРАЗОВАНИЯ В JS ЯВНЫЕ И НЕЯВНЫЕ
// Преобразуйте число 10 в строку явно.

let num = 10;
let str = num.toString();

// Как неявно преобразуется строка '5' при выполнении выражения '5' * 2?

// ТАК  КАК ОПЕРАТОР УМНОЖЕНИЯ ПРЕОБРАЗУЕТ СТРОКУ В ЧИСЛО НЕЯВНО

// Что вернёт выражение Number('20')?

// Число 20

// Преобразуйте булево значение true в число.

console.log(true * true);

// Какой тип данных получится при выполнении выражения 5 + '5'?

//    СТРОКА!!!!!!!!!!!!!

// Что произойдёт при явном преобразовании undefined в число?

// Nan!!!!!!!!!!!f

// Как неявно преобразуется null при выполнении выражения null + 5?

//   Когда один из операндов — это null, он неявно преобразуется в число.

// Преобразуйте строку '123abc' в число с помощью parseInt.

let result = parseInt("123abc");
console.log(result);

// Какой результат даст Boolean(0)?

// FALSE!!!!!!!!!!!!

// Что вернёт выражение String(false)?

// String False

//   ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ: ALERT, PROMPT, CONFIRM
// Как вывести сообщение 'Привет, мир!' пользователю?

//   alert("Привет, мир!");

// Как запросить у пользователя его имя и сохранить в переменную?

// Как вывести окно подтверждения с сообщением 'Вы уверены?' и сохранить результат?
// Напишите код, который выведет сумму двух чисел, введённых пользователем через prompt.
// Как вывести пользователю значение переменной x через alert?
// Как проверить, нажал ли пользователь 'Отмена' в prompt?
// Как вывести пользователю многострочное сообщение через alert?
// Напишите код, который спрашивает у пользователя число и выводит его квадрат.

let number = prompt("Введите число:");

number = Number(number);

if (!isNaN(number)) {
  let square = number * number;

  alert("Квадрат числа: " + square);
} else {
  alert("Пожалуйста, введите правильное число.");
}

// Как вывести в консоль результат подтверждения confirm('Продолжить?')?
// Как сделать так, чтобы prompt показывал значение по умолчанию?