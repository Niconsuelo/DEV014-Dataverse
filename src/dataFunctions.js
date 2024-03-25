// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export function filterOcupation(data, value) {
  const resultOcupation = data.filter(
    (character) => character.facts.ocupation === value
  );

  return resultOcupation;
}

export const anotherExample = () => {
  return [];
};
