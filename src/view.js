export const renderItems = (data) => {
  const ul = document.createElement("ul");
  data.forEach((character) => {
    const li = `
      <li class ="card-li" itemscope itemtype="Personaje" id=${character.id}>
        <div class="card">
          <div class="imgs-container"> 
            <img src=${character.imageUrl} alt=${character.name} class="card-img">
            <img src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-10/futuro-codigo-de-barras.png" alt="barcode" class="barcode-img">
          </div> 
          <div class="card-text"> 
            <h3 itemprop="name" class="card-tittle">${character.name}</h3>
            <div class="p-box">
              <p1 itemprop="nenType"><span>Tipo de Nen: </span>${character.facts.nenType}</p1>
              <p2 itemprop="ocupation"><span>Ocupación: </span>${character.facts.ocupation}</p2>
              <p3 itemprop="abilities"><span>Habilidades: </span>${character.extraInfo.abilities}</p3>
            </div>  
          </div>
        </div>
      </li>
    `;
    ul.innerHTML = ul.innerHTML + li; // Inserta cada tarjeta en el contenedor
  });
  return ul;
  
};

//DE LN12 A LN15: PREGUNTAR POR CAMBIO DE ETIQUETAS: <p> PARA NOMBRE Y <ul> con <li> PARA ESTRUCTURAR LAS CARACTERISTICAS.
