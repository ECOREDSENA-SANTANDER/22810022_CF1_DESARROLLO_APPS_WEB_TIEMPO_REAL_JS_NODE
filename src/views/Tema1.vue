<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de JavaScript
      
    .mb-4
      img(src='@/assets/curso/temas/t1/1.png', alt='')
    p JavaScript ha evolucionado de ser un pequeño lenguaje para animar botones a convertirse en la columna vertebral de aplicaciones de escala mundial. Para dominar Node.js, primero se deben entender las raíces del lenguaje.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Variables en JavaScript

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p.mb-0 Una variable en JavaScript es un identificador que permite acceder a un valor durante la ejecución del programa. Sin embargo, quedarse solo con la idea de que es únicamente "una caja donde se guardan cosas" lleva pronto a errores difíciles de rastrear: valores que cambian de forma inesperada, datos que se pierden y comportamientos distintos asociados al uso de palabras clave como var, let y const.
        p.mb-0 Una forma clara de entender este concepto es pensar en una mudanza. Para trasladar objetos de un lugar a otro, no se llevan sueltos; se utilizan cajas. A cada caja se le coloca una etiqueta ("Libros", "Cables", "Documentos") y luego se guarda el contenido en su interior. En JavaScript, una variable funciona exactamente así: una caja con una etiqueta donde se guarda información para utilizarla más adelante en el programa.
        p En el pasado, JavaScript utilizaba la palabra #[strong var] para crear estas cajas. Sin embargo, el lenguaje ha evolucionado y hoy se emplean dos términos más precisos: #[strong let] y #[strong const].
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/2.png', alt='')

    .mb-4
      ul.lista-ul--color.fa-lista
        li
          i.fas.fa-comment-dots
          span.mb-0 #[b let (la caja abierta):] se utiliza cuando el contenido de la variable va a cambiar con el tiempo. Por ejemplo, en el desarrollo de un videojuego, el puntaje del jugador se modifica constantemente:
      .row.justify-content-center
        .col-lg-10
          .tarjeta.tarjeta--gris.p-4.px-lg-5
            p Javascript
            p.mb-1 #[span.ct1 let] puntaje = #[span.ct2 0];
            p.mb-0 puntaje = #[span.ct2 150];

    .mb-4
      ul.lista-ul--color.fa-lista
        li
          i.fas.fa-comment-dots
          span.mb-0 #[b const (la caja fuerte):] se emplea cuando se desea almacenar un dato que no debe cambiar. Si el sistema intenta modificarlo, JavaScript emitirá un error:
      .row.justify-content-center
        .col-lg-10
          .tarjeta.tarjeta--gris.p-4.px-lg-5
            p Javascript
            p.mb-0 #[span.ct1 const] añoDeNacimiento = #[span.ct2 1995]

    .cajon.color-adicional-1.p-4.px-lg-5
      h5 💡 Buena práctica: 
      p.mb-0 Usar siempre const por defecto. Si durante el desarrollo se identifica que el valor necesita cambiar, se modifica la declaración a let. Este hábito previene errores inesperados y hace las aplicaciones más estables.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Tipos de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t1/5.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 Una vez comprendidas las variables como cajas etiquetadas, surge una pregunta lógica: ¿qué tipo de elementos se pueden guardar en su interior? Es aquí donde entran en juego los tipos de datos.
        p JavaScript destaca por ser un lenguaje flexible; a diferencia de otros más estrictos, no es necesario declarar de antemano el tipo de elemento a guardar, pues el propio lenguaje analiza el contenido y determina automáticamente si se trata de texto, un número u otro formato.
        p A continuación, se describen los tipos de datos fundamentales con los que se construyen las aplicaciones web:

    TabsA.color-acento-botones(data-aos="fade")
      .tarjeta.color-acento-botones.p-4(titulo="<em>String</em> (cadena de texto)")
        h4 #[em String] (cadena de texto)
        p Cualquier información textual, una palabra, una frase o incluso un número que se procese como texto, como un código postal, se clasifica como #[em string]. Para que JavaScript lo interprete como texto y no como una instrucción, el contenido debe envolverse en comillas simples ' ', dobles " " o invertidas ` `.
        .tarjeta.tarjeta--gris.p-4.px-lg-5
          p Javascript
          p.mb-1 #[span.ct1 let] nombreUsuario  = #[span.ct2 "María"];
          p.mb-0 #[span.ct1 let] mensajeDeBienvenida = #[span.ct2 'El usuario se ha conectado al chat.'];
      .tarjeta.color-acento-botones.p-4(titulo="<em>Number</em> (número)")
        h4 #[em Number] (número)
        p A diferencia de otros lenguajes que separan los números enteros de los decimales, JavaScript agrupa todo bajo un mismo tipo. Sirven para operaciones matemáticas, conteos e intervalos de tiempo, y siempre se escriben sin comillas.
        .tarjeta.tarjeta--gris.p-4.px-lg-5
          p Javascript
          p.mb-1 #[span.ct1 let] edad  = #[span.ct3 28];
          p.mb-0 #[span.ct1 let] temperatura  = #[span.ct3 23.5]; // Los decimales se marcan con punto
      .tarjeta.color-acento-botones.p-4(titulo="<em>Boolean</em> (booleano)")
        h4 #[em Boolean] (booleano)
        p Este tipo de dato es binario: solo puede tener uno de dos valores, true (verdadero) o false (falso). Funciona como el interruptor de luz de una habitación: encendido o apagado. Es fundamental para que el código tome decisiones lógicas.
        .tarjeta.tarjeta--gris.p-4.px-lg-5
          p Javascript
          p.mb-1 #[span.ct1 let] estaConectado  = #[span.ct3 true];
          p.mb-0 #[span.ct1 let] tienePermisos  = #[span.ct3 false];
      .tarjeta.color-acento-botones.p-4(titulo="<em>Undefined</em> y <em>null</em> (las cajas vacías)")
        h4 #[em Undefined] y #[em null] (las cajas vacías)
        p.mb-1 En ocasiones las variables no contienen información inmediata. JavaScript ofrece dos formas de representar esa ausencia:
        ul.lista-ul.fa-lista
          li.mb-0
            i.fas.fa-circle
            span.mb-0 #[em #[b Undefined:]] la variable fue declarada pero no se le asignó ningún valor. Su contenido "no está definido".
          li
            i.fas.fa-circle    
            span.mb-0 #[em #[b Null:]] se vacía la variable de forma deliberada, indicando explícitamente que "aquí no hay nada". Representa una ausencia de valor intencional.
        p Cuando la información no se limita a un solo dato sino a un conjunto, por ejemplo, el nombre, la edad, el correo y las preferencias de un usuario simultáneamente, el desarrollo web recurre a tipos de datos estructurados: los arrays (listas ordenadas) y los objetos (estructuras detalladas), que se estudian en la sección 1.4.


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Funciones y #[em closures]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p Una función es una unidad de comportamiento que recibe entradas, realiza un proceso y puede devolver una salida. A nivel profesional, una función también cumple tres roles estructurales:
          ul.lista-ul.fa-lista.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Un mecanismo de abstracción (ocultar complejidad).
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Una herramienta de reutilización (evitar la repetición de lógica).
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Una forma de controlar el contexto (definir qué variables puede "ver" y qué estado puede modificar).
        p En JavaScript, las funciones son "ciudadanas de primera clase": pueden guardarse en variables, pasarse como argumentos y devolverse como resultados. Esto permite patrones potentes como los callbacks y las funciones de orden superior, pero también exige claridad para evitar confusión.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/6.png', alt='')

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido" data-aos="fade")
      .row.justify-content-center(titulo="Contexto de ejecución")
        .col-lg-6.col-11
          p Cada vez que se ejecuta código, JavaScript crea un contexto de ejecución. Cada llamada a una función genera un contexto nuevo con su propio conjunto de variables locales, su "ambiente" y su flujo. Una buena analogía es imaginar cada función como un salón donde se realiza una actividad: dentro hay materiales (variables locales) que no se ven desde afuera, a menos que se permita explícitamente.
          p.mb-1 Este contexto incluye:
          ul.lista-ul.fa-lista.mb-0
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Variables locales.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Parámetros.
            li.mb-0
              i.fas.fa-circle
              span.mb-0 Referencia al entorno externo (#[em scope chain]).

            li.mb-0
              i.fas.fa-circle
              span.mb-0 Valor de #[b this] (que depende de cómo se invoca la función).
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/acord1-1.png', alt='')
      .row.justify-content-center(titulo="Alcance léxico y <em>closures</em>")
        .col-11
          p JavaScript usa alcance léxico: una función puede acceder a las variables del lugar donde fue definida. Este comportamiento produce los closures.
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 #[span.ct1 function] #[span.ct2 crearContador] () { 
              p.mb-0.ps-2 #[span.ct1 let] cuenta = #[span.ct3 0];
              p.mb-0.ps-2 #[span.ct1 return function]() { 
              p.mb-0.ps-4 cuenta++;
              p.mb-0.ps-4 #[span.ct1 return] cuenta;
              p.mb-0.ps-2 };
              p.mb-0 }
              p.mb-0 #[span.ct1 const] contar = #[span.ct2 crearContador](); 
              p.mb-0 contar(); // 1
              p.mb-0 contar(); // 2
          p La función interna mantiene acceso a #[b cuenta] aunque #[b crearContador] ya terminó su ejecución: el #[em closure] preserva ese estado. Este mecanismo es clave para mantener estado privado sin exponerlo directamente, lo que garantiza el control de integridad del sistema.
      .row.justify-content-center(titulo="El contexto de this")
        .col-11
          p.mb-1 En JavaScript, #[b this] no es fijo: depende de cómo se invoca la función. Cuando el requisito es "código predecible", conviene evitar confusiones con #[b this] usando estrategias como las #[em arrow functions] (que no tienen #[b this] propio), el método #[b bind], o el diseño con funciones puras.
          p El siguiente ejemplo aplica estos conceptos a un escenario de evaluación con requisitos técnicos concretos: reutilizar la lógica de validación, mantener un conteo de intentos sin exponerlo y generar retroalimentación clara.
          .tarjeta.tarjeta--gris.p-4.px-lg-5
            p Javascript
            p.mb-1 #[span.ct1 function] #[span.ct2 crearEvaluador](#[span.ct4 respuestasCorrectas]) {
              p.mb-0.ps-2 #[span.ct1 let] intentos = #[span.ct3 0];
              p.mb-0.ps-2 #[span.ct1 return function] #[span.ct2 evaluar](#[span.ct4 respuestasAprendiz]) {
              p.mb-0.ps-4 intentos++;
              p.mb-0.ps-4 // comparar respuestas...
              p.mb-0.ps-4 #[span.ct1 return] { intentos, #[span.ct4 resultado]: "..." };
              p.mb-0.ps-2 };
              p.mb-0 }
        

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4  Objetos y estructuras de datos

    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/7.png', alt='')
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2.col-md-2.col-3
                img(src='@/assets/curso/temas/t1/8.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 En una aplicación real, como una plataforma educativa o un chat, la información rara vez viaja en forma de datos sueltos o simples cadenas de texto. Se requiere una forma de agrupar características complejas. Es aquí donde entran en juego los objetos.
            p En JavaScript, un objeto representa una entidad con propiedades (características) y comportamientos (acciones). A nivel de arquitectura de #[em software], los objetos son la base para el modelado del dominio del problema: mediante ellos se representan computacionalmente los usuarios, los cursos, las actividades, las evidencias y los mensajes.
            p.mb-0 Un objeto se puede representar como un archivero detallado de un aprendiz. Este archivero no solo tiene un nombre en la etiqueta, sino que en su interior contiene su edad, su correo, una lista con sus calificaciones e incluso las acciones que puede realizar en la plataforma.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El desafío de la mutabilidad: compartir vs. copiar
    
    p Para utilizar estas estructuras con criterio técnico, se debe dominar un concepto crítico en JavaScript: la mutabilidad. Un objeto puede cambiar por dentro (mutar) sin que cambie la referencia principal que lo contiene. Esto puede ser útil para actualizar el estado de una aplicación en tiempo real, pero también resulta peligroso si genera cambios accidentales o inconsistencias.
    p Para ilustrar este comportamiento, en el siguiente ejemplo se describe el escenario:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.px-lg-5
          p Javascript
          p.mb-1 #[span.ct1 let] puntaje = #[span.ct2 0];
          p.mb-0 puntaje = #[span.ct2 150];
    
    p Al hacer const copia = grupoA, no se crea un objeto nuevo, se comparte el acceso al mismo objeto original. Una analogía clara es un documento en Google Docs: si se comparte el enlace con un compañero, ambos están editando el mismo archivo. Si el compañero borra un párrafo, desaparece para todos. En JavaScript, si se ejecuta copia.aprendices.push(...), el grupoA original también se verá alterado porque ambas variables apuntan a la misma dirección de memoria.
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-7.col-10.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t1/9.png', alt='')
      .col-lg-3.d-none.d-lg-block 
        .bg3.h-100.p-4.d-flex.flex-column.justify-content-center
          img(src='@/assets/curso/temas/t1/10.svg', alt='')
      .col-lg-5
        .bg6.p-4.px-lg-5.d-flex.flex-column.justify-content-center
          p Para desarrollar #[em software] robusto, se necesita distinguir claramente entre:
        .bg4.p-4.p-lg-5.d-flex.flex-column.justify-content-center
          ul.lista-ul.fa-lista
            li.mb-0
              i.fas.fa-circle
              span.mb-0 #[b Mutación intencional:] "actualizo el estado de la sesión activa porque el usuario hizo clic en guardar".  
            li.mb-0
              i.fas.fa-circle
              span.mb-0 #[b Mutación accidental:] "otro módulo del sistema cambió la lista de estudiantes sin avisar, alterando la visualización en pantalla".

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Estrategias de clonación: copia superficial vs. copia profunda

    p Cuando se necesita duplicar un archivero para trabajar en él sin alterar el original, existen dos niveles de profundidad:

    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-3.mb-md-0
              h4 Paso 1. Copia superficial (#[em shallow copy])
              p.mb-0 Utilizando el operador de propagación o #[em spread] #[b ({...objeto})], se copian las propiedades del primer nivel. Sin embargo, si dentro del archivero hay un objeto o arreglo interno, ambas copias seguirán compartiendo la misma referencia a esa estructura interna.
            .col-lg-4.col-md-8
              img(src='@/assets/curso/temas/t1/pasos1-1.svg', alt='')
          .row.align-items-center.justify-content-center
            .col-lg-4.col-md-8.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/pasos1-2.svg', alt='')
            .col-lg-8
              h4 Paso 2. Copia profunda (#[em deep copy])
              p.mb-0 Es una clonación absoluta. Requiere una estrategia específica, como usar la función #[b structuredClone()], transformar el objeto a texto y viceversa, o usar bibliotecas externas, para garantizar que toda la estructura, desde el exterior hasta el nivel más interno, sea completamente independiente.          

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Ejemplo en contexto educativo: tablero de participación       
                   
    .bg1.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center        
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2.col-md-2.col-3
                img(src='@/assets/curso/temas/t1/11.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 Para el diseño de un tablero de participación con los siguientes requisitos técnicos:
                ul.lista-ul.fa-lista
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Mostrar las preguntas de los aprendices en tiempo real.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Evitar que una pregunta ya cerrada o calificada sea editada.
                  li.mb-0
                    i.fas.fa-circle
                    span.mb-0 Mantener un historial inalterable para la evidencia del curso.
            p Si cada pregunta se modela como un objeto (#[b const pregunta = { id, autor, texto, votos, estado }]), la decisión técnica crucial es: ¿se muta la cantidad de votos directamente en el mismo objeto o se genera una versión nueva cada vez que alguien vota?
            ul.lista-ul.fa-lista.mb-0
              li.mb-0
                i.fas.fa-circle
                span.mb-0 #[b Mutar] es simple, requiere menos memoria y es rápido.
              li.mb-0
                i.fas.fa-circle
                span.mb-0 #[b Versionar] (crear nuevos objetos inmutables) facilita la auditoría y reduce errores de concurrencia cuando cientos de aprendices votan simultáneamente.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.png', alt='')

    p En proyectos con requisitos estrictos de trazabilidad, como sistemas de educación, registros médicos o auditorías financieras, la mutabilidad descontrolada es un riesgo serio. Si las evidencias de aprendizaje pueden ser manipuladas accidentalmente en la memoria, el sistema pierde su validez. Por ello, ante cada objeto diseñado, un desarrollador con criterio profesional se detiene a preguntar: ¿Quién tiene el permiso real de cambiar esto? ¿Cómo se verifica que el cambio fue legítimo? ¿Qué evidencia queda de dicha modificación?

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5  Estructuras de control y condicionales

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")      
        img(src='@/assets/curso/temas/t1/13.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Una vez comprendido cómo almacenar información en variables, agruparla en objetos y procesarla mediante funciones, surge una necesidad ineludible: dotar a la aplicación de "inteligencia" básica. Es aquí donde las estructuras de control y condicionales hacen su aparición. Si las funciones son los motores de una aplicación, los condicionales son el volante que decide hacia dónde debe girar ese motor según el entorno.
        p Un ejemplo concreto es el torniquete de entrada de una institución. El torniquete no actúa al azar; sigue una regla estricta: "si el carnet está activo, permitir el paso; de lo contrario, mantener la puerta bloqueada y emitir una alerta".        

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")      
        p En el desarrollo de #[em software] educativo, los condicionales no son simplemente la sintaxis if o else; representan en código las políticas y normas del sistema. Constantemente se establecen reglas para:
        ul.lista-ul--color.fa-lista
          li
            i.fas.fa-comment-dots
            span.mb-0 Habilitar o bloquear el acceso a un módulo.   
          li
            i.fas.fa-comment-dots
            span.mb-0 Permitir o impedir el envío de un formulario.
          li
            i.fas.fa-comment-dots
            span.mb-0 Brindar retroalimentación positiva o negativa según el resultado de un cuestionario.
          li
            i.fas.fa-comment-dots
            span.mb-0 Asignar rutas de aprendizaje personalizadas según el nivel del usuario.     
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/14.png', alt='') 

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Funcionamiento: claridad, legibilidad y mantenibilidad
    
    p Escribir un condicional en JavaScript es técnicamente sencillo, pero el verdadero reto profesional radica en hacerlo comprensible. Un condicional puede volverse rápidamente ilegible si se encadenan múltiples reglas sin orden ni concierto, lo que en el gremio se conoce como “código espagueti”.
    p.mb-1 El desarrollo profesional siempre debe priorizar:
    ul.lista-ul.fa-lista
      li.mb-0
        i.fas.fa-circle
        span.mb-0 La claridad de la condición: ¿es evidente lo que se está evaluando a simple vista?
      li.mb-0
        i.fas.fa-circle
        span.mb-0 El manejo de casos límite: ¿qué sucede si el dato que llega no es un número o si el objeto está vacío?
      li
        i.fas.fa-circle
        span.mb-0 La relación explícita con el requisito: el código debe reflejar la regla de negocio.
    p.mb-5 Se debe desarrollar el hábito de escribir las condiciones como si fueran explicaciones en lenguaje natural. En lugar de pensar en abstractos cruces de variables, se programa dictando instrucciones claras: "si el aprendiz no está autenticado, negar acceso inmediatamente"; "si el puntaje es menor a 60, sugerir material de refuerzo".

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Ejemplo en contexto educativo: habilitación de evaluación

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-7.col-10.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t1/15.png', alt='')
      .col-lg-3.d-none.d-lg-block 
        .bg3.h-100.p-4.d-flex.flex-column.justify-content-center
          img(src='@/assets/curso/temas/t1/16.svg', alt='')
      .col-lg-5
        .bg6.p-4.px-lg-5.d-flex.flex-column.justify-content-center
          p.mb-0 El siguiente flujo ilustra cómo convergen estos conceptos en la habilitación de una evaluación final. Los requisitos técnicos son:
        .bg4.p-4.p-lg-5.d-flex.flex-column.justify-content-center
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-comment-dots
              span.mb-0 Solo se permite iniciar la evaluación si se completó el contenido previo.
            li
              i.fas.fa-comment-dots
              span.mb-0 Se debe evitar que se salten pasos.
            li.mb-0
              i.fas.fa-comment-dots
              span.mb-0 El sistema debe registrar los intentos de acceso.

    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-primario(tipo="n")
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-3.mb-lg-0
              h4 Paso 1. 
              p.mb-0 Verificar si el contenido fue completado (#[b completoContenido]).
            .col-lg-4.col-md-7
              img(src='@/assets/curso/temas/t1/pasos2-1.svg', alt='')
          .row.align-items-center.justify-content-center
            .col-lg-4.col-md-7.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/pasos2-2.svg', alt='')
            .col-lg-8
              h4 Paso 2. 
              p.mb-0 Si la condición es #[b false]: registrar el intento fallido y mostrar mensaje de orientación.     
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-3.mb-lg-0
              h4 Paso 3. 
              p.mb-0 Si la condición es #[b true]: habilitar la evaluación y notificar al aprendiz.
            .col-lg-4.col-md-7
              img(src='@/assets/curso/temas/t1/pasos2-3.svg', alt='')             

    .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--gris.p-4.px-lg-5
            p Javascript
            p.mb-0 #[span.ct1 const] #[span.ct2 verificarAccesoEvaluacion] = (#[span.ct4 estadoDelAprendiz]) => { 
              p.mb-1.ps-2 #[span.ct1 if] (!estadoDelAprendiz.completoContenido) { 
              p.mb-1.ps-4 #[span.ct2 registrarIntentoFallido](estadoDelAprendiz.id); 
              p.mb-1.ps-4 #[span.ct2 mostrarMensaje](#[span.ct3 "Debe revisar y completar todo el material antes de habilitar la evaluación."]);
              p.mb-1 } #[span.ct1 else] { 
              p.mb-1.ps-4 #[span.ct2 habilitarEvaluacion](estadoDelAprendiz.id); 
              p.mb-1.ps-4 #[span.ct2 mostrarMensaje](#[span.ct3 "¡La evaluación está habilitada!"]); } };
              p.mb-1.ps-2 } 
              p.mb-0 };

    .row.justify-content-center.align-items-center
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/17.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Lo fundamental no es memorizar la palabra clave if, sino la semántica detrás de ella. Al revisar este código, cualquier miembro del equipo debe poder afirmar: "este condicional implementa la regla funcional del sistema y protege la integridad del proceso de evaluación".
        p Los condicionales son, en esencia, decisiones que toma el #[em software] en nombre de sus creadores. Una regla condicional mal planteada o que emite mensajes de error confusos puede generar frustración y deserción. Por el contrario, una regla clara y diseñada con criterio ayuda a orientar, corrige el rumbo sin castigar y garantiza una experiencia de aprendizaje fluida y confiable.


    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6  Ciclos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p Después de dotar a la aplicación de la capacidad de tomar decisiones mediante los condicionales, surge un nuevo desafío práctico: ¿qué sucede cuando una misma instrucción debe aplicarse no a un solo elemento, sino a cientos o miles de ellos? Es aquí donde entran en acción los ciclos o bucles (#[em loops]).
          p.mb-0 Un ciclo funciona como un proceso automatizado: se define una instrucción (tomar una hoja, sellarla y pasarla a la pila de terminados) y esta se repite hasta que la lista se agota.
        p.mb-0 En plataformas educativas, la información casi siempre se organiza en colecciones o listas:
        ul.lista-ul--color.fa-lista
          li.mb-1
            i.fas.fa-comment-dots
            span.mb-0 Una lista de aprendices matriculados.
          li.mb-1
            i.fas.fa-comment-dots
            span.mb-0 Un historial de mensajes en un chat grupal.
          li.mb-1
            i.fas.fa-comment-dots
            span.mb-0 Un repositorio de evidencias subidas a la plataforma.
          li
            i.fas.fa-comment-dots
            span.mb-0 Un cronograma de sesiones virtuales.
        p El ciclo es la herramienta fundamental para recorrer y procesar esas listas.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/18.png', alt='')

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3  Tipos de ciclos en JavaScript

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido" data-aos="fade")
      .row.justify-content-center(titulo="For — el ciclo clásico con control total ")
        .col-11
          p Permite definir exactamente cuántas veces se ejecuta la instrucción. Es ideal cuando se conoce de antemano el número de iteraciones. Su estructura incluye inicio, condición y actualización en una sola línea.
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 #[span.ct1 for] (#[span.ct1 let] i = #[span.ct3 0]; i < aprendices.length; i++) {
              p.mb-1 #[span.ct4 console].#[span.ct2 log](aprendices[i]);
              p.mb-1 }
      .row.justify-content-center(titulo="While — el ciclo condicional ")
        .col-11
          p Se ejecuta mientras una condición sea verdadera. Es útil cuando no se sabe cuántas iteraciones se necesitarán, por ejemplo, mientras haya mensajes pendientes en la cola del servidor.
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 #[span.ct1 while] (hayMensajesPendientes) {
              p.mb-1 #[span.ct2 procesarSiguienteMensaje]();
              p.mb-1 }  
      .row.justify-content-center(titulo="ForEach — el ciclo moderno para listas")
        .col-11
          p Método integrado en los arreglos que recorre cada elemento aplicando una función. Es más legible que el for clásico y se usa cuando no se necesita interrumpir el ciclo.
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 aprendices.#[span.ct2 forEach](#[span.ct4 aprendiz] => {
            p.mb-1 #[span.ct2 enviarNotificacion](aprendiz.correo);
            p.mb-1 });
      .row.justify-content-center(titulo="Map — el ciclo que transforma")
        .col-11
          p Similar a forEach, pero en lugar de solo recorrer, genera un nuevo arreglo con los resultados transformados. Es la herramienta correcta cuando se necesita convertir datos sin mutar el arreglo original.
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 #[span.ct1 const] correos = aprendices.#[span.ct2 map](#[span.ct4 aprendiz] => aprendiz.correo);

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Funcionamiento: eficiencia, límites y escalabilidad

    p Node.js es increíblemente rápido, pero tiene un solo hilo principal de ejecución, hace una sola cosa a la vez a gran velocidad. Si se le asigna un ciclo pesado, se concentrará tanto en esa tarea que ignorará el resto de la aplicación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Un ciclo que recorre una lista de 20 elementos es imperceptible. Pero un ciclo mal diseñado que recorre 20.000 registros en un momento crítico puede literalmente "congelar" la interfaz o saturar el servidor, provocando que los aprendices no puedan enviar mensajes ni cargar evidencias.
        p.mb-1 Por esta razón, frente a cualquier ciclo se debe incluir un análisis previo: 
        ul.lista-ul--color.fa-lista
          li.mb-1
            i.fas.fa-comment-dots
            span.mb-0 ¿Cuántas iteraciones se van a ejecutar?
          li.mb-1
            i.fas.fa-comment-dots
            span.mb-0 ¿Qué operaciones hay dentro del ciclo? (¿se está consultando una base de datos en cada vuelta? Esto sería un error crítico).
          li.mb-1
            i.fas.fa-comment-dots
            span.mb-0 ¿Qué costo en memoria y tiempo tiene esta operación?
          li
            i.fas.fa-comment-dots
            span.mb-0 ¿Existen alternativas más eficientes? (filtrar, paginar de 10 en 10 o indexar la información).
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/19.png', alt='')

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Ciclo tradicional vs. variable acumuladora  
    
    .row.align-items-center.titulo-icono-2.mb-4(data-aos='fade-right')
      .col
        h4.mb-0.titulo-icono-2-text.px-0.py-2 Ejemplo en contexto educativo: reporte de asistencia por grupo
    
    p Para comparar un enfoque básico con uno optimizado, considérese el requerimiento de crear un reporte de asistencia. Los requisitos técnicos son:
    ul.lista-ul--color.fa-lista.ps-md-3.ps-lg-4
      li.mb-1
        i.fas.fa-comment-dots
        span.mb-0 Calcular el porcentaje de asistencia.
      li.mb-1
        i.fas.fa-comment-dots
        span.mb-0 Generar un reporte visual.
      li.mb-1
        i.fas.fa-comment-dots
        span.mb-0 Mantener tiempos de carga razonables.
    p La solución inicial más lógica es un ciclo que recorra todas las marcaciones del mes:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.px-lg-5
            p Javascript
            p.mb-0 #[span.ct1 let] totalAsistencias = #[span.ct3 0];
              p.mb-1 #[span.ct1 for] (#[span.ct1 let] i = #[span.ct3 0]; i < marcacionesDelMes.length; i++) {
              p.mb-1.ps-2 #[span.ct1 if] (marcacionesDelMes[i].asistio === #[span.ct3 true]) {
              p.mb-1.ps-4 totalAsistencias++;
              p.mb-1.ps-2 }
              p.mb-0 }
    
    .bg1
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/20.png', alt='')
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-2.col-md-2.col-3
                img(src='@/assets/curso/temas/t1/21.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 Sin embargo, si el requerimiento evoluciona a un reporte en vivo para un evento masivo con 1000 aprendices conectados simultáneamente, este ciclo se convierte en un cuello de botella.
            p En ese punto, se debe pensar estratégicamente: ¿Es necesario recalcular todo el historial cada vez que alguien entra? ¿No sería mejor usar una variable acumuladora que sume +1 cada vez que ocurre el evento de conexión, evitando el ciclo por completo?
            p.mb-0 En conclusión, un ciclo representa el poder de la repetición computacional. Sin embargo, en el desarrollo de aplicaciones web en tiempo real, la repetición excesiva y sin control se traduce en latencia (retrasos en el tiempo de respuesta del sistema). El criterio profesional no radica en saber escribir un ciclo, sino en determinar cuándo es la herramienta adecuada y cuándo la arquitectura exige una optimización para no comprometer la experiencia de los usuarios.


    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.7  Declaración de funciones y código limpio 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p.mb-0 Luego de dominar cómo el código toma decisiones mediante condicionales y cómo procesa grandes volúmenes de información a través de los ciclos, se enfrenta a una revelación fundamental en el desarrollo profesional: hacer que el código funcione es apenas el primer paso; el verdadero reto es hacerlo comprensible.
        p.mb-0 En el entorno del desarrollo web existe una máxima inquebrantable: el código se escribe principalmente para que lo lean otros seres humanos, no solo para que lo ejecuten las máquinas. A la computadora le da exactamente igual si una función se llama x123 o si tiene mil líneas de largo; la máquina la traducirá y la ejecutará. Sin embargo, para el equipo de desarrollo que deba mantener esa plataforma en el futuro, o para el propio creador semanas después, leer un código desordenado es como intentar descifrar un texto sin signos de puntuación ni espacios.
      .col-lg-4.col-md-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/22.png', alt='')              

    p La programación tiene una analogía directa con la redacción de un libro: el lenguaje de programación es la gramática, pero el clean code (código limpio) es el estilo, la ortografía y la coherencia de la historia.

    TabsA.color-acento-botones.mb-5(data-aos="fade")
      .tarjeta.color-acento-botones.p-4(titulo="Variables y constantes (los sustantivos)")
        h4 Variables y constantes (los sustantivos)
        p Las variables guardan información y representan cosas o entidades. Sus nombres siempre deben ser sustantivos descriptivos.
        .tarjeta.tarjeta--gris.p-4.px-lg-5
          p.fw-bold Ejemplo
          p.mb-1 ❌ Incorrecto       #[span.ct4 let n = "Carlos"; / const list = [ &#93;;]
          p.mb-0 ✅ Correcto         #[span.ct4 let nombreAprendiz = "Carlos"; / const listaCursos = [ &#93;;]
      .tarjeta.color-acento-botones.p-4(titulo="Funciones (los verbos)")
        h4 Funciones (los verbos)
        p Las funciones realizan un trabajo y representan acciones. Sus nombres siempre deben comenzar con un verbo en infinitivo que indique exactamente qué hacen.
        .tarjeta.tarjeta--gris.p-4.px-lg-5
          p.fw-bold Ejemplo
          p.mb-1 ❌ Incorrecto       #[span.ct4 const datos = () => {} / function usuario() {}]
          p.mb-0 ✅ Correcto         #[span.ct4 const obtenerDatos = () => {} / function validarUsuario() {}]

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El principio de responsabilidad única

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/23.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t1/24.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 Una vez que las funciones tienen el nombre correcto, se debe evaluar su contenido. Aquí entra en juego uno de los principios más importantes de la ingeniería de #[em software]: el Single Responsibility Principle (principio de responsabilidad única). Esta regla establece que una función debe hacer una sola cosa, y debe hacerla de manera excelente.
        p Un restaurante ilustra este principio con claridad: existe el rol del chef (cocinar) y el rol del mesero (atender las mesas). Si el chef tiene que soltar la espátula en medio de un pedido para ir a cobrarle a un cliente, el servicio colapsa. Cada rol debe tener una única responsabilidad.

    p En el #[em software] educativo ocurre lo mismo. Si se diseña una función llamada #[b validarLogin] para verificar la contraseña de un usuario, su único trabajo es decir "aprobado" o "rechazado". Si al revisar el código interno se descubre que esa misma función también envía correos electrónicos de bienvenida y guarda estadísticas en la base de datos, es el momento exacto para refactorizar (reestructurar el código sin cambiar su comportamiento externo).



</template>

<script>
export default {
  name: 'Tema1',
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
