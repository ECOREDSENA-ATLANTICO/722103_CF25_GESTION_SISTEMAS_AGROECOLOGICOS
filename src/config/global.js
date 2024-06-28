export default {
  global: {
    componenteFormativo:
      'Evaluación financiera y análisis de riesgos para proyectos agroecológicos',
    descripcionCurso:
      'La evaluación de los proyectos está en la construcción y desarrollo de todos los proyectos, esta evaluación es la que muestra que todos los elementos planeados están funcionando tal como se predijo, esa es la realidad que muestra el impacto del programa, esta evaluación se hace en varios elementos como se muestra en el presente componente formativo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Evaluación de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evaluación de la coherencia y pertinencia del proyecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis de riesgos de proyectos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Evaluación técnica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Evaluación financiera',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: ' Evaluación económica y social',
            hash: 't_1_5',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF25_DU.zip',
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
  complementario: [
    {
      tema: '1. Evaluación de proyectos',
      referencia:
        'Corporación Industrial Minuto de Dios. (27 de agosto de 2019). Pasos para evaluar la viabilidad de un proyecto. Obtenido de https://www.youtube.com/watch?v=1KGrhs6CrdI',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1KGrhs6CrdI&ab_channel=Corporaci%C3%B3nIndustrialMinutodeDios',
    },

    {
      tema: '1.2. Análisis de riesgos de proyectos.',
      referencia:
        'FINAGRO. (2019). Riesgos Agropecuarios. Obtenido de https://www.youtube.com/watch?v=on3TD-HDG_k&ab_channel=FINAGRO',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=on3TD-HDG_k&ab_channel=FINAGRO',
    },

    {
      tema: '1.4. Evaluación financiera',
      referencia:
        'Universidad de Antioquia. (2018). Formulación y evaluación de proyectos. Obtenido de https://www.youtube.com/watch?v=xpxj8j8Ols0&ab_channel=Udearroba',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xpxj8j8Ols0&ab_channel=Udearroba',
    },
  ],
  glosario: [
    {
      termino: 'Alcance',
      significado:
        'es el trabajo que tiene que ser hecho para entregar los resultados planteados. Se refiere a los requerimientos a satisfacer en el proyecto.',
    },
    {
      termino: 'Costo-beneficio',
      significado:
        'es la efectividad de un proyecto en función de los costos. Criterio de evaluación que establece la relación entre los recursos asignados y los objetivos alcanzados. También se usan las expresiones costo - eficacia y costo - efectividad.',
    },
    {
      termino: 'Indicadores',
      significado:
        'operativos extraídos a partir de los objetivos y resultados que pretenden cuantificar y mostrar el impacto que el proyecto está teniendo en sus diferentes aspectos (beneficiarios, calidad, cantidad, tiempo, etcétera).',
    },
    {
      termino: 'Proyecto',
      significado:
        'es un trabajo o esfuerzo que se ejecuta una sola vez y que persigue un fin específico, y tiene como característica principal producir resultados únicos como un producto o un servicio.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'probabilidad que tiene un proyecto de aportar un nivel aceptable de beneficios a sus destinatarios una vez finalizada la ayuda comunitaria.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
    {
      referencia:
        'Baca Urbina, G. (2013). Evaluación de proyectos (Séptima ed.). México: Mc Graw Hill.',
      link:
        'downloads/LIBRO-Evaluacion-de-proyectos-7ma-Ed-Gabriel-Baca-Urbina_.pdf',
    },
    {
      referencia:
        'Corporación Industrial Minuto de Dios. (27 de agosto de 2019). Pasos para evaluar la viabilidad de un proyecto.',
      link:
        'https://www.youtube.com/watch?v=1KGrhs6CrdI&ab_channel=Corporaci%C3%B3nIndustrialMinutodeDios',
    },
    {
      referencia:
        'Departamento Nacional de Planeación, (2016). Documento guía del módulo de capacitación en teoría de proyectos.',
      link: 'downloads/Documento_Base_Presupuesto.pdf',
    },
    {
      referencia: 'FINAGRO. (2019). Riesgos Agropecuarios.',
      link: 'https://www.youtube.com/watch?v=on3TD-HDG_k&ab_channel=FINAGRO',
    },
    {
      referencia:
        'Hernández Diaz, G. A., Matamoros Cárdenas, M. y Sánchez Segura, A. F. (2019). Actualización de la estimación de los indicadores “Razón Precio-Cuenta”. Dirección de estudios económicos.',
      link: '',
    },
    {
      referencia:
        'Puentes Montañez, G. A. (2011). Formulación y Evaluación de Proyectos Agropecuarios. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Universidad de Antioquia. (9 de julio de 2018). Formulación y evaluación de proyectos.',
      link: 'https://www.youtube.com/watch?v=xpxj8j8Ols0&ab_channel=Udearroba',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },

        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Rafael Pérez Meriño',
          cargo: 'Desarrollo Fullstack ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Valencia Ebrat',
          cargo: 'Validación de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
