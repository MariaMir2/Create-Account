#Create Account

Este simulador se basa en la creación de una nueva cuenta.

Para ello, hay que introducir los parámetros de nombre, email, clave y confirme su clave, que se evaluarán mediante las siguientes condiciones:
- Los campos son obligatorios, por lo que si alguno no se introduce alguno de los campos aparecerá un mensaje de error.
- El campo Nombre deberá ser de tipo Texto, cualquier carácter numérico no será admitido.
- El campo Email deberá ser de tipo “email”. Además, se ha investigado en internet cómo hacer una validación de correo electrónico mediante expresiones regulares. De forma que si el formato del email no es válido salga un mensaje con el correspondiente fallo.
- El campo Clave deberá tener como máximo 8 caracteres.
- El valor introducido en los campos Clave y Confirme su clave deberán ser idénticos o se obtendrá un error.
- Los casos en los que las validaciones sean correctas (color verde) y para los casos en las que no lo sean (color rojo) deberá salir el correspondiente fallo, indicándolo también con la indicación de iconos y colores.

Finalmente, si todos los campos están correctamente validados, al pulsar sobre el botón ENVIAR deberá salir un alert por pantalla informando de que la inscripción ha sido correcta.
