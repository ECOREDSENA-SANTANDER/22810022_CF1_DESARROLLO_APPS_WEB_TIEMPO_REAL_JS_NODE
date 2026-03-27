<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Caracterizar y seleccionar herramientas

    .mb-4
      img(src='@/assets/curso/temas/t4/1.png', alt='')
    p En el entorno productivo real no existe una "herramienta perfecta" universal. Existe la herramienta adecuada para el contexto específico. Se debe transitar de un consumidor pasivo de tutoriales a un arquitecto de #[em software] capaz de auditar, caracterizar y seleccionar tecnologías con criterio profesional.
    

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  Criterios de caracterización

    p.mb-5 Cuando se enfrenta el ecosistema de npm, que cuenta con millones de paquetes, elegir una biblioteca al azar para solucionar un problema es un riesgo inaceptable. Para caracterizar y seleccionar una herramienta en JavaScript de forma profesional, se debe aplicar una matriz de evaluación estricta.

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Criterios de caracterización profesional

    .row.justify-content-center(data-aos="fade")
      .col-lg-10.position-relative          
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t4/ico1.svg", alt="")
            .col
              h5 Mantenibilidad y salud del repositorio
              p.mb-0 ¿Cuándo fue la última actualización (#[em commit])? 
              p.mb-1 Si un libro de texto no se ha revisado en cinco años, su información es obsoleta. En el #[em software], una biblioteca que no ha sido actualizada en dos años se considera código muerto (#[em abandonware]) y representa un riesgo crítico de seguridad cibernética.
              p.mb-0 #[b Pregunta clave:] ¿cuándo fue el último #[em commit] y con qué frecuencia se actualiza?
        .crd.crd--avatarHorizontal.crd--scd.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t4/ico2.svg", alt="")
            .col
              h5 Comunidad y documentación
              p.mb-1 Si el manual de un equipo de laboratorio está en un idioma desconocido o mal redactado, el tiempo que tardará el equipo en usarlo será altísimo. De igual manera, la curva de aprendizaje de un equipo de programación depende directamente de la calidad de la documentación oficial. Un manual pobre dispara el costo en horas de desarrollo.
              p.mb-0 #[b Pregunta clave:] ¿la documentación es clara, completa y está actualizada?
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t4/ico3.svg", alt="")
            .col
              h5 Impacto en el rendimiento (peso de la herramienta)
              p.mb-1 En el desarrollo web, la velocidad lo es todo y cada #[em kilobyte] cuenta. Importar una biblioteca masiva de 2 MB solo para utilizar una pequeña función que formatea fechas es una negligencia técnica que ralentiza la aplicación. En Node.js, donde el rendimiento es crítico, el peso de cada dependencia debe justificarse.
              p.mb-0 #[b Pregunta clave:] ¿el tamaño de la biblioteca se justifica con las funcionalidades que aporta?
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t4/ico4.svg", alt="")
            .col
              h5 Licenciamiento legal
              p.mb-1 Es un error común creer que todo el código abierto es de uso libre sin restricciones. Se debe distinguir entre licencias permisivas, como la licencia del Instituto Tecnológico de Massachusetts (Massachusetts Institute of Technology, MIT), y licencias estrictas, como la Licencia Pública General (#[em General Public License], GPL), que obliga a abrir el código fuente derivado. Ignorar esto expone a futuros empleadores a demandas legales.
              p.mb-0 #[b Pregunta clave:] ¿la licencia de esta biblioteca es compatible con el uso comercial del proyecto?


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Matriz de decisión para tiempo real

    p.mb-4 Para facilitar la selección de herramientas de comunicación en tiempo real, se presenta la siguiente matriz de decisión técnica:

    .mb-5(data-aos='fade')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Matriz de decisión para herramientas de comunicación en tiempo real
      .tabla-a.color-acento-contenido
        table
          thead
            tr.bg-color-acento-contenido
              th Escenario del proyecto
              th Tecnología recomendada
              th Justificación técnica
              th Limitaciones
          tbody
            tr.bg2
              td Chat sencillo / notificaciones básicas
              td socket.io
              td Proporciona #[em fallbacks] (alternativas automáticas) a #[em long polling] si el navegador del cliente es muy antiguo. Maneja reconexiones automáticas y salas de chat (#[em rooms]) de forma nativa.
              td Agrega peso adicional al cliente y al servidor. No es el protocolo crudo.
            tr
              td #[em Streaming] de datos financieros (alta frecuencia)
              td ws (WebSockets nativos)
              td Es la implementación más ligera y rápida de WebSockets para Node.js. Mínima latencia, ideal para miles de mensajes por segundo.
              td El desarrollador debe programar manualmente la lógica de reconexión y emisión estructurada.
            tr.bg2
              td #[em Dashboard] unidireccional (solo el servidor envía datos)
              td Eventos enviados por el servidor (#[em Server-Sent Events], SSE)
              td Utiliza el protocolo HTTP tradicional. Es extremadamente eficiente cuando el cliente solo necesita escuchar datos en tiempo real.
              td Es unidireccional (servidor → cliente). No sirve para comunicación bidireccional.

    .cajon.color-adicional-1.p-4.px-lg-5.mb-4
      h5 Nota
      p.mb-0 La selección de la tecnología debe basarse siempre en los requisitos específicos del proyecto, el perfil del usuario final y las restricciones de infraestructura disponible.

    .row.justify-content-center
      .col-lg-4.col-md-7.col-10.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t4/2.png', alt='')
      .col-lg-3.d-none.d-lg-block 
        .bg3.h-100.p-4.d-flex.flex-column.justify-content-center
          img(src='@/assets/curso/temas/t4/3.svg', alt='')
      .col-lg-5
        .bg4.h-100.p-4.p-lg-5.d-flex.flex-column.justify-content-center
          p En el entorno productivo real, no existe una tecnología superior a las demás en términos absolutos. La diferencia entre un desarrollador competente y uno excepcional radica en su capacidad para leer los requisitos del sistema, contrastarlos con las características de cada herramienta y tomar una decisión argumentada, documentada y revisable.



</template>

<script>
export default {
  name: 'Tema4',
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
