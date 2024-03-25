// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export function filterOcupation(data, value) {
  const resultOcupation = data.filter(
    (character) => character.facts.ocupation === value
  );

  console.log(resultOcupation);
  return resultOcupation;
}

export function filterNentype(data, value) {
  const resultNentype = data.filter(
    (nenType) => nenType.facts.nenType === value
  );

  return resultNentype;
}

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};
