# Nombre de la App: Mantis Producciones
##Primera Entrega Proyecto Final de React Js
##Alumno: Micael Fiordelmondo
##Profesor: Luciano Calderon
##Tutor: Mauricio Monteros
##Camada: 19790


## Proyecto e-commerce inspirado en un emprendimiento personal 
* El proyecto se desarrolla dentro del marco de aprendizaje del curso de React Js en la plataforma Coderhouse.
* Pretende la creación de un e-commerce en el que se pueda navegar para encontrar, filtrar y categorizar productos para luego ser incluidos en un carrito de compras.
* Para fines de aprendizaje, de momento los productos del e-commerse son mocks generados por una api no pertinente a la intención final.

## Pre-requisitos
* La aplicación se levanta de manera local utilizando el lenguaje JavaScript y JSX mediante la librería ReactJs: 
* La misma es descargada desde su fuente original: https://es.reactjs.org/
* El estilo esta facilitado por la librería Tailwind CSS 2.2.17. Accesible desde: https://tailwindcss.com/. Para este, se precisa también la dependencia Craco 6.4.0
* Las otras dependencias necesarias a instalar que no vienen por defecto en la instalación de React son:
* React Router Dom 5.0.2
* Babel 5.0.2

## Instalaciónes
A traves de NodeJs > node: '16.13.0':

* Tailwind CSS > "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.2.17"
* Craco 6.4.0 > "@craco/craco": "^6.4.0"
* React Router Dom > "react-router-dom" :    "^5.0.2"
* Babel 5.0.2 > "@babel/highlight": "^7.16.0"
* React 17.0.2 > "react": "^17.0.2"

## Funcionamiento
Tras levantar de manera local la aplicación con > npm start

### BrowserRouter, Switch, Route en App.js
Se crean las rutas de navegación en App.js para recorrer los componentes y sus contenedores, encontrados en la carpeta src en sus carpetas components y containers.
#### NavBar.js
Se monta de manera permanente en App.js el componente NavBar.js mediante el cual tendremos acceso a la navegación hacia las diferentes rutas.

### Componentes y contenedores

#### Contenedores

##### GetItem
* src/services/getItem.js
A traves de diferentes promesas mediante el metodo fetch se establece la petición a la Api que nos devuelve los datos que precisamos

##### ItemDetailContainer 
##### ItemListContainer
* src/containers/ItemDetailContainer.js
* src/containers/ItemListContainer.js

Mediante las funciones de getItem manejamos en ItemListContainer y ItemDetailContainer la data traida desde la Api.
Se incorpora el uso de los hooks useEffects, useParams y useState que nos permitiran generar estados y párametros dinámicos para que a través de props realizemos nuevos montajes en los componentes.
Esto nos permite filtrar la data de la Api, en este caso mediante categorías y ids.


#### Componentes

##### ItemList
* src/components/itemList/ItemList.js
Es el componente que figura en la ruta de entrada de la App en la que se muestra cada item de la Api a traves de un map que trabaja con la prop del contenedor ItemListContainer.
Devuelve el componente Item.js junto a una prop

##### Item
* src/components/item/Item.js
Se da la funcion presentacional de cada Item del map de ItemList
Se establece por cada item el uso de NavLink para acceder al detalle del item

##### ItemDetail
* src/components/itemDetail/ItemDetail.js
Se muestra el item con mayor detalle en una nueva ruta para cada item.
En el se encuentra un NavLink para acceder al carrito

##### CartWidget
* src/components/cartWidget/CartWidget.js
Se puede acceder cuando se agrega un item al carrito desde ItemDetail o desde NavBar, fijado en la parte superior de la App. 
Este componente incluirá avanzado el proyecto, los items agregados por el usuario.
En el se encuentra el componente ItemCount

##### ItemCount
* src/components/itemCount/ItemCount.js
El componente ItemCount maneja la cantidad de unidades elegidas por item para luego ser compradas

###Assets
En la carpeta src/assets se encuentran las imágenes usadas de manera local

###Autor
Micael Fiordelmondo
