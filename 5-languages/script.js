const languageUser = 'ru';

switch(languageUser) {
	case 'en': 
		console.log('Good afternoon!')
		break;
	case 'ru':
		console.log('Добрый день!')
		break;
	case 'de':
		console.log('Gutten tag!')
		break;
		default:
			console.log('Упс что-то пошло не так! Попробуйте ещё раз')
}
