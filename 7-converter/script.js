/*
* Написать функцию, которая получает на вход строку с:
todo - суммой средств - 1000
todo - валютой средств - 'руб'
todo - целевой валютой - '$'
! Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет! 
! Ставки конвертации хранятся внутри функции

*/

const converter = (sum, currency, targetCurrency) => {
			const RUB_TO_USD = 0.011141;
			const USD_TO_RUB = 89.76;
			const RUB_TO_EUR = 0.010213;
			const EUR_TO_RUB = 97.91;
			const EUR_TO_USD = 1.09;
			const USD_TO_EUR = 0.916755;

			switch(true) {
				case currency === 'руб' && targetCurrency === 'usd':
					return sum * RUB_TO_USD
				case currency === 'usd' && targetCurrency === 'руб' :
					return sum * USD_TO_RUB
				case currency === 'руб' && targetCurrency === 'eur':
					return sum * RUB_TO_EUR
				case currency === 'eur' && targetCurrency === 'руб' :
					return sum * EUR_TO_RUB
				case currency === 'usd' && targetCurrency === 'eur':
					return sum * USD_TO_EUR
				case currency === 'eur' && targetCurrency === 'usd' :
					return sum * EUR_TO_USD
				default:
					return null
			}
}

console.log(converter(1000, 'руб', 'eur'));