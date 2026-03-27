<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg1.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8
          img(src='@/assets/curso/temas/intro/1.jpg', alt='')
        .col-lg-7
          .p-4
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-2.col-md-2.col-3
                img(src='@/assets/curso/temas/intro/2.svg', alt='')
              .col-lg-10.col-md-10.col-9
                p.mb-0 El desarrollo de aplicaciones web modernas exige algo más que escribir código funcional: requiere criterio técnico para seleccionar las herramientas adecuadas, justificar esa elección y anticipar sus consecuencias sobre el rendimiento, la seguridad y la mantenibilidad del producto.
            p JavaScript y Node.js constituyen hoy el ecosistema de referencia para construir estas soluciones, y dominar sus fundamentos es el punto de partida para actuar con autonomía profesional en proyectos reales.
            p.mb-0 El recorrido inicia con los conceptos esenciales de JavaScript: variables, funciones, objetos, estructuras de control y ciclos. A partir de esa base, se avanza hacia la programación orientada a objetos (POO), donde se estudian las clases, la organización del código y los pilares de encapsulación, herencia y composición. Finalmente, se aborda Node.js desde su arquitectura interna, el #[em event loop] y el modelo de entrada/salida (I/O) no bloqueante, hasta su ecosistema de bibliotecas (npm), los conceptos de red (TCP y #[em sockets]) y la gestión de dependencias.  
    
    p.mb-4 En cada tema se plantean situaciones reales de desarrollo para que la comprensión no se quede en la teoría, sino que se traduzca en decisiones técnicas argumentadas: comparar alternativas, identificar riesgos y comunicar con claridad las razones detrás de cada elección. Esta capacidad de argumentación es lo que distingue a un desarrollador competente de uno que simplemente ejecuta instrucciones.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
