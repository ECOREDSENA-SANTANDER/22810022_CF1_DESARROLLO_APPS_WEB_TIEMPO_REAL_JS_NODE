<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-1 La construcción de aplicaciones web en tiempo real requiere una comprensión integral que articule los fundamentos lógicos de JavaScript, el modelado estructurado de la información y las dinámicas de un código limpio y modular. Reconocer el #[em software] como una construcción diseñada para equipos humanos, y no únicamente para máquinas, permite analizar su arquitectura con mayor objetividad, fortalecer la toma de decisiones técnicas y promover soluciones escalables que favorezcan la eficiencia del sistema y el trabajo colaborativo.
    p.mb-4 Asimismo, el dominio del entorno de servidor con Node.js, el manejo de la concurrencia asíncrona y la implementación de conexiones persistentes confirman que el rendimiento es el pilar fundamental de la interactividad. Asumir un rol analítico y crítico frente a la evaluación de herramientas tecnológicas de terceros permite estructurar proyectos con rigor profesional, garantizando plataformas seguras, estables y plenamente alineadas con las exigencias de los usuarios y del ecosistema digital moderno.
    
    .row.justify-content-center
      .col-lg-10.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre los fundamentos de JavaScript y Node.js para desarrollo web. Presenta cuatro ejes temáticos: fundamentos del lenguaje, programación orientada a objetos, entorno Node.js y selección de herramientas. En fundamentos se agrupan variables, tipos de datos, funciones, objetos, condicionales, ciclos y código limpio. En programación orientada a objetos se incluyen prototipos, clases, organización del código, encapsulación, herencia y composición. En Node.js se integran entorno de ejecución, asincronía, npm, WebSockets, event loop, instalación y seguridad. En selección de herramientas se consideran mantenibilidad, comunidad, rendimiento, licencia y matriz de decisión.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
