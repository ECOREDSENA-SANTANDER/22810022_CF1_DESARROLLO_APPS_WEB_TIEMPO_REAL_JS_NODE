<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de JavaScript y Node.js para desarrollo web',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con los fundamentos de JavaScript, la programación orientada a objetos, Node.js y la selección de herramientas para aplicaciones web en tiempo real.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué representa una variable en JavaScript?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un archivo que almacena funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un identificador que permite acceder a un valor durante la ejecución del programa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un servidor que ejecuta código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un módulo del sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la principal diferencia entre let y const en JavaScript?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'let se usa para variables que pueden cambiar y const para valores que no deben modificarse.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'const se usa para funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'let es exclusivo de Node.js.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'const permite cambiar su valor múltiples veces.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de dato representa únicamente valores true o false?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Number.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'String.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Object.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Boolean.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué caracteriza a una función en JavaScript?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un contenedor de archivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un servidor de red.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es una unidad de comportamiento que procesa información y puede devolver un resultado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es un tipo de variable constante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué es un closure en JavaScript?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una función que conserva acceso a variables de su contexto original.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una función que pierde su contexto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una función que no puede recibir parámetros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un objeto del servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué representa un objeto en JavaScript?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una base de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una entidad que agrupa propiedades y comportamientos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una función de red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un archivo ejecutable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué permite la programación orientada a objetos (POO) en JavaScript?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar las funciones del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar Node.js.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear sistemas estructurados mediante clases y objetos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de variables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué es Node.js?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un lenguaje de programación independiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un navegador web.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un entorno que permite ejecutar JavaScript fuera del navegador.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué problema busca resolver Node.js con su arquitectura?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La creación de sistemas operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El manejo de miles de conexiones simultáneas sin bloquear el servidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El almacenamiento de datos en discos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La compilación de código binario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué función cumple el event loop en Node.js?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Instalar paquetes de software.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Gestionar la ejecución de eventos y callbacks sin bloquear el sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Almacenar archivos del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué describe mejor el alcance léxico (scope) en JavaScript?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La zona del programa donde una variable es visible y puede utilizarse.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La capacidad de una variable para cambiar su valor automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tamaño máximo de una función.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tipo de dato de una variable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es el principal beneficio de utilizar funciones de flecha (arrow functions)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten ejecutar el código más lento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo funcionan en navegadores web.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantienen el contexto léxico de this del entorno donde se crean.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminan el uso de funciones tradicionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué riesgo técnico puede producir la mutabilidad accidental de objetos en JavaScript?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce el tamaño del código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite ejecutar el programa más rápido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina las funciones del programa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Puede generar cambios inesperados en el estado de la aplicación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué ventaja ofrece la copia profunda (deep copy) de un objeto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite compartir el mismo objeto entre múltiples variables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elimina las propiedades internas del objeto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Crea una copia completamente independiente del objeto original.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Convierte el objeto en una función.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué propósito cumplen las estructuras condicionales en un programa?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que el programa tome decisiones según una condición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Repetir un bloque de código múltiples veces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir funciones dentro del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenar datos dentro del servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el propósito principal de los ciclos en programación?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardar información en variables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Repetir una acción varias veces sobre un conjunto de datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear conexiones de red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar funciones del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué ventaja ofrece la modularidad en proyectos desarrollados con Node.js?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina el uso de funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce el número de variables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite organizar el código en archivos independientes y reutilizables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evita el uso de bibliotecas externas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una característica del modelo de prototipos en JavaScript?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los objetos no pueden compartir métodos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las funciones no pueden heredarse.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los objetos siempre deben duplicar el código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cada objeto comparte métodos a través de una cadena de prototipos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué ventaja ofrece el modelo de I/O no bloqueante en Node.js?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evita el uso de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite que el servidor procese múltiples solicitudes sin esperar a que finalicen las anteriores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elimina las conexiones de red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reduce el tamaño de los archivos del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué elemento permite gestionar dependencias y metadatos de un proyecto Node.js?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El archivo index.html.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El archivo server.css.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El archivo package.json.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El archivo main.java.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre los fundamentos de JavaScript y Node.js para desarrollo web.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
