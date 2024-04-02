//import { example, anotherExample } from '../src/dataFunctions.js';
import { filterData, sortData, computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

// hacer pruebas de test aqui

const expectBrigadafantasma = [
  {
    id: "08-chrollo",
    name: "Chrollo Lucilfer",
    shortDescription:
      "Es el líder de la Brigada Fantasma, una pandilla infame de ladrones con recompensas de clase A.",
    description:
      "Chrollo es un líder nato, inteligente, templado y carismático a la vez, estratega, capaz de mantener a la Brigada Fantasma cohesionada a pesar de las personalidades de sus miembros. La Brigada es más importante que su propia vida, 'el grupo está antes que el bienestar del líder'. De sangre fría, un poderoso asesino en masa de naturaleza sádica, que junto con el grupo son capaces de cometer atrocidades, sin remordimiento, como la masacre del clan Kurta, con el solo fin de obtener sus globos oculares escarlata.",
    imageUrl: "https://i.ibb.co/smww8x1/chrollo.jpg",
    facts: {
      nenType: "Especialista",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Skill hunter"],
    },
  },
];

const expectOrderAsc = [
  {
    id: "07-biscuit",
    name: "Biscuit Krueger",
    shortDescription:
      "Es una Cazadora de Tesoros de Dos Estrellas que se enlistó para terminar el videojuego Greed Island.",
    description:
      "Biscuit, o Bisky tiene una personalidad muy astuta. Al principio, ocupa su apariencia de niña para obtener información, obtener lo que quiere, o incluso en combates, en donde actúa de forma inocente e indefensa, para que sus enemigos bajen la guardia. Sin embargo, como profesora de Nen, es muy severa y seria con sus estudiantes. También tiende a tener arranques violentos cuando es dejada fuera de una conversación o alguien la llama 'vieja'. En su forma original, es alta y extremadamente musculosa. Dice que escoge su forma de niña como estrategia, pero la verdad es porque odia su forma original.",
    imageUrl: "https://i.ibb.co/HpHxs39/image.png",
    facts: {
      nenType: "Intensificador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Transformación musculosa"],
    },
  },
  {
    id: "08-chrollo",
    name: "Chrollo Lucilfer",
    shortDescription:
      "Es el líder de la Brigada Fantasma, una pandilla infame de ladrones con recompensas de clase A.",
    description:
      "Chrollo es un líder nato, inteligente, templado y carismático a la vez, estratega, capaz de mantener a la Brigada Fantasma cohesionada a pesar de las personalidades de sus miembros. La Brigada es más importante que su propia vida, 'el grupo está antes que el bienestar del líder'. De sangre fría, un poderoso asesino en masa de naturaleza sádica, que junto con el grupo son capaces de cometer atrocidades, sin remordimiento, como la masacre del clan Kurta, con el solo fin de obtener sus globos oculares escarlata.",
    imageUrl: "https://i.ibb.co/smww8x1/chrollo.jpg",
    facts: {
      nenType: "Especialista",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Skill hunter"],
    },
  },
  {
    id: "05-hisoka",
    name: "Hisoka Morow",
    shortDescription: "Es un Cazador y antiguo miembro de la Brigada Fantasma.",
    description:
      "Su talento y habilidad lo han convertido en alguien realmente confiado de sí mismo. Únicamente mira por sus intereses, haciendo así lo que le place cuando y cuanto quiere, sin seguir ninguna norma o lazo emocional. Pareciera que su gran motivación es la de derrotar oponentes elegidos según sus propios criterios, llegando al punto de esperar pacientemente por obtener un rival que considere digno (Gon, Killua, Kalluto, etc), que supere, o podrá superar en un futuro, sus habilidades. Asimismo, Hisoka se une temporalmente a la Brigada Fantasma, para tener la oportunidad de luchar contra el líder del grupo, Chrollo Lucilfer.",
    imageUrl:
      "https://i.ibb.co/Jv3psNR/58596-Hisoka-Hunter-Hunter-Hisoka-Hunter-Hunter-HD.jpg",
    facts: {
      nenType: "Transmutador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Textura engañosa", "Goma Bungee"],
    },
  },
  {
    id: "03-killua",
    name: "Killua Zoldyck",
    shortDescription:
      "Es el coprotagonista y mejor amigo de Gon Freecss. Es el tercero de los cinco hijos de la familia Zoldyck.",
    description:
      "Killua Zoldyck es el tercer hijo de la conocida familia de asesinos Zoldyck. Para escapar de la herencia-mandato familiar, huye de su hogar y, por pasar el rato, llega al examen de Cazador, donde conoce a Gon. Pese a su buen rendimiento durante la prueba, por determinadas circunstancias, Killua no concluye su examen junto a Gon, mas obtiene su licencia de cazador un año después. Posee una agilidad extraordinaria y una fuerza que lo vuelven una máquina de matar. Aunque trate de esconderlo, siente afecto por Gon, ya que él fue la primera persona en interesarse genuinamente por él.",
    imageUrl: "https://i.ibb.co/bbm5yfw/279aa6ae9fe65c86c5bd04c9443b098c.jpg",
    facts: {
      nenType: "Transmutador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Transformación eléctrica"],
    },
  },
  {
    id: "04-leorio",
    name: "Leorio Paladiknight",
    shortDescription:
      "Es un cazador novato y actualmente es estudiante de medicina. Es uno de los cuatro coprotagonistas.",
    description:
      "Leorio Paladiknight es un joven que aspira convertirse en cazador para poder pagar sus estudios de medicina. Pese a que se desconoce mucho acerca de Leorio, se sabe que una vez perdió un amigo cercano, Pietro, por una enfermedad debilitante. Leorio siente remordimiento por no poder salvar a su amigo, ya que aunque la enfermedad era curable, requería de una cirugía que no era capaz de costear. Así pues, aspira a convertirse en un médico para ayudar a aquellos que no puedan pagarlo. Impulsivo, fuerte y temerario, es un leal y confiable aliado que valora mucho los lazos de amistad.",
    imageUrl: "https://i.ibb.co/nmyhYmr/wp7109874.jpg",
    facts: {
      nenType: "Emisor",
      ocupation: "Cazdor",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Remote punch"],
    },
  },
];

