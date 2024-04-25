Descripción de los ejercicios a realizar
1) Crear un script que genera un reporte de ficheros usando la API de
Google Drive
● Un cliente necesita sacar un reporte en formato CSV o similar de los documentos de
tipo PDF, que tiene almacenados en la carpeta 99 - SD Examen Candidatos
Evenbytes
○ El ID de la carpeta es 1dK-KbLt9eVC7jw_LXpNdyq6NIHV1jvqu
○ El serviceaccount.json tiene acceso de lectura a la carpeta.
● El CSV deberá de contener la siguiente información (Ejemplo del fichero CSV
esperado como salida)
○ Título del documento
○ Fecha de creación
○ Fecha de última modificación
○ Nombre del creador (owner) del documento
○ Hipervínculo para acceder al documento
● Despliegue:
○ Código desarrollado preferiblemente en Nodejs.
■ Si no conoces Nodejs y quieres intentarlo en otro lenguaje, también
puedes.
○ No es necesario desplegar la solución a ningún entorno
○ Únicamente será necesario lanzarlo localmente desde VS Code, línea de
comandos o similar.
● Ayuda y referencias para el ejercicio:
○ Tendrás que utilizar API de Google Drive para sacar el listado de ficheros de
la carpeta 99 - SD Examen Candidatos Evenbytes
■ Si no conoces la API de Google Drive, solo necesitas hacer una
búsqueda.
■ Puedes probar la API Google Drive desde aquí
○ Tendrás que autenticar la llamada a la API de Google Drive con el service
account serviceaccount.json tiene acceso de lectura a la carpeta.
■ NO tienes que crear un service account, ni ningún proyecto de GCP,
únicamente usa el fichero serviceaccount.json en tus llamadas a la
API.
■ Como usar Service account en Nodejs
