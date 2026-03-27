<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Node.js para tiempo real

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p Hasta este punto se han dominado las bases estructurales de JavaScript: cómo guardar datos, procesarlos con funciones limpias, estructurarlos en objetos seguros y organizarlos con POO. Ahora es el momento de llevar todo ese conocimiento a un nuevo escenario: el servidor.
          p.mb-0 Es aquí donde entra en escena Node.js. Para comprender sus características y beneficios, se debe entender primero qué es exactamente y para qué fue diseñado.
        p.mb-0 Node.js no es un lenguaje de programación nuevo; es un entorno que permite ejecutar JavaScript fuera del navegador web. Sin embargo, su arquitectura tiene un propósito muy específico. Node.js no fue diseñado para realizar cálculos matemáticos pesados. Si se le pide renderizar un video en 3D o procesar complejos algoritmos de inteligencia artificial, su rendimiento será deficiente. Su verdadero poder, y la razón por la que domina la web moderna, es su capacidad para resolver un reto histórico de internet conocido como el problema #[b C10K]: la capacidad de manejar 10.000 o más conexiones de red simultáneas sin que la máquina colapse.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/1.png', alt='')


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Características y beneficios

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 I/O no bloqueante (#[em non-blocking] I/O): el secreto de la velocidad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t3/3.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 Para entender cómo Node.js logra esta hazaña, es necesario compararlo con la forma en que operaban los servidores web tradicionales (como los construidos con PHP o las versiones clásicas de Java).
        p En el modelo tradicional, cada vez que un usuario se conecta a la página web, el servidor contrata a un nuevo "trabajador" (conocido técnicamente como un hilo o #[em thread]) para atender exclusivamente a esa persona. Si el usuario pide una lista de calificaciones, el trabajador va a la base de datos (una operación de entrada/salida o I/O) y se queda allí, de brazos cruzados y bloqueado, esperando pacientemente a que la base de datos responda. Si 10.000 estudiantes entran al mismo tiempo, el servidor debe contratar 10.000 trabajadores, lo que agota rápidamente la memoria RAM y hace que el sistema se caiga.
    
    p Node.js cambia las reglas del juego utilizando un modelo de I/O no bloqueante. En lugar de tener miles de trabajadores perezosos, Node.js tiene un solo "hilo principal" (un único trabajador) que nunca, en ninguna circunstancia, se detiene a esperar.

    p.mb-5 Las operaciones de leer un archivo o consultar una base de datos son computacionalmente "lentas". En Node.js, cuando llega una de estas peticiones, el hilo principal la delega inmediatamente al sistema operativo y continúa atendiendo a la velocidad de la luz a los miles de usuarios restantes.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 La analogía del restaurante de alta cocina
    
    p Este chef (que representa el hilo principal o #[em event loop]) es el único encargado de recibir los pedidos. Él no se pone a picar cebollas, ni baja al sótano a buscar ingredientes, ni lava los platos; esas son tareas lentas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        ol.lista-ol--cuadro.fa-lista
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 1
            span.mb-0 El chef recibe una orden de un mesero (una petición HTTP de un usuario).
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 2
            span.mb-0 Inmediatamente, delega esa tarea pesada a sus ayudantes de cocina (un conjunto de herramientas internas en Node.js conocido como libuv y el propio sistema operativo).
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 3
            span.mb-0 Sin perder un milisegundo, el chef se da la vuelta y recibe la orden del siguiente mesero.
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 4
            span.mb-0 Mientras tanto, los ayudantes están en segundo plano picando la cebolla (buscando en la base de datos).
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 5
            span.mb-0 Cuando un ayudante termina, no interrumpe al chef a gritos. Le deja una nota o le da un ligero toque en el hombro indicando que el ingrediente está listo. 
          li
            .lista-ol--cuadro__vineta
              span.text-dark.fw-bold 6
            span.mb-0 En su primer momento libre, el chef toma ese ingrediente, ensambla el plato final y lo entrega al cliente.
      .col-lg-5.col-md-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/4.png', alt='')


    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Beneficios indiscutibles para el tiempo real

    .bg1(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png', alt='')
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2.col-md-2.col-3
                img(src='@/assets/curso/temas/t3/6.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 En las aplicaciones web en tiempo real, la respuesta a por qué Node.js es el rey del "tiempo real" se vuelve evidente.
            p Las aplicaciones web en tiempo real, como los chats de soporte, las pizarras colaborativas donde varios aprendices dibujan al mismo tiempo, o los tableros de notificaciones en vivo, comparten una característica: generan miles de conexiones simultáneas que envían mensajes muy pequeños de forma constante.
            p.mb-0 En estas aplicaciones, no hay cálculos matemáticos pesados; hay una avalancha de pequeñas operaciones de entrada/salida (I/O). Node.js, gracias a su chef ejecutivo que no se bloquea y a su dominio absoluto de la asincronía, procesa estas miles de microinteracciones con una huella de memoria mínima y una latencia casi nula.


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Bibliotecas y ecosistema npm

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p.mb-0 Tras entender que Node.js actúa como un chef ejecutivo sumamente veloz que no se bloquea ante múltiples peticiones, surge una duda práctica: ¿tiene este chef que inventar sus propios utensilios y recetas desde cero cada vez? La respuesta es un rotundo no. Aquí es donde entra en juego el ecosistema que catapultó a Node.js al éxito mundial.
        p.mb-0 El gestor de paquetes de Node (#[em Node Package Manager], npm) es el registro de #[em software] de código abierto más grande del mundo. Su filosofía se fundamenta en un principio clásico de los sistemas Unix: "escribe programas que hagan una sola cosa, pero que la hagan increíblemente bien".
        p En plataformas del pasado, era común crear entornos monolíticos: aplicaciones gigantescas donde un solo equipo debía programar absolutamente todo, desde la conexión a la base de datos hasta el sistema de contraseñas. En Node.js, el paradigma cambia drásticamente; los desarrolladores ensamblan sus aplicaciones uniendo pequeñas y eficientes piezas de código abierto construidas por la comunidad global.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/7.png', alt='')

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 La analogía de la ferretería global y los bloques de Lego

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")      
        img(src='@/assets/curso/temas/t3/8.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Npm funciona como una ferretería de tamaño global y acceso gratuito: si en la plataforma educativa se necesita un módulo para generar archivos PDF con los resultados de los aprendices, el desarrollador no invierte meses estudiando las especificaciones técnicas del formato PDF. Simplemente "va a la ferretería" (npm), busca el bloque diseñado específicamente para crear PDFs, lo descarga con un solo comando en su terminal y lo ensambla en su proyecto.
        p Para las aplicaciones en tiempo real, este ecosistema es invaluable. Implementar conexiones persistentes a través de WebSockets puros desde cero implica manejar protocolos de red complejos a muy bajo nivel. Gracias a npm, el desarrollador puede apoyarse en bibliotecas especializadas como #[b socket.io], que resuelven toda esa complejidad, permitiendo levantar un servidor de chat bidireccional en cuestión de minutos.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Evaluación crítica: el criterio de selección profesional

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")      
        p Sin embargo, tener acceso gratuito a millones de herramientas conlleva una responsabilidad enorme. Un desarrollador #[em junior] podría sentirse tentado a instalar paquetes de forma indiscriminada para cualquier tarea menor. Un desarrollador #[em senior] sabe que cada paquete añadido es código de terceros ejecutándose en su servidor.
        p Por ello, se debe aprender a auditar y seleccionar estas herramientas con rigor. No se instala un paquete solo porque aparece en el primer resultado de búsqueda. Se evalúan criterios como la popularidad (número de descargas), la actividad del mantenimiento (frecuencia de actualizaciones), la calidad del código (revisando el repositorio en GitHub) y la reputación de sus autores. Esta capacidad de selección crítica es lo que distingue a un desarrollador competente de uno que simplemente copia y pega soluciones sin entender sus implicaciones. 
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/9.png', alt='')

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Criterios de selección profesional

    SlyderF.mb-4(columnas="col-lg-6 col-xl-4" data-aos="fade")
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-8.col-md-5
            img(src='@/assets/curso/temas/t3/tarj1-1.svg' alt='')
        h4.text-center Popularidad (descargas semanales) 
        p.mb-0 Si una biblioteca tiene tres millones de descargas a la semana, está siendo utilizada y probada constantemente por miles de empresas. Si tiene diez descargas, es un riesgo no probado. ¿Cuántos equipos confían en esta herramienta?
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-8.col-md-5
            img(src='@/assets/curso/temas/t3/tarj1-2.svg' alt='')
        h4.text-center Estabilidad (#[em issues] en GitHub)
        p.mb-0 Al revisar el repositorio público del código, ¿cuántos problemas han reportado otros usuarios? Y más importante: ¿los creadores los están resolviendo activamente? Un repositorio con cientos de #[em issues] sin respuesta es una señal de alerta.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7.col-md-4
            img(src='@/assets/curso/temas/t3/tarj1-3.svg' alt='')
        h4.text-center Mantenimiento (fecha del último #[em commit]) 
        p.mb-0 La tecnología web evoluciona a diario. Si la última actualización del paquete fue hace dos años, se considera una biblioteca abandonada (#[em abandonware]) y representa un riesgo crítico de seguridad cibernética.
      .tarjeta.bg3.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-7.col-md-4
            img(src='@/assets/curso/temas/t3/tarj1-4.svg' alt='')
        h4.text-center Licenciamiento legal
        p.mb-0 Es un error creer que todo el código abierto es de uso libre sin restricciones. Se debe distinguir entre licencias permisivas (como la licencia MIT) y licencias estrictas (como GPL, que obligan a abrir el código fuente derivado). Ignorar esto expone a futuros empleadores a demandas legales.

    p.mb-5 Depender de una biblioteca abandonada o de dudosa procedencia no solo genera incompatibilidades futuras, sino que representa un riesgo crítico de seguridad. Las vulnerabilidades no parcheadas en dependencias de terceros son una de las principales puertas de entrada para ataques informáticos modernos conocidos como ataques a la cadena de suministro.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Ejemplo en contexto educativo: fechas en un chat en vivo

    .row.justify-content-center
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        .bg-color-acento-contenido.h-100
          img(src='@/assets/curso/temas/t3/tarj2-1.png', alt='')
          .p-4
            h5 El enfoque manual (propenso a errores)
            p Imagine que el sistema requiere mostrar en el chat colaborativo cuánto tiempo hace que un aprendiz envió un mensaje (por ejemplo, "Hace 5 minutos"). El desarrollador podría intentar escribir una función manual que calcule años bisiestos, meses de 31 días y zonas horarias. El resultado: código extenso, frágil y propenso a errores difíciles de depurar.
      .col-lg-6(data-aos="fade-left")
        .bg7.h-100
          img(src='@/assets/curso/temas/t3/tarj2-2.png', alt='')
          .p-4
            h5 El enfoque profesional (bibliotecas especializadas)
            p La alternativa profesional es buscar en npm una biblioteca especializada en manejo de fechas como #[b date-fns] o #[b moment]. Se instala con un solo comando, hace "una sola cosa y la hace bien", y permite concentrarse en lo verdaderamente importante: la lógica de la aplicación.


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Conceptos de TCP y #[em sockets]

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")      
        img(src='@/assets/curso/temas/t3/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Tras levantar un servidor robusto con Node.js y las herramientas del ecosistema npm, se llega frente al último gran obstáculo conceptual para construir la aplicación. Hasta este punto, la web se ha comportado bajo unas reglas muy estrictas: el modelo de comunicación HTTP.
        p Para que una aplicación educativa sea verdaderamente de tiempo real, como un chat de asesoría sincrónica o un tablero colaborativo donde varios aprendices dibujan al mismo tiempo, el modelo HTTP tradicional de petición y respuesta, lamentablemente, fracasa. Para superar esta limitación, es necesario adentrarse en el mundo de los protocolos de red de bajo nivel, específicamente TCP (#[em Transmission Control Protocol]) y los #[em sockets].    

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El problema de HTTP: una conversación unidireccional y sin memoria

    p El protocolo HTTP es, por diseño, un protocolo #[em stateless] (sin estado) y estrictamente unidireccional. Esto significa que el servidor web es un ente pasivo; jamás iniciará una conversación. El cliente (el navegador) siempre debe dar el primer paso y hacer una petición. El servidor procesa, entrega la respuesta y de inmediato "cuelga el teléfono" y olvida quién era ese cliente.

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")      
        p La comunicación HTTP se puede comparar con el envío de una carta postal: se envía una carta preguntando "¿El instructor ya calificó mi evidencia?". El servidor busca, responde "No", y la conexión se cierra. Si un minuto después se quiere saber si el resultado ya está disponible, la única forma es enviar otra carta completa o recargar la página entera.
        p En el pasado, para simular el tiempo real, los programadores utilizaban una técnica llamada #[em short polling] (sondeo corto): programar el navegador para que enviara una petición HTTP automáticamente cada tres segundos preguntando: "¿Hay mensajes nuevos?". Esto es el equivalente informático a un niño en un viaje preguntando cada cinco minutos: "¿Ya llegamos?". La mayoría de las veces el servidor responde que no, desperdiciando ancho de banda y saturando la red innecesariamente.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/11.png', alt='') 

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El funcionamiento: el #[em handshake] y el #[em upgrade]

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario(tipo="n")
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-3.mb-lg-0
              h4 La petición inicial 
              p.mb-0 El navegador hace una petición HTTP normal, pero lleva una etiqueta especial solicitando un #[em upgrade] (una mejora de conexión). Es como decirle al recepcionista: "Vengo por la vía tradicional, pero ¿podemos pasarnos a una línea telefónica directa?".
            .col-lg-4.col-md-7
              img(src='@/assets/curso/temas/t3/paso1-1.svg', alt='')
          .row.align-items-center.justify-content-center
            .col-lg-4.col-md-7.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t3/paso1-2.svg', alt='')
            .col-lg-8
              h4 La aceptación 
              p.mb-0 Si el servidor de Node.js está configurado para WebSockets, acepta la solicitud y confirma el #[em upgrade].
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-3.mb-lg-0
              h4 La transformación
              p.mb-0 En ese milisegundo, el canal HTTP se transforma en un túnel TCP abierto permanentemente. A partir de ese momento, ya no es necesario recargar la página ni hacer consultas constantes. Ahora el servidor tiene el poder de empujar (#[em push]) las notificaciones directamente al cliente en tiempo real.
            .col-lg-4.col-md-7
              img(src='@/assets/curso/temas/t3/paso1-3.svg', alt='')            


    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4  Ciclo de vida y #[em event loop]

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")      
        img(src='@/assets/curso/temas/t3/12.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Habiendo comprendido que los WebSockets mantienen cientos o miles de túneles de comunicación abiertos de forma permanente, surge una pregunta obligada: ¿cómo hace el servidor para escuchar a todos esos usuarios al mismo tiempo sin colapsar?
        p La respuesta reside en el concepto técnico más importante de cualquier desarrollador #[em backend] en el ecosistema de JavaScript: el #[em event loop] (ciclo de eventos).
        p Como se mencionó anteriormente, Node.js es #[em single-threaded] (tiene un solo hilo principal). Sin embargo, logra ser altamente concurrente y manejar miles de tareas gracias a este ciclo infinito y a una potente biblioteca interna escrita en C++ llamada #[em libuv].

    p.mb-5 El #[em event loop] es un ciclo infinito que procesa operaciones en fases estrictamente ordenadas. Cada fase tiene una responsabilidad específica y, una vez completada la última, el ciclo vuelve a empezar desde la primera, de forma continua y a gran velocidad.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Las fases del ciclo

    LineaTiempoE.color-acento-contenido.mb-5
      .row.align-items-center(titulo="Nivel" subtitulo="1")
        .col-lg-2.col-md-3.col-4
          img(src='@/assets/curso/temas/t3/linea1-1.svg', alt='')
        .col-lg-10.col-md-9.col-8
          h4 #[em Timers] (temporizadores) 
          p.mb-0 El ciclo comienza mirando el reloj. En esta fase se ejecutan las funciones programadas para un momento específico usando #[b setTimeout()] o #[b setInterval()]. Es el equivalente a que el instructor diga: "Son las 10:00 AM, es hora de recoger el examen de los que tenían tiempo extra".
      .row.align-items-center(titulo="Nivel" subtitulo="2")
        .col-lg-2.col-md-3.col-4
          img(src='@/assets/curso/temas/t3/linea1-2.svg', alt='')
        .col-lg-10.col-md-9.col-8
          h4 #[em Callbacks] pendientes
          p.mb-0 Aquí se resuelven las tareas diferidas por el sistema operativo, como un error de red al intentar conectarse a la base de datos. Es como revisar si quedó algún asunto pendiente antes de avanzar.
      .row.align-items-center(titulo="Nivel" subtitulo="3")
        .col-lg-2.col-md-3.col-4
          img(src='@/assets/curso/temas/t3/linea1-3.svg', alt='')
        .col-lg-10.col-md-9.col-8
          h4 #[em Idle, prepare] (inactividad y preparación) 
          p.mb-0 Fase de uso interno exclusivo del motor de Node.js. En la analogía, es el microsegundo en el que el instructor organiza sus hojas en el escritorio antes de abrir la puerta.
      .row.align-items-center(titulo="Nivel" subtitulo="4")
        .col-lg-2.col-md-3.col-4
          img(src='@/assets/curso/temas/t3/linea1-4.svg', alt='')
        .col-lg-10.col-md-9.col-8
          h4 #[em Poll] (sondeo - el trabajo real) 
          p.mb-0 Esta es la fase más importante. Aquí Node.js espera a que lleguen nuevas peticiones: conexiones de WebSockets, mensajes del chat, lectura de archivos. Si hay tareas en la fila, el sistema las ejecuta una por una hasta que la sala de espera se vacía.
      .row.align-items-center(titulo="Nivel" subtitulo="5")
        .col-lg-2.col-md-3.col-4
          img(src='@/assets/curso/temas/t3/linea1-5.svg', alt='')
        .col-lg-10.col-md-9.col-8
          h4 #[em Check] (revisión) 
          p.mb-0 Una vez atendidas todas las tareas del sondeo, se ejecutan las funciones marcadas como urgentes mediante #[b setImmediate()]. Es como cuando el instructor dice: "Justo antes de terminar este ciclo, necesito que firmen esta asistencia de inmediato".
      .row.align-items-center(titulo="Nivel" subtitulo="6")
        .col-lg-2.col-md-3.col-4
          img(src='@/assets/curso/temas/t3/linea1-6.svg', alt='')
        .col-lg-10.col-md-9.col-8
          h4 #[em Close callbacks] (eventos de cierre)  
          p.mb-0 Finalmente, el ciclo limpia la casa. Ejecuta los eventos de cierre brusco, como cuando un usuario cierra su navegador de golpe (#[b socket.on('close', ...)]). El ciclo despide a los que se van y vuelve a empezar en la fase 1.        

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Rigor técnico: el peligro de bloquear la puerta

    .bg1.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center        
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2.col-md-2.col-3
                img(src='@/assets/curso/temas/t3/13.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 Comprender esta coreografía es lo que separa a un desarrollador que solo copia código de uno que diseña sistemas robustos.
            p El mayor riesgo en Node.js es olvidar que solo hay un hilo. Si se comete el error de escribir un ciclo #[b for] masivo (por ejemplo, contar de uno a mil millones) o una operación matemática pesada como encriptar contraseñas directamente en el hilo principal, ocurrirá un desastre: se bloqueará el #[em event loop].
            p Si el ciclo queda paralizado procesando una operación pesada, significa que la puerta del servidor queda bloqueada: no se podrá aceptar ni una sola petición nueva, los mensajes no se enviarán y la plataforma entera parecerá estar caída para miles de usuarios simultáneos.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/14.png', alt='')

    p.mb-4 En un entorno profesional, este problema se mitiga con rigor técnico: las tareas matemáticas o criptográficas pesadas jamás se dejan en el hilo principal. Se deben delegar a "ayudantes externos" utilizando #[em worker threads], permitiendo que el #[em event loop] siga girando libremente y atendiendo el tráfico en tiempo real.

    .row.justify-content-center
      .col-lg-8
        .bg3      
          img(src='@/assets/curso/temas/t3/podcast.png', alt='')
          .p-4
            .bg-white.tarjeta.p-4
              TarjetaAudio.color-acento-contenido.mb-4(
                texto="Pódcast"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.mb-0 Para complementar la comprensión del #[em event loop] y el modelo de I/O no bloqueante, se sugiere escuchar el siguiente recurso de audio: El #[em event loop] y el modelo de I/O no bloqueante en Node.js.


    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5  Instalación y verificación del entorno

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-7.col-10.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t3/15.png', alt='')
      .col-lg-3.d-none.d-lg-block 
        .bg3.h-100.p-4.d-flex.flex-column.justify-content-center
          img(src='@/assets/curso/temas/t3/16.svg', alt='')
      .col-lg-5
        .bg4.h-100.p-4.p-lg-5.d-flex.flex-column.justify-content-center
          p En un contexto profesional, rara vez se instala Node.js directamente desde el instalador global del sistema operativo. La práctica estándar en la industria es utilizar gestores de versiones como el gestor de versiones de Node (#[em Node Version Manager], NVM).

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Instalación profesional del entorno

    .row.justify-content-center(data-aos="fade")
      .col-lg-10
        PasosA.color-primario(tipo="n")
          .row.align-items-center.justify-content-center
            .col-11
              h4 Instalar NVM
              p NVM permite gestionar múltiples versiones de Node.js en la misma máquina. Un desarrollador podría estar trabajando en el proyecto A (que requiere Node v14) y en el proyecto B (que exige Node v20). NVM permite cambiar la versión activa del motor en la terminal en milisegundos, garantizando la compatibilidad del entorno sin reinstalar nada.
              .tarjeta.tarjeta--gris.p-4.px-lg-5
                p bash
                p.mb-0.ct5 # Comando de instalación en sistemas Unix/Linux
                p.mb-0 #[span.ct2 curl] -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | #[span.ct2 bash]
          .row.align-items-center.justify-content-center
            .col-11
              h4 Instalar la versión LTS de Node.js
              p Se recomienda utilizar siempre versiones de soporte a largo plazo (#[em Long Term Support], LTS) para proyectos empresariales, dejando las versiones #[em current] (actuales) solo para experimentación de nuevas características. Las versiones LTS garantizan estabilidad, parches de seguridad y soporte extendido.
              .tarjeta.tarjeta--gris.p-4.px-lg-5
                p bash
                p.mb-0.ct5 # Instalar la versión LTS más reciente 
                p nvm #[span.ct2 install] --lts
                p.mb-0.ct5 # Activar la versión LTS instalada 
                p.mb-0 nvm use --lts
          .row.align-items-center.justify-content-center
            .col-11
              h4 Verificar la instalación
              p Una vez completada la instalación, se debe verificar que el entorno quedó correctamente configurado. Estos comandos confirman que tanto Node.js como npm están disponibles y operativos:
              .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
                p bash
                p.mb-0.ct5 # Verificar versión de Node.js instalada 
                p #[span.ct2 node] --version
                p.mb-0.ct5 # Verificar versión de NPM instalada 
                p.mb-0 #[span.ct2 npm] --version
              p Si ambos comandos retornan un número de versión, el entorno está listo para el desarrollo.


    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.6  Gestión de dependencias, seguridad y mantenimiento

    p.mb-5 Una vez instalado el entorno, el siguiente paso es entender cómo Node.js organiza y protege las dependencias del proyecto. El archivo #[b package.json] es el corazón organizativo de cualquier proyecto: define los #[em scripts] de ejecución, los metadatos del sistema y las dependencias (bibliotecas de terceros) necesarias para su funcionamiento.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Los tres pilares de la gestión del proyecto

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido" data-aos="fade")
      .row.justify-content-center(titulo="Package.json: el corazón del proyecto")
        .col-11
          p.mb-2 El archivo package.json centraliza toda la información del proyecto en un solo lugar. Define:
          ul.lista-ul.fa-lista
            li.mb-0
              i.fas.fa-circle
              span.mb-0 El nombre, versión y descripción del sistema.
            li.mb-0 
              i.fas.fa-circle
              span.mb-0 Los #[em scripts] de ejecución (por ejemplo, cómo iniciar el servidor o ejecutar las pruebas).
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Las dependencias necesarias para producción y las dependencias de desarrollo.
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p json
            p.mb-0 {
              p.mb-0.ps-2 #[span.ct4 "name"]: #[span.ct3 "plataforma-educativa"],
              p.mb-0.ps-2 #[span.ct4 "version"]: #[span.ct3 "1.0.0"],
              p.mb-0.ps-2 #[span.ct4 "scripts"]: {
              p.mb-0.ps-4 #[span.ct4 "start"]: #[span.ct3 "node index.js"],
              p.mb-0.ps-4 #[span.ct4 "dev"]: #[span.ct3 "nodemon index.js"]
              p.mb-0.ps-2 },
              p.mb-0.ps-2 #[span.ct4 "dependencies"]: {
              p.mb-0.ps-4 #[span.ct4 "express"]: #[span.ct3 "^4.18.2"],
              p.mb-0.ps-4 #[span.ct4 "socket.io"]: #[span.ct3 "^4.6.1"]
              p.mb-0.ps-2 }
              p.mb-0 }
      .row.justify-content-center(titulo="Seguridad: npm audit")
        .col-11
          p En la cultura del desarrollo web, la seguridad no es opcional. El comando #[b npm audit] escanea automáticamente el árbol de dependencias (#[b node_modules]) cruzándolo con bases de datos globales de vulnerabilidades y exposiciones comunes (#[em Common Vulnerabilities and Exposures], CVE), alertando sobre riesgos como inyecciones de lenguaje de consulta estructurado (#[em Structured Query Language], SQL) o vulnerabilidades de denegación de servicio (DoS) en las bibliotecas utilizadas.
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p bash
            p.mb-0.ct5 # Escanear vulnerabilidades en las dependencias
            p #[span.ct2 npm ] audit
            p.mb-0.ct5 # Corregir automáticamente las vulnerabilidades detectadas
            p.mb-0 #[span.ct2 npm] audit fix
          p Un proyecto profesional ejecuta npm audit de forma periódica y antes de cada despliegue a producción. Las vulnerabilidades no parcheadas en dependencias de terceros son una de las principales puertas de entrada para ataques informáticos modernos.
      .row.justify-content-center(titulo="Sostenibilidad del <em>software</em>: package-lock.json")
        .col-11
          p El archivo package-lock.json garantiza que todos los desarrolladores del equipo, así como el servidor de producción, instalen las versiones matemáticamente exactas de cada dependencia, evitando el problema conocido como "en mi máquina sí funciona".
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span Comandos de instalación según entorno de desarrollo
          .tabla-a.color-acento-contenido.tabla1
            table
              thead
                tr.bg-color-adicional-1
                  th.text-white Comando
                  th.text-white Cómo usarlo
              tbody
                tr
                  td npm install
                  td Desarrollo local - permite actualizaciones menores.
                tr
                  td npm ci
                  td Producción - instalación exacta basada en package-lock.json.

    .cajon.color-adicional-1.p-4.px-lg-5.mb-4
      h5 Nota
      p.mb-0 El comando #[b npm ci] (#[em clean install]) lee exclusivamente el archivo #[b package-lock.json], garantizando instalaciones reproducibles en cualquier entorno.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
