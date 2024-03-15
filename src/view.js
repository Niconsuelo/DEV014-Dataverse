export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const body = document.body;
  const ul = document.createElement("ul");
  const h1 = document.createElement("h1"); // <h1></h1>
  const texto = document.createTextNode("Hola Bella");
  h1.appendChild(texto); // al h1 le agrego un hijo texto  // <h1>Hola Bella</h1>

  body.appendChild(h1);

  body.appendChild(ul);

  data.forEach((element) => {
    console.log(element.extraInfo.abilities); 
  });

  console.log(body);
  return ul;
};
