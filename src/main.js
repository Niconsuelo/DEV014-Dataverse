import { computeStats, filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const searchRoot = document.querySelector("#root");
searchRoot.appendChild(renderItems(data));

const selectfilterOcupation = document.querySelector("#filter-ocupation");
const nenSelect = document.querySelector("#filter-nen");
const sortSelect = document.querySelector("#sort-by");
let result = data;

selectfilterOcupation.addEventListener("change", function (event) {
  //va a tener el selector elegido del primer filtro
  const optionFilter = event.target.value;
  //result contendra el primer filtro
  result = filterData(result, "ocupation", optionFilter); //resultado del primer filtro
  //va a tener el selector del segundo filtro
  const root = document.querySelector("#root");
  root.innerHTML = "";
  searchRoot.appendChild(renderItems(result));
});

nenSelect.addEventListener("change", (e) => {
  result = filterData(result, "nenType", e.target.value);
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(result));
});

sortSelect.addEventListener("change", function (event) {
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
