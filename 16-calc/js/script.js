'use strict';

const input1 = document.querySelectorAll('.form__input')[0];
const input2 = document.querySelectorAll('.form__input')[1];
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivision = document.querySelector('#btn-division');
const btnMinus = document.querySelector('#btn-minus');
const btnPlus = document.querySelector('#btn-plus');
const answer = document.querySelector('.answer__block');

function calcResult(e) {
	let res = 0;
	switch (true) {
		case e.target.id === btnMultiply.id:
			res = input1.value * input2.value;
			break;
		case e.target.id === btnDivision.id:
			res = input1.value / input2.value;
			break;
		case e.target.id === btnMinus.id:
			res = input1.value - input2.value;
			break;
		case e.target.id === btnPlus.id:
			res = Number(input1.value) + Number(input2.value);
			break;
	}
	answer.innerText = res;
	input1.value = '';
	input2.value = '';
}
