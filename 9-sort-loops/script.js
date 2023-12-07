/*
* Дан массив чисел const arr = [1, 40, -5, 10, 0];
! Написать функцию, которая сортирует данный массив при помощи циклов.

? подсказка:
? - нужно использовать 2 цикла, вложенных друг в друга,
? - нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function sortArr(arr) {
	let sortArr = arr.slice(); // !Чтобь не мутировать первоначальный массив
		for(let j = 0; j < sortArr.length; j++) {
		for (let i = 0; i < sortArr.length; i++) {
				if(sortArr[i] < sortArr[j]) { // ! При изменении знака будет менятся сортировка
					let temp = sortArr[i];
					sortArr[i] = sortArr[j];
					sortArr[j] = temp;
			}
		}
	}
	return sortArr;
}
console.log(sortArr(arr));
console.log(arr);