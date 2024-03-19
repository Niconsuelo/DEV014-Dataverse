export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const cards = document.createElement('ul'); // crea elemento tipo ul
  cards.className = "no-list-style"; //agregar class al ul
  data.forEach(character => {
    const renderCharacter = `
    <li id="${character.id}">
      <div class="card-container">
        <img src="${character.imageUrl}" alt="${character.name}" class="card-img">
        <h3 class="card-title">${character.name}</h3>
        <div class="card-text">${character.description}</div>
      </div>
      </li>
    `;
    //agrega al ul el string creado
    cards.insertAdjacentHTML('beforeend', renderCharacter); //propiedad que crea elemento html dado un string
    

    //container.innerHTML += cardHTML; // Inserta cada tarjeta en el contenedor
  });
  document.body.appendChild(cards);
 

};
