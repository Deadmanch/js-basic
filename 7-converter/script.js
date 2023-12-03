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
				case currency.toLowerCase() === 'руб' && targetCurrency.toLowerCase() === 'usd':
					return sum * RUB_TO_USD
				case currency.toLowerCase() === 'usd' && targetCurrency.toLowerCase() === 'руб' :
					return sum * USD_TO_RUB
				case currency.toLowerCase() === 'руб' && targetCurrency.toLowerCase() === 'eur':
					return sum * RUB_TO_EUR
				case currency.toLowerCase() === 'eur' && targetCurrency.toLowerCase() === 'руб' :
					return sum * EUR_TO_RUB
				case currency.toLowerCase() === 'usd' && targetCurrency.toLowerCase() === 'eur':
					return sum * USD_TO_EUR
				case currency.toLowerCase() === 'eur' && targetCurrency.toLowerCase() === 'usd' :
					return sum * EUR_TO_USD
				default:
					return null
			}
}

console.log(converter(1000, 'РУБ', 'eur'));