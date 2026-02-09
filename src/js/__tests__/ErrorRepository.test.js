import ErrorRepository from '../../js/ErrorRepository';

const dataList = [
  ['8435', 'Неверные данные для запроса'],
  [7689, 'Ошибка адреса запроса'],
  ['234', 'Unknown error']
];

test.each(dataList)('Check error description for errorcode=%s', (code, expected) => {

  const error = new ErrorRepository();
  error.errorsList.set('8435', 'Неверные данные для запроса');
  error.errorsList.set(7689, 'Ошибка адреса запроса');
  expect(error.translate(code)).toBe(expected);
});
