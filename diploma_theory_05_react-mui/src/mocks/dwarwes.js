const torinTroop = [
  {
    name: 'Balin',
    weapon: 'Axe',
    age: 324
  },
  {
    name: 'Dvalin',
    weapon: 'Axe, Axe',
    age: 299
  },
  {
    name: 'Nori',
    weapon: 'Hammer',
    age: 387
  }
];

export const requestDwarwesList = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve(torinTroop), 1500);
  });
}