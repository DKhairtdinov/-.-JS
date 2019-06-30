
//Задание 1. Нарисовать с помощью циклов треугольник на 20 элементов в высоту.
document.write("Задание 1. Нарисовать с помощью циклов треугольник на 20 элементов в высоту." + "<br>")
var triangleArray = [];
var i = 20;
while (i > 0) {
    triangleArray.push("*");
    console.log(triangleArray.join(''));
    document.write(triangleArray.join('') + "<br>");
    i--;
}

document.write("<br>");

//Задание 2. Данный массив расположить по увеличению и перезаписать его [1, 2, 10, 14, 3, 15, 16 , 30, 91]
document.write("Задание 2. Данный массив расположить по увеличению и перезаписать его [1, 2, 10, 14, 3, 15, 16 , 30, 91]" + "<br>")
var arr = [1, 2, 10, 14, 3, 15, 16, 30, 91];

function compareNum(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
arr = arr.sort(compareNum);
console.log(arr.join());

document.write(arr.join() + "<br>");
document.write("<br>");


//3. Создать массив и записать в него числа от 1 до 30 и от 33 до 60
document.write("3. Создать массив и записать в него числа от 1 до 30 и от 33 до 60" + "<br>")
var arr = [];

for (var i = 1; i <= 60; i++) {
    if (i == 31 || i == 32)
        continue;
    else
        arr.push(i);

}
console.log(arr.join());
document.write(arr.join() + "<br>");
document.write("<br>");

//4. С помощью цикла switch сделать проверку, есть ли сегодня занятие у нас. За основу возьмите календарь июня.
document.write("4. С помощью цикла switch сделать проверку, есть ли сегодня занятие у нас. За основу возьмите календарь июня." + "<br>")
for (var i = 1; i <= 30; i++) {
    switch (i) {
        case 18:
        case 20:
        case 25:
        case 27:
            console.log(i + " июня - занятие ЕСТЬ");
            document.write(i + " июня - занятие ЕСТЬ" + "<br>");
        default:
            console.log(i + " июня - занятия НЕТ");
            document.write(i + " июня - занятия НЕТ" + "<br>");

    }

}
document.write("<br>");