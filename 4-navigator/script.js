/* 
* * Написать код расчитывающий дистанцию до объекта

TODO: adressLat - адрес назначения lat(например 10)
TODO: adressLong - адрес назначения long
TODO: positionLat - текущее положение пользователя lat
TODO: positionLong - текущее положение пользователя long

* В результате на основе этих координат нужно посчитать расстояние от текущего местоположения до назначения

? Формула решения
?   l = √ (x 2 - x 1) 2+ (y 2 - y 1) 2, где:
! l - расстояние между точками
! x1, y1 - координата первой точки
! x2, y2 - координата второй точки
*/

// !РЕШЕНИЕ 

const adressLat = 10;
const adressLong = 15;
const positionLat = 2;
const positionLong = 4;

let remainingDistance = Math.sqrt((positionLat - adressLat)**2 + (positionLong - adressLong)**2);
console.log(`Расстояние от текущего месторасположения до назначения: ${remainingDistance} км`);
console.log(`Расстояние от текущего месторасположения до назначения: ${remainingDistance.toFixed(2)} км`); // * Если необходимо округлить до 2 чисел после запятой
