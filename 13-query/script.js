/*
Написать функцию, которая принимает обьект query параметров и возвращает:
 строку для вставки // param=value&param=value

*/

const queryParam = {
	search: 'Ноутбук',
	take: 10,
	pagination: 5
}

function GetQueryParam() {
	let queryString = '';
	for([key, value] of Object.entries(queryParam)) {
		queryString+=`${key}=${value}&`
}
return queryString.slice(0, -1); 
} 

console.log(GetQueryParam(queryParam));
