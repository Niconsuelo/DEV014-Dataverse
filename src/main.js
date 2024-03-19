//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const searchRoot = document.getElementById('root'); 
searchRoot.appendChild(renderItems(data));

//console.log(example, renderItems(data), data);

renderItems(data);