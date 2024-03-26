import { filterOcupation } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//busca elemento cuya id es root
const searchRoot = document.getElementById("root");
// en mi elemento html root, agrega un hijo renderItems(data) que es el ul.
searchRoot.appendChild(renderItems(data));

// obtengo el select que quiero que filtre
const selectfilterOcupation = document.getElementById("filter-ocupation");

// escuchador de eventos al valor, cuando este cambie segun la option del usuarix
selectfilterOcupation.addEventListener("change", function () {
  // se debe tener el valor actual del elemento que se selecciono (option)
  const optionFilter = this.value;
  //option filter, retornara el resultado del criterio segun la opcion que eligio el usuarix

  const resultSelection = filterOcupation(data, "ocupation", optionFilter);
  //debemos eliminar elementos uno por uno de la interfaz
  const ulList = document.querySelectorAll("ul");
  // contiene todos los ul
  ulList.forEach((lista) => {
    //eliminar elementos del listado de ul
    lista.remove();
  });
  searchRoot.appendChild(renderItems(resultSelection));
});

//console.log(example, renderItems(data), data);

//renderItems(data);
