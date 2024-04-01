import { computeStats, filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const searchRoot = document.querySelector("#root");
searchRoot.appendChild(renderItems(data));

const selectfilterOcupation = document.querySelector("#filter-ocupation");
const nenSelect = document.querySelector("#filter-nen");
const sortSelect = document.querySelector("#sort-by");

selectfilterOcupation.addEventListener("change", function (event) {
  //variable que tendra todos los resultados de los filtros.
  //dataset es un arreglo por ende debe ser un arreglo
  let result = [];
  //va a tener el selector elegido del primer filtro
  const optionFilter = event.target.value;
  //result contendra el primer filtro
  result = filterData(data, "ocupation", optionFilter); //resultado del primer filtro
  //va a tener el selector del segundo filtro
  const nenTypeSelect = nenSelect.value;
  //si el selector tiene informacion, entrará
  if (nenTypeSelect !== "") {
    // result tendra el resultado del segundo filtro, y dentro de este filtro
    // se filtrara el primer resultado result
    result = filterData(result, "nenType", nenTypeSelect); //
  }
  const root = document.querySelector("#root");
  root.innerHTML = "";
  searchRoot.appendChild(renderItems(result));
});

nenSelect.addEventListener("change", (e) => {
  let result = [];
  result = filterData(data, "nenType", e.target.value);
  const ocupationSelect = selectfilterOcupation.value;
  if (ocupationSelect !== "") {
    result = filterData(result, "ocupation", ocupationSelect);
  }
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(result));
});

sortSelect.addEventListener("change", function (event) {
  const sortOrder = event.target.value;
  const originalData = Array.from(data);
  const sortCards = sortData(originalData, "name", sortOrder);
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(sortCards));
});

const cleanerButton = document.querySelector("#cleaner-button");
cleanerButton.addEventListener("click", () => {
  selectfilterOcupation.value = "";
  nenSelect.value = "";
  sortSelect.value = "";
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(data));
});

const statsSection = document.querySelector("#stats-section");
const computeNenStats = computeStats(data);
statsSection.innerHTML = `
<dl class=""> Cantidad de personajes por tipo de Nen: 
  <dt>Intensificación: </dt><dd>${computeNenStats.Intensificador}</dd>
  <dt>Transmutación: </dt><dd>${computeNenStats.Transmutador}</dd>
  <dt>Materialización: </dt><dd>${computeNenStats.Materializador}</dd>
  <dt>Emisión: </dt><dd>${computeNenStats.Emisor}</dd>
  <dt>Manipulación: </dt><dd>${computeNenStats.Manipulador}</dd>
  <dt>Especialización: </dt><dd>${computeNenStats.Especialista}</dd>
</dl>`;
