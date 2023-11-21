# Tienda MotoShop

Este es un proyecto de ecommerce desarrollado en React, enfocado en la venta de accesorios e indumentaria para motos. La aplicación permite a los usuarios explorar una amplia gama de productos relacionados con el mundo de las motocicletas y realizar compras en línea. La información de productos y las órdenes de compra se gestionan a través de Firebase.

## Tecnologías Utilizadas

- Vite
- React
- React Router
- Firebase

## Funcionalidades

- Explorar una lista de accesorios e indumentaria para motos disponibles.
- Agregar productos seleccionados al carrito de compras.
- Visualizar y gestionar el contenido del carrito de compras.
- Realizar órdenes de compra.

## Instalación

Para ejecutar la aplicación en tu máquina local, sigue estos pasos:

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm run dev` para iniciar la aplicación.
5. Abre tu navegador y navega a [http://localhost:5173](http://localhost:5173) para explorar la aplicación.

## Configuración de Firebase

Para integrar Firebase en la aplicación, sigue estos pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solo a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo `.env` de tu proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.