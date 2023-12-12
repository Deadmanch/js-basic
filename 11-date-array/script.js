  /* 
  * Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
    Необходимо написать функцию, которая бы удаляла бы из массива все строки,
  которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
  и возвращала бы новый массив вида:
  [`10-02-2022`, `12-11-2023`] 

  */
  const arr = [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`, '28-05-2012', `10/03/2022`, `30/02/2004`];
  function filterValidDatesAndParse(array) {
    function isValidDate(str) {
      let numericDay;
      let numericMonth;
      let numericYear;
      if (str.length !== 10) {
        return false;
      }

      let [month, day, year] = str.split('-');

      if (!year) {
        [month, day, year] = str.split('/');
      }

      if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
        return false;
      }
      if(str.includes('/')) {
      numericDay = Number(day);
      numericMonth = Number(month);
      numericYear = Number(year); 
      } else {
      numericDay = Number(month);
      numericMonth = Number(day);
      numericYear = Number(year); 
      }
      

      if (isNaN(numericDay) || isNaN(numericMonth) || isNaN(numericYear)) {
        return false;
      }

      const isValidDay = numericDay >= 1 && numericDay <= 31;
      const isValidMonth = numericMonth >= 1 && numericMonth <= 12;
      const isValidYear = numericYear >= 1000;
      if (!isValidYear) {
        return false;
      }

      // Проверка на високосный год
      const isLeapYear = (numericYear % 4 === 0 && numericYear % 100 !== 0) || (numericYear % 400 === 0);

      // Проверка корректного числа дней в месяце, учитывая високосный год для февраля
      const daysInMonth = [0, 31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const isValidDayInMonth = isValidMonth && numericDay >= 1 && numericDay <= daysInMonth[numericMonth];
      return isValidDay && isValidDayInMonth;
    }
    
    function convertToBritishFormat(str) {
      if (str.includes('/')) {
          // Разделяем по "/"
          const [month, day, year] = str.split('/');

          // Формируем строку в британском формате
          return `${day}-${month}-${year}`;
        }
        // Если "/" отсутствует, значит, это британский формат, возвращаем оригинальную строку
        return str;
      }

    return array.filter((str) => isValidDate(str)).map((str) => convertToBritishFormat(str));
  }

  const resultArray = filterValidDatesAndParse(arr);

  console.log(resultArray); 