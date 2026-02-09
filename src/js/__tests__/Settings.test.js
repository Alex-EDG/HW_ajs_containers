import Settings from '../../js/Settings';

test('Создаваемый экземпляр класса обладает набором настроек по умолчанию', () => {
  const settings = new Settings();
  expect(settings.defaultSettings).toMatchObject(new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy']
  ]));
});

test('Создаваемый экземпляр класса не обладает набором настроек пользователя', () => {
  const settings = new Settings();
  expect(settings.userSettings).toMatchObject(new Map());
});

test('Метод set формирует Error при попытке задать недопустимый параметр', () => {
  const settings = new Settings();
  expect(() => settings.set('sound', 'off')).toThrow(new Error('Неизвестный параметр sound'));
});

test('Метод set формирует Error при попытке задать недопустимое значение параметра', () => {
  const settings = new Settings();
  expect(() => settings.set('music', 'classics')).toThrow(
    new Error('Недопустимо для параметра music устанавливать значение classics')
  );
});

test('Метод get возвращает `Map`, полученный путём наложения пользовательских настроек, на default-ные', () => {
  const settings = new Settings();
  settings.set('music', 'off');
  expect(settings.get()).toMatchObject(new Map([
    ['theme', 'dark'],
    ['music', 'off'],
    ['difficulty', 'easy']
  ]));
});
