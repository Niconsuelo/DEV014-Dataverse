export const renderItems = (data) => {
  const ul = document.createElement("ul");
  data.forEach((character) => {
    const li = `
      <li itemscope itemtype="Personaje" id=${character.id}>
      <div class="card">
        <div class="card-container "> 
        <img src=${character.imageUrl} alt=${character.name} class=" card img">
        

        <div class="card-text">
        <h3 itemprop="name" class="card-tittle">${character.name}</h3>
          <div itemprop="nenType"><strong>Tipo de Nen:</strong>${character.facts.nenType}</div>
          <div itemprop="ocupation"><strong>Ocupación:</strong>${character.facts.ocupation}</div>
          <div itemprop="abilities"><strong>Habilidades:</strong>${character.extraInfo.abilities}</div>
        </div>
        </div>
      </div>
    </li>
    `;
    ul.innerHTML = ul.innerHTML + li; // Inserta cada tarjeta en el contenedor
  });

  return ul;
};
