// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export function filterOcupation(data, value) {
  const resultOcupation = data.filter(
    (personaje) => personaje.facts.ocupation === value
  );

  console.log(resultOcupation);
  return resultOcupation;
}

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};