const expectOrderDesc = [
  {
    id: "04-leorio",
    name: "Leorio Paladiknight",
    shortDescription:
      "Es un cazador novato y actualmente es estudiante de medicina. Es uno de los cuatro coprotagonistas.",
    description:
      "Leorio Paladiknight es un joven que aspira convertirse en cazador para poder pagar sus estudios de medicina. Pese a que se desconoce mucho acerca de Leorio, se sabe que una vez perdió un amigo cercano, Pietro, por una enfermedad debilitante. Leorio siente remordimiento por no poder salvar a su amigo, ya que aunque la enfermedad era curable, requería de una cirugía que no era capaz de costear. Así pues, aspira a convertirse en un médico para ayudar a aquellos que no puedan pagarlo. Impulsivo, fuerte y temerario, es un leal y confiable aliado que valora mucho los lazos de amistad.",
    imageUrl: "https://i.ibb.co/nmyhYmr/wp7109874.jpg",
    facts: {
      nenType: "Emisor",
      ocupation: "Cazdor",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Remote punch"],
    },
  },
  {
    id: "03-killua",
    name: "Killua Zoldyck",
    shortDescription:
      "Es el coprotagonista y mejor amigo de Gon Freecss. Es el tercero de los cinco hijos de la familia Zoldyck.",
    description:
      "Killua Zoldyck es el tercer hijo de la conocida familia de asesinos Zoldyck. Para escapar de la herencia-mandato familiar, huye de su hogar y, por pasar el rato, llega al examen de Cazador, donde conoce a Gon. Pese a su buen rendimiento durante la prueba, por determinadas circunstancias, Killua no concluye su examen junto a Gon, mas obtiene su licencia de cazador un año después. Posee una agilidad extraordinaria y una fuerza que lo vuelven una máquina de matar. Aunque trate de esconderlo, siente afecto por Gon, ya que él fue la primera persona en interesarse genuinamente por él.",
    imageUrl: "https://i.ibb.co/bbm5yfw/279aa6ae9fe65c86c5bd04c9443b098c.jpg",
    facts: {
      nenType: "Transmutador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Transformación eléctrica"],
    },
  },
  {
    id: "05-hisoka",
    name: "Hisoka Morow",
    shortDescription: "Es un Cazador y antiguo miembro de la Brigada Fantasma.",
    description:
      "Su talento y habilidad lo han convertido en alguien realmente confiado de sí mismo. Únicamente mira por sus intereses, haciendo así lo que le place cuando y cuanto quiere, sin seguir ninguna norma o lazo emocional. Pareciera que su gran motivación es la de derrotar oponentes elegidos según sus propios criterios, llegando al punto de esperar pacientemente por obtener un rival que considere digno (Gon, Killua, Kalluto, etc), que supere, o podrá superar en un futuro, sus habilidades. Asimismo, Hisoka se une temporalmente a la Brigada Fantasma, para tener la oportunidad de luchar contra el líder del grupo, Chrollo Lucilfer.",
    imageUrl:
      "https://i.ibb.co/Jv3psNR/58596-Hisoka-Hunter-Hunter-Hisoka-Hunter-Hunter-HD.jpg",
    facts: {
      nenType: "Transmutador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Textura engañosa", "Goma Bungee"],
    },
  },
  {
    id: "08-chrollo",
    name: "Chrollo Lucilfer",
    shortDescription:
      "Es el líder de la Brigada Fantasma, una pandilla infame de ladrones con recompensas de clase A.",
    description:
      "Chrollo es un líder nato, inteligente, templado y carismático a la vez, estratega, capaz de mantener a la Brigada Fantasma cohesionada a pesar de las personalidades de sus miembros. La Brigada es más importante que su propia vida, 'el grupo está antes que el bienestar del líder'. De sangre fría, un poderoso asesino en masa de naturaleza sádica, que junto con el grupo son capaces de cometer atrocidades, sin remordimiento, como la masacre del clan Kurta, con el solo fin de obtener sus globos oculares escarlata.",
    imageUrl: "https://i.ibb.co/smww8x1/chrollo.jpg",
    facts: {
      nenType: "Especialista",
      ocupation: "Brigada Fantasma",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Skill hunter"],
    },
  },
  {
    id: "07-biscuit",
    name: "Biscuit Krueger",
    shortDescription:
      "Es una Cazadora de Tesoros de Dos Estrellas que se enlistó para terminar el videojuego Greed Island.",
    description:
      "Biscuit, o Bisky tiene una personalidad muy astuta. Al principio, ocupa su apariencia de niña para obtener información, obtener lo que quiere, o incluso en combates, en donde actúa de forma inocente e indefensa, para que sus enemigos bajen la guardia. Sin embargo, como profesora de Nen, es muy severa y seria con sus estudiantes. También tiende a tener arranques violentos cuando es dejada fuera de una conversación o alguien la llama 'vieja'. En su forma original, es alta y extremadamente musculosa. Dice que escoge su forma de niña como estrategia, pero la verdad es porque odia su forma original.",
    imageUrl: "https://i.ibb.co/HpHxs39/image.png",
    facts: {
      nenType: "Intensificador",
      ocupation: "Cazador",
      species: "Humano",
    },
    extraInfo: {
      abilities: ["Transformación musculosa"],
    },
  },

];

const expectCompute = 
{
  Emisor:1,
  Especialista:1,
  Intensificador:1,
  Transmutador:2,
};
//describe --> describe en que nos basamos para la prueba
describe("filterData", () => {
  // 
  it("Array contiene un personaje con ocupación Brigada Fantasma", () => {
    expect(expectBrigadafantasma).toEqual(
      filterData(fakeData, "ocupation", "Brigada Fantasma")
    );
  });
  it("Array contiene un personaje con nenType Especialista", () => {
    expect(expectBrigadafantasma).toEqual(
      filterData(fakeData, "nenType", "Especialista")
    );
  });
});

describe("sortData", () => {
  it("Se ordena arreglo de objetos de Asc - Desc", () => {
    // espero que lo que me entregue sortData sea igual al expect
    expect(sortData(fakeData, "name", "asc")).toEqual(expectOrderAsc);
  });
  it("Se ordena arreglo de objetos de Desc - Asc", () => {
    expect(sortData(fakeData, "name", "desc")).toEqual(expectOrderDesc);
  });
});

describe("computeStats", () => {
  it("Cuenta tipos de nenType que existen en el arreglo", () => {
    expect(expectCompute).toEqual(computeStats(fakeData));
  });
});