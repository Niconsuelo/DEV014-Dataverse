import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


// hacer pruebas de test aqui

console.log(fakeData);

// describe('example', () => {

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

const obj1 = { ocupation: 'cazador' };
const obj2 = { ocupation: 'cazador' };


describe('compararObjetos', () => {

  it('deberia...', () => {
    expect(obj1).toEqual(obj2);
  });
});
