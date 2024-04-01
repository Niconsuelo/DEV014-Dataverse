import { computeStats, filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const searchRoot = document.querySelector("#root");
searchRoot.appendChild(renderItems(data));

const selectfilterOcupation = document.querySelector("#filter-ocupation");
const nenSelect = document.querySelector("#filter-nen");
const sortSelect = document.querySelector("#sort-by");

selectfilterOcupation.addEventListener("change", function (event) {
  let result = [];
  const optionFilter = event.target.value;
  result = filterData(data, "ocupation", optionFilter);
  const nenTypeSelect = nenSelect.value;

  if (nenTypeSelect !== "") {
    result = filterData(result, "nenType", nenTypeSelect);
  }
  const sortSelection = sortSelect.value;
  if (sortSelection !== "") {
    result = sortData(result, "name", sortSelection);
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
  const sortSelection = sortSelect.value;
  if (sortSelection !== "") {
    result = sortData(result, "name", sortSelection);
  }
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(result));
});

sortSelect.addEventListener("change", function (event) {
  let result = data;
  const optionFilter = selectfilterOcupation.value;
  if (optionFilter !== "") {
    result = filterData(data, "ocupation", optionFilter);
  }
  const nenTypeSelect = nenSelect.value;
  if (nenTypeSelect !== "") {
    result = filterData(result, "nenType", nenTypeSelect);
  }

  const sortOrder = event.target.value;
  const originalData = Array.from(result); 
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
