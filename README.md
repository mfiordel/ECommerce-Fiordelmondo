# Nombre de la App: Mantis Producciones
### Entrega Proyecto Final de React Js
### Alumno: Micael Fiordelmondo
### Profesor: Conrado Lanusse
### Tutor: Mauricio Monteros
### Camada: 19790


## Proyecto e-commerce inspirado en un emprendimiento personal 
* El proyecto se desarrolla dentro del marco de aprendizaje del curso de React Js en la plataforma Coderhouse.
* Pretende la creación de la simulación de un e-commerce en el que se pueda navegar para encontrar, filtrar y categorizar productos para luego ser incluidos en un carrito de compras en el que se podrá generar una orden mediante Firestore como base de datos.

### Deploy
La experiencia con la App se puede testear en el siguiente deploy
https://e-commerce-react19760-coderhouse-fiordelmondo.netlify.app/

## Pre-requisitos
* La aplicación se levanta de manera local utilizando el lenguaje JavaScript y JSX mediante la librería ReactJs: 
* La misma es descargada desde su fuente original: https://es.reactjs.org/
* El estilo esta facilitado por la librería Tailwind CSS 2.2.17. Accesible desde: https://tailwindcss.com/. Para este, se precisa también la dependencia Craco 6.4.0 y HeroIcons para los iconos
* Para prevenir el uso de alerts se incluye la librería SweetAlert2
* Las otras dependencias necesarias a instalar que no vienen por defecto en la instalación de React son:
* React Router Dom 6.2.1
* Babel 5.0.2

## Instalaciónes
A traves de NodeJs > node: '16.13.0':

* Tailwind CSS > "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.2.17"
* HeroIcons > "@heroicons/react": "^1.0.5",
* Craco 6.4.0 > "@craco/craco": "^6.4.0"
* React Router Dom > "react-router-dom" :    "^6.2.1"
* Babel 5.0.2 > "@babel/highlight": "^7.16.0"
* React 17.0.2 > "react": "^17.0.2"
* SweetAlert2 > "^11.3.0"
* SweetAlert2 4.2.0 > "sweetalert2-react-content" > "^4.2.0"

## Funcionamiento
Tras levantar de manera local la aplicación con > npm start

### BrowserRouter as Router, Routes, Route en App.js
Se crean las rutas de navegación en App.js para recorrer los componentes y sus contenedores, encontrados en la carpeta src en sus carpetas components y containers nutridas por los context UserContext y CartContext.
#### NavBar.js
Se monta de manera permanente en App.js el componente NavBar.js mediante el cual tendremos acceso a la navegación hacia las diferentes rutas y a la autenticación del usuario.

### firebase/config
Configuración para establecer contacto con la base de datos de Firebase con la que se trabajará.

### Componentes presentacionales y componentes contenedores

#### Contenedores

##### ItemDetailContainer 
##### ItemListContainer
* src/containers/ItemDetailContainer.js
* src/containers/ItemListContainer.js

Mediante los métodos de Firebase traemos en ItemListContainer y ItemDetailContainer la data de Firestore mediante los métodos getDoc y getDocs.
Se incorpora el uso de los hooks useEffects, useParams y useState que nos permitiran generar estados y párametros dinámicos para que a través de props realizemos nuevos montajes en los componentes.
Esto nos permite filtrar la data, en este caso mediante categorías y ids.


#### Componentes

##### ItemList
* src/components/itemList/ItemList.js
Su retorno es el componente que muestra cada item de la Api a traves de un map que trabaja con la prop del contenedor ItemListContainer.
Devuelve el componente presentacional Item.js junto a una prop

##### Item
* src/components/item/Item.js
Se da la funcion presentacional de cada Item del map de ItemList
Se establece por cada item el uso de NavLink para acceder al detalle del item con una ruta que varía por Params

##### ItemDetail
* src/components/itemDetail/ItemDetail.js
Se muestra el item con mayor detalle en una nueva ruta para cada item.
Se trae la funcion addCart desde el CartContext para añadir el producto al carrito con todos sus datos
La definición de la cantidad de items que se añadirán al carrito estan regulados por el componente ItemCount

##### ItemCount
* src/components/itemCount/ItemCount.js
Primer contador regulador de las cantidades permitidas para elegir de cada producto, basado en el stock del producto que se este presentando en ItemDetail.

##### CartWidget
* src/components/cartWidget/CartWidget.js
Se puede acceder cuando se agrega un item al carrito desde ItemDetail o desde NavBar, fijado en la parte superior de la App. 
Este componente presenta la longitud del carrito basado en los items agregados por el usuario.
Al estado del carrito se accede mediante useContext, en su funcion cart: estado que guarda cada item agregado.
Mediante su clickeo se accede al componente CartView

##### CartView y CartItem
* src/components/cartView/CartView.js
* src/components/cartView/CartItem.js

CartView como componente es la vista del carrito, genera un mapeo que representa sus items mediante CartItem, del cual se pueden ver tanto los detalles de cada producto sumado al carrito como otro contador para terminar de definir las cantidades.
El uso del contexto permite ver mediante una de sus funciones el precio total de la compra
Un NavLink nos da acceso a la continuación de la compra hacia el componente Checkout

##### Checkout
* src/components/checkout/Checkout.js
Formulario para los datos de usuario.
El stock es válidado por segunda vez pero en este caso trabajando con la data de Firestore para luego modificar sus valores.
Se suma entre los métodos de Firebase el método batch para empaquetar los updates y realizarlo de manera condicional,
junto al método addDocs para generar en la base de datos una colección para las ordenes
El usuario obtiene el id del nuevo documento generado en Firebase para la orden que acaba de realizar.

#### UserContext
* src/context/UserContext.js
Contiene promesas mediante métodos de Firebase para la autenticacion de usuarios que permitirá registrar o loggearse a su perfil.
En el componente NavBar se encuentran los componentes ModalLogin y ModalSignup para cada caso (registrarse o loggearse)
Una vez loggeado el usuario tendra acceso a RestrictedRoute y Logged, por el cual podrá visualizar la ruta order con el componente Order.

##### RestrictedRoute & Logged
* src/components/restrictedRoute/RestrictedRoute.js
* src/components/logged/Logged.js

RestrictedRoute como componente valida si hay algun usuario loggeado desde el UserContext. De ser verdadero retorna a su children Logged.
Logged retorna al componente Order

##### Order
* src/components/order/Order.js
A traves de promesas con la base de datos trae los documentos de la colección de ordenes que coincidan en el email registrado con el email loggeado actualmente
Mediante mapeos desestructura los documentos para acceder a su información.

##### Loader
En la navegación por la App se utiliza el componente Loader para las transiciones de las promesas hasta que se carguen los datos.

### Assets
En la carpeta src/assets se encuentran la imágen del logo usada de manera local

### Autor
Micael Fiordelmondo
