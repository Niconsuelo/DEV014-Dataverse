import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const searchRoot = document.getElementById("root");
searchRoot.appendChild(renderItems(data));

const selectfilterOcupation = document.getElementById("filter-ocupation");

selectfilterOcupation.addEventListener("change", function (event) {
  const optionFilter = event.target.value;

  const resultSelection = filterData(data, "ocupation", optionFilter);
  const root = document.querySelector("#root");
  root.innerHTML = "";

  searchRoot.appendChild(renderItems(resultSelection));
});

const nenSelect = document.getElementById("filter-nen");
nenSelect.addEventListener("change", (e) => {
  const filterByNen = filterData(data, "nenType", e.target.value);
  searchRoot.innerHTML = "";

  searchRoot.appendChild(renderItems(filterByNen));
});

const sortSelect = document.getElementById("sort-by");
sortSelect.addEventListener("change", function(event) {
  const sortOrder = event.target.value;
  const sortCards = sortData(data, "name", sortOrder);
  searchRoot.innerHTML = "";
  
  searchRoot.appendChild(renderItems(sortCards));
})