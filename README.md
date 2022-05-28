## Comportamiento esperado:

- Los datos del formulario deben ser enviados a la API, la tabla de la derecha debe recibir los datos de la misma al cargarse el sitio
- Luego de cada insercion exitosa, se debe ingresar los datos a la tabla, sin necesidad de utilizar el endpoint GET
- El boton reset debe limpiar los campos del formulario
- El boton save debe enviar los datos a la API
- El número de seguro social (ssn), es único, y no puede repetirse en la lista.
- En caso de un intento de inserción erroneo, se debe informar dicho error
- Al pasar 2 minutos de inactividad, se debe refrescar la tabla automáticamente

Para ejecutar el Front end:
-clonar este repositorio
-instalar dependencias (npm i)
-npm run dev

Para ejecutar back end:
-Dirigirse a https://github.com/newcombin/devskillsadv clonar repositorio y seguir instrucciones
