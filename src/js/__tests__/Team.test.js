import Team from '../../js/Team';
import Character from '../../js/Character';

test('Метод add добавляет объект типа Character в коллекцию', () => {
  const character = new Character('Archer', 2);
  const team = new Team();
  team.add(character);
  expect(team.members).toMatchObject(new Set([{ name: 'Archer', level: 2 }]));
});

test('Метод add не добавляет объект в коллекцию если он уже присутствует', () => {
  const character = new Character('Archer', 2);
  const team = new Team();
  try {
    team.add(character);
    team.add(character);
  } catch {
    expect(team.members).toMatchObject(new Set([{ name: 'Archer', level: 2 }]));
  };
});

test('Метод add формирует Error если объект уже присутствует в коллекции', () => {
  const character = new Character('Archer', 2);
  const team = new Team();
  team.add(character);
  expect(() => team.add(character)).toThrow(new Error ('Не возможно добавить, объект уже присутствует в команде'));
});

test('Метод addAll добавляет объекты в коллекцию', () => {
  const character1 = new Character('Archer', 2);
  const character2 = new Character('Swordsman', 3);
  const team = new Team();
  team.addAll(character1, character2);
  expect(team.members).toMatchObject(new Set([
    { name: 'Archer', level: 2 },
    { name: 'Swordsman', level: 3 }
  ]));
});

test('Метод toArray конвертирует коллекцию в массив', () => {
  const character1 = new Character('Archer', 2);
  const character2 = new Character('Swordsman', 3);
  const team = new Team();
  team.addAll(character1, character2);
  expect(team.toArray()).toMatchObject([
    { name: 'Archer', level: 2 },
    { name: 'Swordsman', level: 3 }
  ]);
});
