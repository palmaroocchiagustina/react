Proyecto Final React JS - CoderHouse
CHILL OUT Ropa de diseño
Por Agustina Palmarocchi - Comisión 44970

Aplicación Web Ecommerce desarrollada con React JS, MUI y Firebase.



DEPLOY: https://react-chill-out.web.app

El sitio permite al usuario ver productos y agregar o borrarlos del carrito (cart) y proceder a finalizar la compra (checkout), previamente llenando un formulario de contacto (con validaciones), para luego entregar un comprobante al usuario de la orden de compra (ID generado por Firestore).

El sitio puede navegarse desde su ruta principal, donde se muestran todos los productos disponibles, o por las categorías desginadas segun si los articulos corresponen a indumetaria o calzado. 

Funcionalidades elementales:
Permite seleccionar por categoria los productos, observar el detalle del elemento de interes, para luego i el stock lo permite, agregarlo al carrito.
En el carito (Cart), podemos eliminar por grupo de prendas, vaciar el carrito, agregar mas prendas, si perder lo que ya esta en el, y finalizar la compra.
Productos y Ordenes de Compra se almacenan en base de datos de Firestore con los servicios de Google Firebase, igual que el cambio de stock de cada prenda.
Persistencia de datos para el Cart (almacenado en Local Storage).

Se hizo uso de las siguientes librerías adicionales a las requeridas para el curso:

mui/material: Para el uso general de Material UI.
mui/lab: Para el uso de los loading spinners de MUI.
mui/icons-material: Para el uso de todos los íconos de MUI.
mui/image: Para customizar facilmente imágenes como componentes de MUI.
