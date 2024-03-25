export const renderItems = (data) => {
  const ul = document.createElement("ul");
  data.forEach((character) => {
    const li = `
      <li class="card" itemscope itemtype="Personaje" id=${character.id}>
      
        <div class="card-container "> 
        <img src=${character.imageUrl} alt=${character.name} class="card-img"/>
        
        <img src="https://i.ibb.co/hMkG8x7/92cd183e-5e0b-4277-90c0-2c79d98b6199.jpg" alt="92cd183e-5e0b-4277-90c0-2c79d98b6199" border="0" class="img-barcode"/>
        <div class="card-text">
        <h1 itemprop="name">${character.name}</h1>
          <div itemprop="nenType"><strong class="align-nen">Tipo de Nen:</strong>${character.facts.nenType}</div>
          <div itemprop="ocupation"><strong class="align-ocupation">Ocupación:</strong>${character.facts.ocupation}</div>
          <div itemprop="abilities"><strong class="align-tec">Habilidades:</strong>${character.extraInfo.abilities}</div>
        </div>
        </div>
     
    </li>
    `;
    ul.innerHTML = ul.innerHTML + li; // Inserta cada tarjeta en el contenedor
  });

  return ul;
};