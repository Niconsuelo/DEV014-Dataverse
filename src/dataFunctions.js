// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
//filtrar conjunto de datos
export function filterData(data, filterby, value) {
  //arreglo de objetos, propiedad por la cual se desea filtrar, valor especifico dentro de la propiedad
  const resultOcupation = data.filter(
    //filter->toma parametros individual de data(character)
    //compara estrictamente caracterfactfilterby
    (character) => character.facts[filterby] === value
  );
  return resultOcupation;
}
//declaramos funcion que posee los 3 parametros
export function sortData(data, sortby, value) {
  //condicion que permite definir si el select elegido tiene el mismo value (asc)
  if (value === "asc") {
    return data.sort((a, b) => a[sortby].localeCompare(b[sortby]));
  }
  //condicion que permite definir si el select elegido tiene el mismo value (desc)

  if (value === "desc") {
    return data.sort((a, b) => b[sortby].localeCompare(a[sortby]));
  }
}

export const anotherExample = () => {
  return [];
};
