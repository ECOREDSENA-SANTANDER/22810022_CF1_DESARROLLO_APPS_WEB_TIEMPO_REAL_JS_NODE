export default {
  global: {
    Name: 'Fundamentos de JavaScript y Node.js para desarrollo web',
    Description:
      'JavaScript es el lenguaje que impulsa la web moderna y Node.js su extensión al servidor, juntos constituyen el ecosistema tecnológico de referencia para construir aplicaciones web en tiempo real. Este componente aborda sus fundamentos, la programación orientada a objetos (POO) y las características de Node.js, orientando al aprendiz en la selección argumentada de herramientas según los requisitos técnicos del <em>software</em> a desarrollar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Variables en JavaScript',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Funciones y <em>closures</em>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Objetos y estructuras de datos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estructuras de control y condicionales',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ciclos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Declaración de funciones y código limpio',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programación orientada a objetos (POO) en JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clases y prototipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Nombramiento y organización del código',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Encapsulación, herencia y composición',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Node.js para tiempo real',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características y beneficios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Bibliotecas y ecosistema npm',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Conceptos de TCP y sockets',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ciclo de vida y event loop',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Instalación y verificación del entorno',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Gestión de dependencias, seguridad y mantenimiento',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Caracterizar y seleccionar herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Criterios de caracterización',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Matriz de decisión para tiempo real',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /*complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],*/
  glosario: [
    {
      termino: 'Alcance <em>(scope)</em>',
      significado:
        'Zona del programa donde una variable es visible y accesible.',
    },
    {
      termino: '<em>Callback</em>',
      significado:
        'Función que se ejecuta como respuesta a un evento o al finalizar una operación asíncrona.',
    },
    {
      termino: '<em>Closure</em>',
      significado:
        'Función que conserva acceso a variables de su contexto léxico incluso después de que ese contexto terminó.',
    },
    {
      termino: 'Composición',
      significado:
        'Enfoque de diseño donde un objeto se construye a partir de otros componentes ("tiene un") en lugar de heredar ("es un").',
    },
    {
      termino: 'Concurrencia',
      significado:
        'Capacidad de manejar múltiples tareas o conexiones en un intervalo de tiempo, sin necesariamente ejecutarlas todas en paralelo.',
    },
    {
      termino: 'Encapsulación',
      significado:
        'Principio de la Programación Orientada a Objetos (POO) que oculta el estado interno de un objeto y expone operaciones controladas para mantener su integridad.',
    },
    {
      termino: '<em>Event loop</em>',
      significado:
        'Mecanismo de ejecución que gestiona la ejecución de <em>callbacks</em> a través de fases, coordinando eventos de temporizadores y operaciones de Entrada/Salida (I/O) sin bloqueo.',
    },
    {
      termino: 'Inmutabilidad',
      significado:
        'Estrategia donde los datos no se modifican directamente; se crean nuevas versiones del objeto, reduciendo errores por mutación accidental.',
    },
    {
      termino: 'I/O (Entrada/Salida)',
      significado:
        'Operaciones de red, archivos o base de datos que implican esperar respuesta externa.',
    },
    {
      termino: 'Mutabilidad',
      significado:
        'Capacidad de un objeto de cambiar su estado interno después de haber sido creado.',
    },
    {
      termino: 'NPM',
      significado:
        'Gestor de Paquetes de Node (<em>Node Package Manager</em>), utilizado para instalar dependencias y gestionar versiones en proyectos JavaScript.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Mecanismo base de herencia en JavaScript; los objetos pueden delegar la búsqueda de propiedades a su prototipo cuando no las encuentran directamente.',
    },
    {
      termino: '<em>Socket</em>',
      significado:
        'Extremo de comunicación que representa una conexión entre cliente y servidor, usualmente sobre el Protocolo de Control de Transmisión (TCP).',
    },
    {
      termino: 'TCP',
      significado:
        'Protocolo de Control de Transmisión (<em>Transmission Control Protocol</em>). Protocolo orientado a conexión que garantiza entrega confiable y en orden de datos entre dos extremos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Armstrong, J. (2019). Programming Erlang: Software for a concurrent world (2.ª ed.). Pragmatic Bookshelf. ',
    },
    {
      referencia:
        "Crockford, D. (2008). JavaScript: The good parts. O'Reilly Media.",
    },
    {
      referencia:
        'Haverbeke, M. (2020). Eloquent JavaScript: A modern introduction to programming (3.ª ed.). No Starch Press.',
    },
    {
      referencia: 'Mozilla. (s. f.). Arrow function expressions. MDN Web Docs.',
    },
    {
      referencia:
        "Node.js Project. (s. f.). Don't block the event loop (or the worker pool). Node.js Documentation. ",
    },
    {
      referencia:
        "Simpson, K. (2015). You don't know JS: Scope & closures. O'Reilly Media. ",
    },
    {
      referencia:
        "Simpson, K. (2015). You don't know JS: This & object prototypes. O'Reilly Media. ",
    },
    {
      referencia: 'Socket.IO. (s. f.). Redis adapter. Socket.IO Documentation.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
