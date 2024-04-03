
# Hunter X Verse
## Overview

[HunterxVerse](https://milenpg.github.io/DEV014-Dataverse/src/), plataforma informativa interactiva, que permite a usuarios objetivos a acceder rápidamente a información detallada y organizada en el complejo universo del anime ["Hunter x Hunter"](https://es.wikipedia.org/wiki/Hunter_%C3%97_Hunter).

En base a las necesidades del usuario objetivo y el deseo de explorar en profundidad los matices y detalles de la serie, se ha desarrollado una APP que permite visualizar 24 personajes principales del anime con características específicas basada en el proceso investigativo siendo como resultado, la creación de un contenido estratégicamente diseñado para enriquecer la experiencia del usuario utilizando elementos de diseño que permiten envolverse en el mundo de Hunter x Hunter.

***

## Dataset design

La definición de los componentes que estructuran la aplicación se diseñó manipulando dos plataformas de inteligencia artificial; [Chat GPT](https://openai.com/chatgpt) y [Gemini](https://gemini.google.com/app). En ellas se utilizó [técnicas de prompting](https://learnprompting.org/es/docs/intro) para lograr un resultado satisfactorio ante las necesidades del usuario.

![prompting](https://i.ibb.co/nzcj8cf/Whats-App-Image-2024-04-02-at-00-57-53.jpg)

Como resultado, para optimizar la experiencia de usuario, se define en base a este research, visualizar únicos 3 componentes críticos de información en cada tarjeta de los personajes. 
Estas descripciones han sido identificados como esenciales para satisfacer las consultas y el interés de los usuarios:

**Nombre del Personaje:**
> Fundamental para identificar al personaje y como punto de partida para cualquier búsqueda de información. 

**Tipo de Nen:**

> Esencial para entender las habilidades únicas de cada personaje y cómo estas influyen en su comportamiento y estrategias de combate.

**Ocupación:**

> Revela su función dentro de la estructura organizacional en el universo de HxH. Proporciona contexto sobre el rol del del personaje en la serie y su relación con otros personajes y eventos clave.


***

## User stories 

Según las necesidades de los usuarios de [HunterxVerse](https://milenpg.github.io/DEV014-Dataverse/src/), y la perspectiva en cuanto su funcionalidad, se detallan 4 historias de usuarios que permiten obtener una explicación a los requerimientos:

 
* [Historia de usuario Nº1](https://docs.google.com/document/d/1v2muuZXOKxrelo2yIPBQc5fILdFWjPp1_wbJk3ecUEI/edit).

* [Historia de usuario Nº2](https://docs.google.com/document/d/1rGLcPoCOBL9trLHuwJTy9MUkD6gSU5zsyIuzszQMWNM/edit#heading=h.8w5y5uhmie2a).

* [Historia de usuario Nº3](https://docs.google.com/document/d/11WLqt38r5q2c5ZTzPR82NmNhJ8B3qL5XQbCQd5V6mF4/edit).

* [Historia de usuario Nº4](https://docs.google.com/document/d/12QlJwmcYs10GeZy_1TwMqsRPbyle6XM3DbcfGcA_gNE/edit).

Este enfoque nos ha permitido capturar y traducir los requerimientos de los usuarios en características funcionales y experiencias intuitivas dentro de la aplicación. La integración de historias de usuario ha resultado en un proceso de desarrollo más enfocado y eficiente, con un producto final alineado con las expectativas de nuestros usuarios.


***
## User interface

El enfoque del desarrollo de la interfaz de usuario para este proyecto se baso principalmente en entregar una APP atractiva y eficaz para los usuarios objetivos, es por ello que se ha tomado la investigación previa como punto de inicio para crear una interfaz entorno al mundo de Hunter x Hunter, utilizando elementos de diseño que mantienen la esencia del anime.

El método de diseño, en primera instancia, se estructura con componentes fundamentales caracteristicos de una interfaz de usuario. Inspirados por elementos distintivos del mundo de Hunter x Hunter se utiliza las [credenciales de cazador](https://i.ibb.co/ZhrKktn/latest-cb-20141224004916-path-prefix-es.png) como fuente primaria de inspiración, proceso que concluye con la concepción del prototipo inicial [prototipo inicial](https://drive.google.com/file/d/1rUd1QeUAItrzfP938grpAzSVZ9C03-T6/view?usp=sharing).

Siguiendo retroalimentación de los usuarios, se implementaron ajustes significativos con el objetivo de optimizar la experiencia de usuario, asegurando que el producto final cumpla con las expectivas no solo de diseño, sino que también de funcionalidad. Producto de estas modificaciones, finalmente se obtuvo el [prototipo de alta fidelidad](https://drive.google.com/file/d/1mZESr8XMN2Drju59XUG7YYiPEWFDhVW_/view?usp=sharing), siendo este el último, utilizado para crear la interfaz final de proyecto.

***
## Web application use
En función a crear una mejor experiencia de usuario, se han definido los siguientes instrucciones de uso para utilizar [HunterxVerse](https://milenpg.github.io/DEV014-Dataverse/src/).

En la pantalla principal, se encuentra una vista general de la aplicación, la cual contendrá:

1. Vista general de la aplicación
2. Acceso a 24 personajes con sus características específicas.
3. Acceso rápido a [estadística computada](https://milenpg.github.io/DEV014-Dataverse/src/#stats-section) del ítem de tipo de nen.
4. Acceso a barra de filtros, en donde se podrá manipular de acuerdo al criterio del usuario:
    * Ordenar por Asc - Desc. 
    * Filtrar en base a la ocupación del personaje dentro del anime. 
    * Filtrar en base al tipo de nen del personaje dentro del anime. 

***

**MilNic &copy; Hunter X Verse**