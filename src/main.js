import { filterOcupation } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";
import { filterNentype } from "./dataFunctions.js";

const searchRoot = document.getElementById("root");
searchRoot.appendChild(renderItems(data));

const selectfilterOcupation = document.getElementById("filter-ocupation");

selectfilterOcupation.addEventListener("change", function () {
  // change se dispara cuando se selecciona una nueva opcion

  const optionFilter = this.value; //imprimira el valor asociado a la opcion que eligio el usuario
  const resultSelection = filterOcupation(data, optionFilter); //selecciona la opcion

  const ulList = document.querySelectorAll("ul");

  ulList.forEach((lista) => {
    lista.remove();
  });
  searchRoot.appendChild(renderItems(resultSelection));
});

const selectfilterNentype = document.getElementById("filter-nen");

selectfilterNentype.addEventListener("change", function () {
  const optionfilterNentype = this.value;
  const resultNenType = filterNentype(data, optionfilterNentype);

  const ulList = document.querySelectorAll("ul");

  ulList.forEach((lista) => {
    lista.remove();
  });
  searchRoot.appendChild(renderItems(resultNenType));
});
