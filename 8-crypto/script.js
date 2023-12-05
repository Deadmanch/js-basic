function crypto(password) {
	const passwordReverse = password.split('').reverse(); 
	const firstCharPassword = passwordReverse.splice(0, 3);
	const cryptoPassword = passwordReverse.concat(firstCharPassword);
	return cryptoPassword.join('');
}

function check(cryptoPassword, password) {
	const checkPassword = crypto(password);
	return cryptoPassword === checkPassword;
}
console.log(crypto('123654789'));

console.log(check('456321987', '123654789'));