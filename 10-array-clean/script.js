/*
* Напишите функцию, которая принимает:
todo -Массив чисел
todo -Функцию удаления элементов
! И возвращает отфильтрованный массив. При этом функция удаления элементов принимает
! число и возвращает true, если его надо удалить и false, если надо оставить
*/

const arr = [1, 4, 100, 8, 10, 22, 44, 55];

function filter(arr, fn) {
	let arrFilter = [];
	for(let el of arr) {
		if (!fn(el)) {
			arrFilter.push(el);
		}
	}
	return arrFilter;
}

function deleteEl(num) {
	return  num < 15;
}

console.log(filter(arr, deleteEl));
