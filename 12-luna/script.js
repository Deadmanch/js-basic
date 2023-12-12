/*
Написать функцию проверки номера карты алгоритмом Луна.
В функцию передается номер карты, а функция возвращает:
true - если карта проходит алгоритм
false - если нет
*/

const card = '4561-2612-1234-5464';
const card2 = '4561-2612-1234-5467';
const card3 = '456d1-2612-1234-5467';

function isCard(card) {
	const cardWithoutDash = card.trim().replaceAll('-', '');
	if (isNaN(cardWithoutDash)) {
		return false;
	}
	if (cardWithoutDash.length !== 16) {
		return false;
	}

	const res = cardWithoutDash.split('').reduce((acc, currentValue, i) => {
		if(i % 2 === 0) {
			if(Number(currentValue) * 2 < 9) {
				return acc+=Number(currentValue) * 2;
			}
			return acc+=Number(currentValue) * 2 - 9;
		}
		return acc+=Number(currentValue)
	}, 0);
	return res % 10 === 0;
}

console.log(isCard(card));
console.log(isCard(card2));
console.log(isCard(card3));
