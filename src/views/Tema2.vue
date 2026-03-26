<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Programación orientada a objetos (POO) en JavaScript

    .bg1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='')
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2.col-md-2.col-3
                img(src='@/assets/curso/temas/t2/2.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 Una vez dominada la creación de objetos individuales y la escritura de funciones limpias para procesarlos, surge una pregunta logística inevitable en el desarrollo de aplicaciones reales: ¿qué sucede si la plataforma necesita registrar a 500 aprendices al mismo tiempo? Escribir manualmente 500 objetos idénticos con sus respectivas funciones sería inmanejable.
            p Para resolver este problema de escalabilidad, los lenguajes de programación utilizan la POO. Sin embargo, para comprender cómo funciona este enfoque en JavaScript, es necesario prepararse para desaprender y cambiar de paradigma, especialmente si se tiene experiencia previa en lenguajes más tradicionales como Java o C#.
            p.mb-0 JavaScript es un lenguaje único en su diseño: aunque incorpora una sintaxis de clases, estas no corresponden a clases tradicionales como en otros lenguajes, sino que funcionan como una abstracción sobre su modelo basado en prototipos.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El modelo de prototipos: el molde maestro

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p En JavaScript, casi todo es un objeto. Cuando se crea un objeto nuevo, este no nace completamente aislado; nace con un enlace interno, una referencia oculta, que lo conecta a otro objeto anterior llamado su prototipo.
        p Este prototipo actúa como un molde maestro. Si se crea un objeto a partir de ese molde, el nuevo objeto hereda automáticamente todas las características y habilidades del original. A su vez, ese objeto molde tiene su propio prototipo superior, y así sucesivamente, formando una escalera conocida como la cadena de prototipos. Esta cadena asciende hasta que llega a un punto donde el prototipo es #[b null], marcando el final del linaje.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/3.png', alt='')

    mixin timelineItem(nivel, titulo, descripcion, img, isLast)
      .linea-tiempo-h__item(class=isLast ? 'linea-tiempo-h__item--last' : '')
        .linea-tiempo-h__item__header
          h4.mb-1.linea-tiempo-h__item__nivel Nivel
          h2.mb-0.linea-tiempo-h__item__numero= nivel
        .linea-tiempo-h__item__dot
        .linea-tiempo-h__item__body
          .linea-tiempo-h__item__icono
            img(src=img)
          p.linea-tiempo-h__item__descripcion!= descripcion
    .linea-tiempo-h.color-acento-contenido.mb-5
      +timelineItem('1', 'Nivel 1', 'Objeto específico (el aprendiz).', '@/assets/curso/temas/t2/linea1-1.svg', false)
      +timelineItem('2', 'Nivel 2', 'Prototipo directo (el mentor).', '@/assets/curso/temas/t2/linea1-2.svg', false)
      +timelineItem('3', 'Nivel 3', 'Prototipo del prototipo (el coordinador).', '@/assets/curso/temas/t2/linea1-3.svg', false)
      +timelineItem('4', 'Nivel 4', '<strong>null</strong> (fin de la cadena).', '@/assets/curso/temas/t2/linea1-4.svg', true)


    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El funcionamiento interno: pasando la pregunta hacia arriba

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p ¿Por qué JavaScript utiliza esta cadena invisible? La respuesta es eficiencia extrema en el consumo de recursos.
        p Cuando se solicita a un objeto ejecutar la acción saludar():
        ul.lista-ul--color.fa-lista
          li
            i.fas.fa-comment-dots
            span.mb-0 El motor de JavaScript primero revisa las propiedades propias del objeto específico. Si sabe cómo saludar(), lo hace.
          li
            i.fas.fa-comment-dots
            span.mb-0 Si no tiene esa habilidad directamente, no arroja un error inmediato. En su lugar, “pasa la pregunta hacia arriba” y revisa su prototipo.
          li
            i.fas.fa-comment-dots
            span.mb-0 Si el prototipo sabe saludar(), el objeto toma prestada esa habilidad y la ejecuta. Si tampoco sabe, se consulta el prototipo del prototipo, y así sucesivamente.

    p Esta delegación permite que cientos de objetos compartan los mismos métodos en la Memoria de Acceso Aleatorio (RAM) del servidor sin necesidad de duplicarlos, lo que reduce drásticamente el consumo de recursos.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Clases y prototipos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p.mb-0 Si JavaScript usa prototipos, ¿por qué los desarrolladores modernos escriben la palabra #[b class] en su código?
          p.mb-0 Con la llegada de ECMAScript 2015 (ES6), los creadores del lenguaje decidieron introducir la palabra clave #[b class] para que los programadores provenientes de Java o C# se sintieran más cómodos y el código fuera más fácil de leer. Sin embargo, como señala Crockford (2008) en sus análisis sobre el lenguaje, esto es simplemente #[em syntactic sugar] (azúcar sintáctico).
        p.mb-0 El término azúcar sintáctico significa que se le ha puesto una envoltura familiar a la sintaxis, pero en el motor interno, JavaScript ignora la palabra #[b class] y sigue usando exactamente el mismo sistema de prototipos de siempre.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/5.png', alt='')

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Anatomía de una clase en JavaScript

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-acento-contenido" data-aos="fade")
      .row.justify-content-center(titulo="Declaración de la clase")
        .col-11
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 #[span.ct5 // Se ve como una clase tradicional, pero es un prototipo oculto]
              p.mb-0 #[span.ct1 class] #[span.ct4 Usuario] {
          p La palabra #[b class] es la envoltura visual. Internamente JavaScript la convierte en una función constructora con su cadena de prototipos.
      .row.justify-content-center(titulo="El constructor y las propiedades")
        .col-11
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 #[span.ct2 constructor](#[span.ct4 nombre], #[span.ct4 correo]) {
              p.mb-0.ps-2 #[span.ct1 this].nombre = nombre;
              p.mb-0.ps-2 #[span.ct1 this].correo = correo;
              p.mb-0 }
          p El #[b constructor] es el molde maestro: define qué propiedades tendrá cada objeto creado a partir de esta clase; this hace referencia al objeto específico que se está creando en ese momento.
      .row.justify-content-center(titulo="Los métodos (guardados en el prototipo)")
        .col-11
          .tarjeta.tarjeta--gris.p-4.px-lg-5.mb-4
            p Javascript
            p.mb-0 #[span.ct2 iniciarSesion]() {
              p.mb-0.ps-4 #[span.ct4 console].#[span.ct2 log](`${#[span.ct1 this].#[span.ct3 nombre]} #[span.ct3 ha ingresado a la plataforma en tiempo real.]`);
              p.mb-0.ps-2 }
              p.mb-0 }
          p Este método #[b no se copia] en cada objeto creado. JavaScript lo guarda automáticamente en el prototipo de Usuario, donde todos los objetos pueden consultarlo sin duplicarlo.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Prototipos vs. modelo ineficiente

    .row.align-items-center.titulo-icono-2.mb-4(data-aos='fade-right')
      .col
        h4.mb-0.titulo-icono-2-text.px-0.py-2 Ejemplo en contexto educativo: eficiencia en memoria            
    
    p Se crea la clase #[b Usuario] con el método #[b iniciarSesion()]. A partir de este molde, el sistema instancia 30 objetos de tipo aprendiz para un nuevo curso.

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.px-lg-5   
          table.sin-linea
            thead
              tr
                th.w-md-25 Modelo                                                      
                th ¿Qué ocurre en RAM?
            tbody
              tr
                td ❌ Modelo ineficiente  
                td 30 copias exactas del método #[b iniciarSesion()] ocupando espacio
              tr
                td ✅ Modelo de prototipos
                td 30 aprendices ligeros compartiendo 1 solo método en el prototipo

    .row.justify-content-center.align-items-center
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/6.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Gracias al modelo de prototipos, los 30 aprendices no tienen el método repetido en su interior. Todos nacen ligeros y, cuando necesitan iniciar sesión, consultan hacia arriba en su cadena de prototipos y hacen referencia al único método alojado en el prototipo general de #[b Usuario].
        p Comprender esta diferencia no es solo un dato de teoría de la programación; es una competencia técnica indispensable. En el desarrollo de aplicaciones web en tiempo real con Node.js, donde un servidor puede gestionar miles de conexiones simultáneas por segundo, la RAM es el recurso más valioso. Al aprovechar la cadena de prototipos, se garantiza que la aplicación escale de manera robusta, compartiendo recursos de forma inteligente y evitando que el servidor colapse por redundancia de datos.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Nombramiento y organización del código

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-7.col-10.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-3.d-none.d-lg-block 
        .bg3.h-100.p-4.d-flex.flex-column.justify-content-center
          img(src='@/assets/curso/temas/t2/8.svg', alt='')
      .col-lg-5
        .bg4.h-100.p-4.p-lg-5.d-flex.flex-column.justify-content-center
          p Tras comprender que las clases en JavaScript actúan como moldes maestros (basados en prototipos) para crear cientos de objetos de manera eficiente, surge una pregunta logística fundamental en el desarrollo de #[em software]: ¿cómo se organiza todo este código cuando el proyecto empieza a crecer?          

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Convenciones estrictas: el uniforme de las palabras
    
    p Para que un equipo de trabajo pueda leer el código de forma fluida, la industria del #[em software] ha establecido convenciones de escritura. Al ver una palabra, cualquier programador debe saber inmediatamente si se trata de un molde (una clase) o de una acción (un método). 

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-7.col-md-8.col-lg-5
                img(src='@/assets/curso/temas/t2/tarj1-1.svg', alt='')
            h4.text-center Clases (sustantivos en PascalCase)
            p.mb-4 Las clases son las plantillas o entidades principales del sistema. Sus nombres siempre deben ser sustantivos y escribirse en PascalCase: la primera letra de cada palabra va en mayúscula, sin espacios.
            p.mb-1 ✅ Ejemplos correctos
            p.ct4.mb-0 GestorDeCalificaciones
            p.ct4.mb-0 AmbienteDeFormacion
            p.ct4 UsuarioPremium
            p.mb-0 Al ver esa letra mayúscula inicial, el equipo sabe inmediatamente que está ante un molde maestro.
          .col-md.tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-4
              .col-7.col-md-8.col-lg-5
                img(src='@/assets/curso/temas/t2/tarj1-2.svg', alt='')
            h4.text-center Métodos (verbos en camelCase)
            p.mb-4 Los métodos son las acciones que los objetos pueden realizar. Sus nombres siempre deben comenzar con un verbo en infinitivo y usar camelCase: la primera letra de la primera palabra es minúscula, pero las primeras letras de las palabras siguientes van en mayúscula, simulando las jorobas de un camello.
            p.mb-1 ✅ Ejemplos correctos
            p.ct4.mb-0 calcularPromedio()
            p.ct4.mb-0 registrarAsistencia()
            p.ct4.mb-0 enviarNotificacion()

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Modularidad: una clase, un archivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg5.p-4.mb-4
          p Una vez que las clases y métodos tienen los nombres correctos, el siguiente paso es decidir dónde guardarlos. Es común que al inicio se escriba todo el proyecto en un solo y gigantesco archivo #[b index.js], sin embargo, en un entorno de desarrollo real con Node.js, esto es una receta para el desastre.
          p.mb-0 La regla de oro de la organización en POO es la modularidad: una clase por archivo.
        p.mb-0 Para entender la importancia de esto, se puede imaginar un proyecto como un gran libro de actas físico. Si tres personas intentan escribir en la misma página al mismo tiempo, chocarán entre sí y arruinarán el documento. En el desarrollo de #[em software], esto ocurre cuando varios programadores trabajan en el mismo archivo usando repositorios de control de versiones como Git; el resultado es lo que se conoce como un merge conflict (conflicto de fusión).
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/9.png', alt='')

    TabsA.color-acento-botones(data-aos="fade")
      .tarjeta.color-acento-botones.p-4(titulo="Paso 1. Separar las clases por archivo")
        h4 Paso 1. Separar las clases por archivo
        ul.lista-ul--color.fa-lista.color-primario
          li
            span.mb-0 📄 Aprendiz.js     → contiene única y exclusivamente la clase Aprendiz.
          li
            span.mb-0 📄 Instructor.js   → contiene solo la clase Instructor.
          li
            span.mb-0 📄 Evaluacion.js   → gestiona únicamente la lógica de las pruebas
      .tarjeta.color-acento-botones.p-4(titulo="Paso 2. Trabajar en paralelo sin interferencias")
        h4 Paso 2. Trabajar en paralelo sin interferencias
        p Si se necesita actualizar la forma en que se calcula la asistencia de los aprendices y otra persona necesita agregar una función a los instructores, cada una trabaja en su propio archivo. No hay colisiones.
      .tarjeta.color-acento-botones.p-4(titulo="Paso 3. Integrar los aportes al sistema principal")
        h4 Paso 3. Integrar los aportes al sistema principal
        p Al finalizar, ambos aportes se integran al proyecto principal sin interferir en el trabajo del otro. El resultado es un sistema limpio, mantenible y listo para escalar.


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Encapsulación, herencia y composición
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Una vez que el proyecto cuenta con clases bien nombradas y archivos organizados de manera modular, el desarrollo de aplicaciones web sube de nivel. Ya no se trata solo de que el código funcione o se lea bien, sino de protegerlo y hacerlo verdaderamente escalable. Aquí es donde se establece la diferencia entre un codificador novato y un verdadero arquitecto de #[em software].
        p Para lograr esta madurez técnica, se deben dominar tres pilares fundamentales de la POO: la encapsulación, la herencia y la composición.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Los tres pilares de la POO

    TabsB.mb-5
      .py-4.py-md-5.bg4(titulo="La encapsulación: el principio de la caja negra" :icono="require('@/assets/curso/temas/t2/tabs1-ico1.svg')")
        .row.justify-content-center
          .col-lg-4.col-11.col-md-8.mb-4
            img(src='@/assets/curso/temas/t2/tabs1-1.png', alt='')
          .col-lg-7.col-11.mb-4
            h4 La encapsulación: el principio de la caja negra
            p En un entorno colaborativo o en una aplicación en tiempo real, múltiples partes del sistema interactúan constantemente. La encapsulación es el mecanismo de seguridad diseñado para proteger el estado interno de un objeto, evitando que otras partes del programa lo modifiquen accidentalmente o sin autorización.
            p Un ejemplo es el sistema de matrículas: el objeto #[b Matricula] guarda en su interior un dato muy sensible: el resultado de la evaluación del aprendiz. Si el sistema no está encapsulado, cualquier fragmento de código podría alterar ese resultado de forma directa y arbitraria con una simple línea: #[b aprendiz.resultado = "A"]. Esto es un riesgo inaceptable, pues comprometería la validez e integridad de las evidencias de aprendizaje.
          .col-11
            p En las versiones modernas de JavaScript, la encapsulación se logra utilizando el prefijo # (numeral) antes del nombre de la propiedad o método para declararlo como privado. Esto convierte al objeto en una "caja negra"; su interior es inaccesible desde el exterior.
            h5 Las aduanas: getters y setters
            ul.lista-ul.fa-lista
              li
                i.fas.fa-circle
                span.mb-0 #[b Getter] (para obtener): si la propiedad es privada, la única forma de consultarla desde el exterior es a través de un método público controlado llamado #[em getter]. Este actúa como una ventanilla de consulta: entrega el resultado, pero no permite modificarlo directamente.
              li
                i.fas.fa-circle
                span.mb-0 #[b Setter] (para modificar): el #[em setter] es la "aduana" del objeto. Antes de permitir que el resultado cambie, verifica quién está intentando hacer el cambio, si el valor es válido (solo "A" o "D") y si la fecha límite no ha pasado. Solo si todo es correcto, la aduana permite el cambio.
      .py-4.py-md-5.bg4(titulo="Herencia vs. composición: el dilema del gorila y la banana" :icono="require('@/assets/curso/temas/t2/tabs1-ico2.svg')")
        .row.justify-content-center
          .col-lg-4.col-11.col-md-8.mb-4
            img(src='@/assets/curso/temas/t2/tabs1-2.png', alt='')
          .col-lg-7.col-11.mb-4
            h4 Herencia vs. composición: el dilema del gorila y la banana
            h5 Árbol genealógico vs. bloques de Lego
            p Una vez que los objetos están seguros, el siguiente paso es reutilizar código. Históricamente el enfoque principal ha sido la herencia.
            p La herencia (implementada en JavaScript moderno con la palabra clave #[b extends]) permite crear relaciones del tipo "es un/a". Por ejemplo, tiene sentido lógico decir que "un instructor es un usuario". Por lo tanto, la clase #[b Instructor] hereda todas las propiedades y métodos de la clase padre Usuario, añadiendo únicamente sus características específicas.
          .col-11
            p Sin embargo, a medida que las aplicaciones crecen, las jerarquías de herencia profundas crean un código rígido y frágil. En la ingeniería de #[em software] existe un famoso dilema conocido como el problema del gorila y la banana, formulado por Armstrong (2019): "querías una banana, pero te llevaste un gorila sosteniendo la banana y toda la selva con él".
            p Esto ocurre cuando se crea una nueva clase y se le hace heredar de una clase gigante, por ejemplo, #[b InstructorTecnico] hereda de #[b Profesor], que hereda de #[b Empleado], que hereda de #[b Usuario], solo porque se necesitaba reutilizar un pequeño método como #[b saludar()]. Como resultado, el nuevo objeto carga en memoria con funciones y configuraciones que jamás va a utilizar, afectando el rendimiento de la aplicación en tiempo real.
      .py-4.py-md-5.bg4(titulo="La alternativa del arquitecto: la composición" :icono="require('@/assets/curso/temas/t2/tabs1-ico3.svg')")
        .row.justify-content-center
          .col-lg-4.col-11.col-md-8.mb-4
            img(src='@/assets/curso/temas/t2/tabs1-3.png', alt='')
          .col-lg-7.col-11.mb-4
            h4 La alternativa del arquitecto: la composición
            p Mientras que la herencia se basa en lo que un objeto #[b es], la composición se basa en lo que un objeto #[b tiene] o #[b sabe hacer]. En lugar de construir un árbol genealógico rígido, la composición se asemeja a construir con bloques de Lego.       
            p Si se necesita crear un #[b InstructorTecnico], en lugar de obligarlo a heredar de una larga cadena de clases, el sistema crea pequeños módulos independientes de comportamiento: un #[b moduloAutenticable] (que sabe iniciar sesión) y un #[b moduloEvaluador] (que sabe calificar). Luego se compone el objeto final inyectándole únicamente las habilidades que necesita.
          .col-11
            p Este enfoque garantiza un #[em software] altamente modular, fácil de modificar, escalable y eficiente en el consumo de recursos del servidor, una característica vital cuando se trabaja con Node.js.
              

</template>

<script>
export default {
  name: 'Tema2',
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
