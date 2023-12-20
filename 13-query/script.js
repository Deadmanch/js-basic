/*
Написать функцию, которая принимает обьект query параметров и возвращает:
 строку для вставки // param=value&param=value

*/

const queryParam = {
	search: 'Ноутбук',
	take: 10,
	pagination: 5,
};

function GetQueryParam(obj) {
	let queryString = '';
	for (let key in obj) {
		if (queryString !== '') {
			queryString += '&';
		}
		queryString += `${key}=${obj[key]}`;
	}
	return queryString;
}

console.log(GetQueryParam(queryParam));
