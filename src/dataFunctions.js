// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export function filterOcupation(data, filterby, value) {
  const resultOcupation = data.filter(
    (character) => character.facts[filterby] === value
  );

  return resultOcupation;
}

export const anotherExample = () => {
  return [];
};
