import { computeStats, filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const searchRoot = document.querySelector("#root");
searchRoot.appendChild(renderItems(data));

const selectfilterOcupation = document.querySelector("#filter-ocupation");

selectfilterOcupation.addEventListener("change", function (event) {
  const optionFilter = event.target.value;
  const resultSelection = filterData(data, "ocupation", optionFilter);
  const root = document.querySelector("#root");
  root.innerHTML = "";
  searchRoot.appendChild(renderItems(resultSelection));
});

const nenSelect = document.querySelector("#filter-nen");
nenSelect.addEventListener("change", (e) => {
  const filterByNen = filterData(data, "nenType", e.target.value);
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(filterByNen));
});

const sortSelect = document.querySelector("#sort-by");
sortSelect.addEventListener("change", function(event) {
  const sortOrder = event.target.value;
  const originalData = Array.from(data);
  const sortCards = sortData(originalData, "name", sortOrder);
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(sortCards));
});

const cleanerButton = document.querySelector('#cleaner-button');
cleanerButton.addEventListener("click", () => {
  selectfilterOcupation.value = "";
  nenSelect.value = "";
  sortSelect.value = "";
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(data));
});

const statsSection = document.querySelector("#stats-section");
const computeNenStats= computeStats(data);
statsSection.innerHTML = `
<dl class=""> Cantidad de personajes por tipo de Nen: 
  <dt>Intensificación: </dt><dd>${computeNenStats.Intensificador}</dd>
  <dt>Transmutación: </dt><dd>${computeNenStats.Transmutador}</dd>
  <dt>Materialización: </dt><dd>${computeNenStats.Materializador}</dd>
  <dt>Emisión: </dt><dd>${computeNenStats.Emisor}</dd>
  <dt>Manipulación: </dt><dd>${computeNenStats.Manipulador}</dd>
  <dt>Especialización: </dt><dd>${computeNenStats.Especialista}</dd>
</dl>`;