import {sortData} from "./dataFunctions.js";
import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//busca elemento cuya id es root
const searchRoot = document.getElementById("root");
// en mi elemento html root, agrega un hijo renderItems(data) que es el ul.
searchRoot.appendChild(renderItems(data));

// obtengo el select que quiero que filtre
const selectfilterOcupation = document.getElementById("filter-ocupation");

// escuchador de eventos al valor, cuando este cambie segun la option del usuarix
selectfilterOcupation.addEventListener("change", function (event) {
  // se debe tener el valor actual del elemento que se selecciono (option)
  const optionFilter = event.target.value;
  //option filter, retornara el resultado del criterio segun la opcion que eligio el usuarix

  const resultSelection = filterData(data, "ocupation", optionFilter);
  //debemos eliminar elementos uno por uno de la interfaz
  const root = document.querySelector("#root");
  // contiene todos los ul
  root.innerHTML = "";

  searchRoot.appendChild(renderItems(resultSelection));
});

const orderCharacter = document.getElementById("sort-by");
// agrego un escuchador de eventos al elemento, cuando cambie segun la opcion del usuario
orderCharacter.addEventListener("change", function (event) {
  //el event apunta al evento, este al selector y al valor de este
  const sortOrder = event.target.value;
  //la data esta referenciada por eso se debe hacer un clon de data y no utilizar directamente una variable que tenga por valor data
  const newData = Array.from(data);
  //ejecutamos funcion que declaramos en datafunction

  const resultORder = sortData(newData, "name", sortOrder);

  // reemplazando el contenido de root por vacio
  const root = document.querySelector("#root");

  root.innerHTML = "";

  searchRoot.appendChild(renderItems(resultORder));
});


//console.log(example, renderItems(data), data);

//renderItems(data);
