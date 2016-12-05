/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-main/main.nls.es",{"vs/base/common/json":["Símbolo no válido","Formato de número no válido","Se esperaba el nombre de la propiedad","Se esperaba un valor","Se esperaban dos puntos","Se esperaba una coma","Se esperaba una llave de cierre","Se esperaba un corchete de cierre","Se esperaba un fin de archivo"],"vs/base/common/keybinding":["Windows","Control","Mayús","Alt","Comando","Windows","Ctrl","Mayús","Alt","Cmd","Windows"],"vs/base/common/severity":["Error","Advertencia","Información"],"vs/code/electron-main/main":["Nueva ventana","Abre una ventana nueva.","{0} {1}"],"vs/code/electron-main/menus":["&&Archivo","&&Editar","&&Ver","&&Ir","Ventana","&&Ayuda","&&Nueva ventana","Acerca de {0}","Ocultar {0}","Ocultar otros","Mostrar todo","Salir de {0}","&&Nuevo archivo","&&Nuevo archivo","&&Abrir...","Abrir &&carpeta...","&&Abrir archivo...","&&Abrir archivo...","Abrir &&reciente","&&Guardar","Guardar &&como...","Guardar t&&odo","Guardado automático","&&Nueva ventana","Revertir a&&rchivo","Cerrar &&ventana","Cerrar &&carpeta","Cerrar &&editor","S&&alir","&&Configuración de usuario","&&Configuración del área de trabajo","&&Métodos abreviados de teclado","&&Fragmentos de código del usuario","&&Tema de color","Tema de &&iconos de archivo","&&Preferencias","&&Volver a abrir el editor cerrado","&&Borrar elementos","&&Deshacer","&&Rehacer","&&Cortar","C&&opiar","&&Pegar","&&Seleccionar todo","&&Deshacer","&&Rehacer","&&Cortar","C&&opiar","&&Pegar","&&Seleccionar todo","&&Buscar","&&Reemplazar","Buscar &&en archivos","Reemplazar &&en archivos","&&Explorador","&&Buscar","&&GIT","&&Depurar","E&&xtensiones","&&Salida","Consola de de&&puración","&&Terminal integrado","&&Problemas","&&Paleta de comandos...","Alternar &&pantalla completa","Alternar &&barra de menús","Dividir &&editor","Alternar diseño del grupo de &&editores","&&Alternar barra lateral","&&Mover barra lateral a la derecha","&&Mover barra lateral a la izquierda","Alternar &&panel","&&Ocultar barra de estado","&&Mostrar barra de estado","Alternar &&ajuste automático de línea","Alternar &&representación de espacio en blanco","Alternar caracteres de control &&","&&Ampliar","Redu&&cir","Restablecer zoom","&&Atrás","&&Reenviar","&&Editor siguiente","&&Editor anterior","&&Editor siguiente usado del grupo","&&Editor anterior usado del grupo","Cambiar &&editor","&&Primer grupo","&&Segundo grupo","&&Tercer grupo","&&Grupo siguiente","&&Grupo anterior","Cambiar &&grupo","Ir a &&archivo...","Ir al &&símbolo en el archivo...","Ir al símbolo en el área de &&trabajo...","Ir a &&definición","Ir a lí&&nea...","Minimizar","Cerrar","Traer todo al frente","&&Alternar herramientas de desarrollo","&&Opciones de accesibilidad","&&Notificar problemas","&&Documentación","&&Notas de la versión","&&Referencia de métodos abreviados de teclado","&&Vídeos de introducción","&&Síganos en Twitter","&&Buscar solicitudes de características","Ver &&licencia","&&Declaración de privacidad","&&Acerca de","Reiniciar para actualizar...","Buscando actualizaciones...","Descargar actualización disponible","Descargando actualización...","Instalando actualización...","Buscar actualizaciones...","\nVersión {0}\nConfirmación {1}\nFecha {2}\nShell {3}\nRepresentador {4}\nNode {5}","Aceptar"],"vs/code/electron-main/windows":["Para acceder a la barra de menús, también puede presionar la tecla **Alt**.","Aceptar","La ruta no existe","Parece que la ruta '{0}' ya no existe en el disco.","Opciones de accesibilidad","Volver a abrir","Siga esperando","Cerrar","La ventana ha dejado de responder.","Puede volver a abrir la ventana, cerrarla o seguir esperando.","Volver a abrir","Cerrar","La ventana se bloqueó","Sentimos las molestias. Puede volver a abrir la ventana para continuar donde se detuvo."],"vs/platform/configuration/common/configurationRegistry":["Aporta opciones de configuración.","Resumen de la configuración. Esta etiqueta se usará en el archivo de configuración como comentario divisor.","Descripción de las propiedades de configuración.",'si se establece, "configuration.type" debe establecerse en "object"',"configuration.title debe ser una cadena","configuration.properties debe ser un objeto"],"vs/platform/environment/node/argv":['Los argumentos del modo `--goto` deben tener el formato "ARCHIVO(:LÍNEA(:COLUMNA))".',"Abra un editor de diferencias. Necesita pasar dos rutas de acceso a archivos como argumentos.","Abra el archivo en la ruta de acceso en la línea y columna (agregue :line[:column] a la ruta de acceso).","La configuración regional que se usará (por ejemplo, en-US o zh-TW).","Fuerce una nueva instancia de Code.","Comience con el comando 'Developer: Startup Performance' habilitado.","Fuerce la apertura de un archivo o carpeta en la última ventana activa.","Especifica el directorio en que se conservan los datos de usuario; es útil cuando se ejecuta como raíz.","Imprima salidas detalladas (implica --wait).","Espere que se cierre la ventana antes de volver.","Establezca la ruta de acceso raíz para las extensiones.","Enumere las extensiones instaladas.","Muestra las versiones de las extensiones instaladas, cuando se usa --list-extension.","Instala una extensión.","Desinstala una extensión.","Deshabilite todas las extensiones instaladas.","Deshabilita la aceleración de hardware de GPU.","Versión de impresión.","Imprima el uso.","Uso","opciones","rutas de acceso","Opciones"],"vs/platform/extensions/common/extensionsRegistry":["Para las extensiones de VS Code, especifica la versión de VS Code con la que la extensión es compatible. No puede ser *. Por ejemplo: ^0.10.5 indica compatibilidad con una versión de VS Code mínima de 0.10.5.","El publicador de la extensión VS Code.","Nombre para mostrar de la extensión que se usa en la galería de VS Code.","Categorías que usa la galería de VS Code para clasificar la extensión.","Banner usado en VS Code Marketplace.","Color del banner en el encabezado de página de VS Code Marketplace.","Tema de color de la fuente que se usa en el banner.","Todas las contribuciones de la extensión VS Code representadas por este paquete.","Establece la extensión que debe marcarse como versión preliminar en Marketplace.","Eventos de activación de la extensión VS Code.","Matriz de distintivos que se muestran en la barra lateral de la página de extensiones de Marketplace.","URL de la imagen del distintivo.","Vínculo del distintivo.","Descripción del distintivo.","Dependencias a otras extensiones. El identificador de una extensión siempre es ${publisher}.${name}. Por ejemplo: vscode.csharp.","Script que se ejecuta antes de publicar el paquete como extensión VS Code.","Ruta de acceso a un icono de 128 x 128 píxeles."],"vs/platform/request/common/request":["HTTP","El valor del proxy que se debe utilizar. Si no se establece, se tomará de las variables de entorno http_proxy y https_proxy","Indica si el certificado del servidor proxy debe comprobarse en la lista de entidades de certificación proporcionada.","Valor que debe enviarse como encabezado de 'Proxy-Authorization' para cada solicitud de red."],"vs/workbench/parts/git/electron-main/askpassService":["GIT"]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7ba55c5860b152d999dda59393ca3ebeb1b5c85f/core/vs\code\electron-main\main.nls.es.js.map
