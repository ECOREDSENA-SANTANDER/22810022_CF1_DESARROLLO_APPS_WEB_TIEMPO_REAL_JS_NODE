<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Programación orientada a objetos (POO) en JavaScript



    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El modelo de prototipos: el molde maestro



    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 El funcionamiento interno: pasando la pregunta hacia arriba


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Clases y prototipos

    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Anatomía de una clase en JavaScript


    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Prototipos vs. modelo ineficiente



    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Nombramiento y organización del código



    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Convenciones estrictas: el uniforme de las palabras


    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Modularidad: una clase, un archivo


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Encapsulación, herencia y composición



    .row.align-items-center.titulo-icono.mb-4(data-aos='fade-right')
      .col-auto.titulo-icono-img
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      .col
        h3.mb-0.titulo-icono-text.py-2.ps-md-3 Los tres pilares de la POO



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
