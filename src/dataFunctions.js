// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
//filtrar conjunto de datos
export function filterOcupation(data, filterby, value) {
  //arreglo de objetos, propiedad por la cual se desea filtrar, valor especifico dentro de la propiedad
  const resultOcupation = data.filter(
    //filter->toma parametros individual de data(character)
    //compara estrictamente caracterfactfilterby
    (character) => character.facts[filterby] === value

  );
  return resultOcupation;
}


export const anotherExample = () => {
  return [];
};
