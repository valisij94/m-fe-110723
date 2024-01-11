const dwarwesLocations = [
  { name: 'Erebor', king: 'Tror'},
  { name: 'Moria', king: 'Balin'},
  { name: 'IronHills', king: 'Dain'}
];

const dwarwesLocationsCopy = [ ...dwarwesLocations ];
console.log(dwarwesLocationsCopy);

// dwarwesLocationsCopy[0].name = 'Angmar';
// console.log(dwarwesLocations[0])

/*
2. Получить из массива `dwarwesLocations` массив `dwarwesLocationsWithPopulation` - он будет содержать копии объектов из оригинального массива, и при этом каждому новому объекту добавим свойство `population`, со значением 30000. При этом, объекты из оригинального массива не изменяем!
*/

const dwarwesLocationsWithPopulation = dwarwesLocations.map( location => {
  return {
    ...location,
    population: 30000
  }
});
console.log(dwarwesLocationsWithPopulation);
dwarwesLocationsWithPopulation[0].name = 'Mordor';
console.log('Old array', dwarwesLocations[0])
console.log('New array', dwarwesLocationsWithPopulation[0])

const dwarf = {
  name: 'Torin',
  surname: 'Oakshield',
  race: 'Dwarwes'
};

const torinsArmour = {
  helmet: 'Steel helmet',
  armour: 'Orichalk armour',
  shield: 'Oak shield'
};

// 3 copy of dwarf
const dwarfCopy = { ...dwarf };
// 4 armed dwarf
const armDwarf = { ...dwarf, ...torinsArmour };

/*
5. С использованием спред-оператора, создать объект `greedyTorin`, который будет содержать все свойства объекта `dwarf`, и новое свойство - `isGreedy: true`.
6. С использованием спред-оператора, создать объект `smartTorin`, который будет содержать все свойства объекта `greedyTorin`, но свойство `isGreedy` нужно переопределить как `false`.
*/

const greedyTorin = {
  ...dwarf,
  isGreedy: true
};

const smartTorin = {
  ...greedyTorin,
  isGreedy: false,
}

console.log(greedyTorin, smartTorin)

const armedDwarf = {
  name: 'Dain',
  surname: 'Ironfoot',
  race: 'Dwarwes',
  weapons: ['hammer', 'axe', 'knife']
};

/* 7. Создать копию объекта `armedDwarf`. Обратите внимание на свойство `weapons` - это массив. Нужно также создать и его копию (т.е. развернуть и его).
*/

const armedDwarfCopy = {
  ...armedDwarf,
  weapons: [ ...armedDwarf.weapons ]
}

armedDwarfCopy.weapons[0] = 'Spear';
console.log(armedDwarf, armedDwarfCopy)


const dwarfWarrior = {
  name: 'Dvalin',
  surname: '',
  race: 'Dwarwes',
  weapons: ['axe', 'axe', 'hammer', 'knife'],
  armours: {
    helmet: null,
    armour: 'Leather armour',
    shield: 'Iron shield'
  }
};

/*
8. Теперь поработаем с деструктуризацией. С использованием деструктуризации, объявить переменные `name`, `armours` и записать в них соответствующие свойства объекта `dwarfWarrior`. */
const { name, armours } = dwarfWarrior;
console.log(name, armours);

/*
9. Сделать алиасы - с помощью деструктуризации, записать в переменные `aliasName`, `aliasArmours` значения свойств `name`, `armours` объекта `dwarfWarrior`.
*/

const { name: aliasName, armours: aliasArmours } = dwarfWarrior;
console.log(aliasName, aliasArmours);

/*
10. С использованием деструктуризации, записать в переменную `secondaryWeapon` второй элемент массива `weapons` объекта `dwarfWarrior`.
*/
const [, secondaryWeapon] = dwarfWarrior.weapons;
console.log(secondaryWeapon)

const { weapons : [, _secondaryWeapon] } = dwarfWarrior;
console.log(_secondaryWeapon);

/*
11. Немного усложним. С использованием деструктуризации, записать в переменную `shield` значение свойства `dwarfWarrior.armours.shield`.
*/
const { armours: {shield} } = dwarfWarrior;
console.log('Dwarf shiled: ', shield);

function forgeryOfMoria(weaponType = 'axe', weaponMaterial = 'steel') {
  return {
    type: weaponType,
    material: weaponMaterial,
    weigh: Math.random()
  }
}

function upgradeWeapon( { type, material, ...rest} ) {
  console.log(type);
  console.log(material);
  console.log(rest)
}

const dwarfSage = {
  name: 'Balin',
  surname: '',
  race: 'Dwarwes',
  weapons: ['hammer'],
  skills: {
    magic: null,
    archery: 3
  }
}