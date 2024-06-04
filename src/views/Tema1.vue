<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación de proyectos
      
    p Antes de dar inicio al tema se muestra una vista general de lo que sería la evaluación de los proyectos organizado de la siguiente manera:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1. 
      span Estructura de monitoreo
    
    figure(data-aos="fade-down-right")
      img(src="@/assets/curso/temas/tema1/img1.svg", alt="La evaluación de proyectos organizado de manera visual, se formula de la siguiente manera: definición de objetivos, análisis de mercado, análisis técnico operativo, análisis económico-financiero, análisis socio-económico, luego se hace una retroalimentación , resumen y conclusiones para luego tomar decisiones sobre el proyecto.")
    
    .row.my-5
      .col-lg-4
        p La evaluación de proyectos es la herramienta por excelencia de los empresarios para la toma de decisiones, un empresario requiere todo el tiempo de estar analizando diferentes recursos para hacer crecer su inversión de tiempo, dinero, conocimiento y experiencia, es por eso que se vuelve tan importante  como se explica a continuación:
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img2.png", alt='Imagen decorativa')
    
    .row.py-4
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/watch?v=Z9k_kZez1KU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.py-4
      .col-lg-9
        p.mb-4 Se considera que el ciclo de vida de un proyecto finaliza en el momento que se efectúan los desembolsos de efectivo, o sea, cuando se habla de la etapa de ejecución. Sin embargo, la vida de un proyecto consta de otras etapas, resaltando que las fases del proyecto y las actividades de evaluación se relacionan:
        .row
          .col-lg-4.crd.crd--avatarHorizontal.py-3.mb-2
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure(data-aos="fade-right")
                  img.img100(src="@/assets/curso/temas/tema1/img3.svg", alt='Imagen decorativa')
              .col(style="z-index:1")
                h5.m-0 Preparación del proyecto          
          .col-lg-4.crd.crd--avatarHorizontal.py-3.mb-2
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure(data-aos="fade-right")
                  img.img100(src="@/assets/curso/temas/tema1/img23.svg", alt='Imagen decorativa')
              .col(style="z-index:1")
                h5.m-0 Ejecución / Terminación del proyecto          
          .col-lg-4.crd.crd--avatarHorizontal.py-3.mb-2
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure(data-aos="fade-right")
                  img.img100(src="@/assets/curso/temas/tema1/img24.svg", alt='Imagen decorativa')
              .col(style="z-index:1")
                h5.m-0 Operación / Post-proyecto          
      .col-lg-3
        figure(data-aos="fade-right")
          img.img100(src="@/assets/curso/temas/tema1/img25.svg", alt='Imagen decorativa')

    p El ciclo de vida de un proyecto comienza en la etapa de preparación, continuando con la etapa de ejecución y finalizando con la operación, la evaluación se relaciona en cada una de las fases, resaltando que, para cada fase del ciclo de vida del proyecto, se desarrollan las siguientes tareas:

    .row
      .col-lg-4.m-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Infografia_tipos_evaluacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-bold Anexo. Infografía tipos evaluación
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.1 Evaluación de la coherencia y pertinencia del proyecto

    .row.mb-3
      .col-lg-6
        span De acuerdo con Hernández et Al (2019): 
        br
        p La coherencia y pertinencia de un proyecto son consideradas como la forma en la cual se pueden producir los cambios deseados.

        .bloque-texto-b.color-secundario.py-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 La coherencia y la pertinencia es la congruencia que se evidencia entre la prefactibilidad, preparación, objetivos y metas que se quieren lograr con el proyecto
            i.fas.fa-quote-right

        p.my-4 La evaluación de la coherencia y la pertinencia debe realizarse antes de iniciar o aprobar una propuesta, con el fin de validar la medida en la cual se cumplen con las condiciones requeridas para su implementación y hace parte de la evaluación Ex Ante. Las utilidades y la importancia de realizar la evaluación de la coherencia y la pertinencia son:

      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/temas/tema1/img16.png", alt='Imagen decorativa')

    .row.my-4
      .col-lg-3.col-md-12
        .card.p-0.text-center.bgr-card.mb-4
          img.card-img-top(data-aos="zoom-in-up",src='@/assets/curso/temas/tema1/img12.svg', alt='Es necesario realizar la evaluación de la coherencia y pertinencia del proyecto de la siguiente manera: 1. Brinda elementos de juicio para mejor decisión o selección de propuestas de intervenciones sociales.')
          .card-body
            p.text-bold(style="text-align: left") Brinda elementos de juicio para mejor decisión o selección de propuestas de intervenciones sociales.

      .col-lg-3.col-md-12
        .card.p-0.text-center.bgr-card.mb-4
          img.card-img-top(data-aos="zoom-in-up",src='@/assets/curso/temas/tema1/img13.svg', alt='2. Brinda elementos de juicio para mejor decisión o selección de propuestas de intervenciones sociales.')
          .card-body
            p.text-bold(style="text-align: left") Contribuye a mejorar la formulación del proyecto.
      
      .col-lg-3.col-md-12
        .card.p-0.text-center.bgr-card.mb-4
          img.card-img-top(data-aos="zoom-in-up",src='@/assets/curso/temas/tema1/img14.svg', alt='3. Permite formular recomendaciones para la etapa de ejecución.')
          .card-body
            p.text-bold(style="text-align: left") Permite formular recomendaciones para la etapa de ejecución.
      
      .col-lg-3.col-md-12
        .card.p-0.text-center.bgr-card.mb-4
          img.card-img-top(data-aos="zoom-in-up",src='@/assets/curso/temas/tema1/img15.svg', alt='4. Orienta el proceso de monitoreo y evaluación con foco en los procesos.')
          .card-body
            p.text-bold(style="text-align: left") Orienta el proceso de monitoreo y evaluación con foco en los procesos.

    p.my-4 La evaluación de la pertenencia puede realizarse con los siguientes fines:

    .row
      .col-lg-4.crd.crd--avatarHorizontal.py-3.mb-2
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure(data-aos="flip-right")
              img(src="@/assets/curso/temas/tema1/img26.svg", alt='Imagen decorativa', style="width: 100px;")
          .col(style="z-index:1")
            h5.m-0 Adecuación de las acciones y los abordajes planteados respecto a las situaciones problemáticas priorizadas en el diagnostico que se pretende modificar.
      .col-lg-4.crd.crd--avatarHorizontal.py-3.mb-2
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure(data-aos="flip-right")
              img.img100(src="@/assets/curso/temas/tema1/img27.svg", alt='Imagen decorativa')
          .col(style="z-index:1")
            h5.m-0 Adecuación a la teoría del cambio y axiológicas relacionadas con la temática abordada en el proyecto.
      .col-lg-4.crd.crd--avatarHorizontal.py-3.mb-2
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure(data-aos="flip-right")
              img.img100(src="@/assets/curso/temas/tema1/img28.svg", alt='Imagen decorativa')
          .col(style="z-index:1")
            h5.m-0 Adecuación de la propuesta a líneas o políticas que promueven la instancia que considerará la propuesta para su aprobación.

    p.my-4 Mientras, que la coherencia se refiere a la adecuación de:

    .row.py-4
      .col-lg-7
        .row
          .col-lg-6.crd.crd--avatarHorizontal.py-3.mb-4
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure(data-aos="fade-up")
                  img.img100(src="@/assets/curso/temas/tema1/img29.svg", alt='Imagen decorativa')
              .col(style="z-index:1")
                h5.m-0 Los objetivos y metas planteadas en relación con los problemas identificados y priorizados.
          .col-lg-6.crd.crd--avatarHorizontal.py-3.mb-4
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure(data-aos="fade-up")
                  img.img100(src="@/assets/curso/temas/tema1/img30.svg", alt='Imagen decorativa')
              .col(style="z-index:1")
                h5.m-0 Las actividades propuestas para el logro de los objetivos y metas.
        .row
          .col-lg-6.crd.crd--avatarHorizontal.py-3.mb-4
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure(data-aos="fade-up")
                  img.img100(src="@/assets/curso/temas/tema1/img31.svg", alt='Imagen decorativa')
              .col(style="z-index:1")
                h5.m-0 Los recursos en función de las actividades a desarrollar.
          .col-lg-6.crd.crd--avatarHorizontal.py-3.mb-4
            .row.align-items-center
              .col-auto(style="z-index:1")
                figure(data-aos="fade-up")
                  img.img100(src="@/assets/curso/temas/tema1/img32.svg", alt='Imagen decorativa')
              .col(style="z-index:1")
                h5.m-0 Revisión de la vinculación lógica entre problema - objetivos- actividades - recursos.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/tema1/img17.png", alt='Imagen decorativa')

    p.pb-4 Dentro de los principales criterios de pertinencia y coherencia se pueden encontrar:

    .row
      .col-lg-6(data-aos="fade-left")
        .bgr-img.bgr-img-1
          .row.align-items-center.bgr-1
            .col-lg-8.p-5.col-sm-8
              span.text-bold Pertinencia
              br
              p Adecuación de la justificación o fundamentación diagnóstica (población objetivo, problemas y necesidades, recursos disponibles, actores implicados, factores contextuales).
              p Coherencia de la propuesta con relación a las prioridades y recomendaciones del diagnóstico. Adecuación de estrategia con líneas priorizadas

      .col-lg-6(data-aos="fade-right")
        .bgr-img.bgr-img-2
          .row.align-items-center.bgr-1
            .col-lg-8.p-5.col-sm-8
              span.text-bold Coherencia
              br
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Plan de trabajo.
                li 
                  i.lista-ul__vineta
                  | Cronograma.
                li 
                  i.lista-ul__vineta
                  | Seguimiento y evaluación.
                li 
                  i.lista-ul__vineta
                  | Formulación presupuestaria.
                li 
                  i.lista-ul__vineta
                  | Construcciones previstas a las necesidades y la normativa vigente.
                li 
                  i.lista-ul__vineta
                  | Actividades claras para cumplir los objetivos.

    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.2 Análisis de riesgos de proyectos

    p Los análisis de riesgos, permite a través de análisis cuantitativos, medir aspectos cualitativos al asignar valores discrecionales en un rango determinado; un ejemplo de una escala usada frecuentemente es:

    .rating-component(data-aos="fade-down",style="background: #F6F6F6; border-radius: 15px")
      .stars
        img(v-for="star in 5" 
            :key="star" 
            :src="star <= rating ? activeStar : inactiveStar" 
            :alt="`Star ${star}`" 
            @click="setRating(star)"
            class="star")
      .rating-text 
        span.p-1(style="border: 4px solid #707070; border-radius: 10px") {{ ratingText }}

    .row.my-4
      .col-lg-8
        p En el caso de los riesgos se hace referencia a la evaluación de situaciones que potencialmente pueden desviar o debilitar los resultados esperados, con el objetivo de prevenir o mitigar sus efectos. 
        p Un ejemplo sencillo de análisis de riesgos puede ser el de una matriz que enfrente las amenazas posibles (factores externos que pueden afectar el desarrollo del proyecto en cualquiera de sus fases) con la probabilidad estimada de la ocurrencia de un evento y la severidad (gravedad de las consecuencias) de su ocurrencia. Estas amenazas pueden ser las contempladas en un análisis FODA.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img20.png", alt='Imagen decorativa')
    
    .titulo-sexto.my-4.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1. 
      span Ejemplo de análisis de riesgos

    .tabla-b.mb-5(data-aos="zoom-in-up")
      table.text-center.my-4
        thead
          tr
            th(style="background:#EFF5D6;") Tipo
            th(style="background:#DEEBAD;") Riesgo
            th(style="background:#CEE284;") Probabilidad <br> de ocurrencia
            th(style="background:#ADCE32;") Gravedad <br> del impacto
            th(style="background:#0B481E; color:#FFF;") Valor del <br> Riesgo
            th(style="background:#FFA686;") Nivel  <br> de Riesgo
        tbody
          tr
            td Climático
            td Prolongación de las épocas de lluvias más allá de la tercera semana de inicio del ciclo productivo y efecto de las heladas en las primeras cinco semanas.
            td 3
            td 4
            td 20
            td Crítico

    p La descripción de los indicadores de la tabla son los siguientes:

    .row
      .col-lg-7(data-aos="flip-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Tipo:")
            .col-lg-12.mb-4.mb-md-0
              p (físico, ergonómico, logístico, biológico, químico, psicosocial, climático, político, legal, logístico, etc.).
          .row(titulo="Riesgo:")
            .col-lg-12.mb-4.mb-md-0
              p (descripción)
          .row(titulo="Probabilidad de ocurrencia: ")
            .col-lg-12.mb-4.mb-md-0
              p (Rango de 1 a 5, donde: 1: muy baja; 2: baja; 3: media; 4: alta; 5: muy alta).
          .row(titulo="Gravedad del impacto: ")
            .col-lg-12.mb-4.mb-md-0
              p (Rango de 1 a 5, donde: 1: despreciable; 2: considerable; 3: importante; 4: grave; 5: catastrófica).
          .row(titulo="Valor del riesgo:")
            .col-lg-12.mb-4.mb-md-0
              p (Probabilidad x gravedad)
          .row(titulo="Nivel de riesgo:")
            .col-lg-12.mb-4.mb-md-0
              p (Ubicar en la matriz de riesgos) 
      .col-lg-5(data-aos="flip-right")
        figure
          img(src="@/assets/curso/temas/tema1/img33.png", alt='Imagen decorativa')

      .row.text-center.my-5
        .col-lg-6.m-auto.bgr-2
          p.m-0 A continuación, se da un ejemplo de la matriz de evaluación de riesgos que trabaja con colores(rojos) para facilitar su visualización:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1. 
      span Matriz de evaluación de riesgo
        
    .tabla-b.mb-5(data-aos="zoom-in-up")
      table.text-center
        caption.mt-5.mb-4 Nota. SENA 2022
        thead(style="background:#AFAFAF")
          tr
            th(colspan="9")  Matriz de evaluación de riesgo
        tbody
          tr
            th(rowspan="2",colspan="4")
            th(colspan="5",style="background:#E8E8E8") Gravedad del impacto
          tr
            th Despreciable (1)
            th Despreciable (2)
            th Despreciable (3)
            th Despreciable (4)
            th Despreciable (5)
          tr
            th(rowspan="5") Probabilidad de ocurrencia
            td(colspan="2") Muy alta (81-100%)
            td 5
            td(style="background:#ffc1073b") 5
            td(style="background:#ffc10773") 10
            td(style="background:#ffc10773") 15
            td(style="background:#FF4B07") 20
            td(style="background:#FF4B07") 25
          tr 
            td(colspan="2") Alta (61-80%)
            td 4
            td(style="background:#ffc1073b") 4
            td(style="background:#ffc1073b") 8
            td(style="background:#ffc10773") 12
            td(style="background:#ffc10773") 16
            td(style="background:#FF4B07") 20
          tr 
            td(colspan="2") Media (41-60%)
            td 3
            td(style="background:#ffc1073b") 3
            td(style="background:#ffc1073b") 6
            td(style="background:#ffc10773") 9
            td(style="background:#ffc10773") 12
            td(style="background:#ffc10773") 15
          tr 
            td(colspan="2") Media (21-40%)
            td 2
            td 2
            td(style="background:#ffc1073b") 4
            td(style="background:#ffc1073b") 6
            td(style="background:#ffc1073b") 8
            td(style="background:#ffc10773") 12
          tr 
            td(colspan="2") Muy Baja (20%)
            td 1
            td 1
            td 2
            td(style="background:#ffc1073b") 3
            td(style="background:#ffc1073b") 4
            td(style="background:#ffc1073b") 5
          tr
            td(colspan="2") 
              .m-auto.p-2(style="width:100px; background:#FF4B07") &nbsp;
            td(style="text-align:left",colspan="7") <strong>Riesgo crítico:</strong> requiere medidas preventivas urgentes. No se debe iniciar el proyecto sin la confirmación de su prevención o mitigación hasta niveles aceptables
          tr
            td(style="text-align:left",colspan="2") 
              .m-auto.p-2(style="width:100px; background:#ffc10773") &nbsp;
            td(style="text-align:left",colspan="7") <strong>Riesgo grave:</strong> medidas preventivas obligatorias. Se deben controlar fuertemente las variables de riesgo durante el proyecto y diseñar un plan de mitigación.
          tr
            td(style="text-align:left",colspan="2") 
              .m-auto.p-2(style="width:100px; background:#ffc1073b") &nbsp;
            td(style="text-align:left",colspan="7") <strong>Riesgo apreciable:</strong> estudiar y aplicar las posibles medidas preventivas para reducir el nivel de riesgo. Se deben monitorear y controlar las variables.
          tr
            td(style="text-align:left",colspan="2") 
              .m-auto.p-2(style="width:100px; border: 2px solid #707070") &nbsp;
            td(style="text-align:left",colspan="7") <strong>Riesgo marginal:</strong> se vigilará, aunque no requiere medidas preventivas de partida
      
    p El anterior análisis de riesgos contempla lo que no debe ocurrir para que el proyecto se desarrolle como se ha planeado. En el caso de los supuestos se establecen las condiciones y requisitos para que se puedan realizar las actividades, lograr los objetivos y cumplir finalmente con el propósito del proyecto. Es por estas razones que este análisis se hace posteriormente a la definición de los indicadores y el desglose de las actividades. La forma en que se redactan los supuestos que corresponde a la de un objetivo a alcanzar o mantener por parte de quien fuere necesario a pesar de que estos estén fuera del alcance del ejecutor del proyecto. Ejemplo:


    .row.align-items-center.my-4
      .row
        .col-lg-6
          i.fas.fa-quote-right(style="font-size: 2.5em;")
          h2.mb-0 Los precios agrícolas mantienen sus niveles (dentro de una banda de + 10%) en términos reales 
          br
          span Departamento Nacional de Planeación, (2016).
        .col-lg-3
          img(src="@/assets/curso/temas/tema1/img21.svg", alt='Imagen decorativa')

    .row.my-4.pt-4
      .col-lg-5
        p Así mismo, para completar la columna de supuestos de la MML, se recomienda seguir los siguientes pasos: 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            span Identificar todos los supuestos posibles para cada riesgo identificado en el análisis respectivo. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            span Seleccione lo que se consideren verdaderos riesgos a enfrentar.
          li 
            .lista-ol--cuadro__vineta
              span 3
            span Finalmente, de acuerdo a los resultados del análisis de riesgos, establecer las acciones de prevención, mitigación o control para cada factor seleccionado.

      .col-lg-7
        figure
          img(src="@/assets/curso/temas/tema1/img34.png", alt='Imagen decorativa')
    
    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Comprobación lógica de la MML
        
    p Finalmente, para efectos de la comprobación de la lógica de la MML, se debe revisar la coherencia de los vínculos causales de abajo hacia arriba de la matriz (actividades-componentes-objetivos-fin) esto es la lógica vertical, con al menos tres criterios que rezan como sigue a continuación:

    .container.tarjeta.tarjeta--blanca(data-aos="zoom-out")
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img35.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.d-block Se indican claramente el fin, propósito, componentes y actividades del proyecto.
          p.d-block Si se llevan a cabo las actividades y los supuestos de este nivel se ratifican, se obtendrán los componentes.
          p.d-block Cada componente es necesario para lograr el propósito del proyecto y además no falta ningún componente necesario.
          p.d-block Si se producen los componentes y los supuestos a este nivel se conforman, se logrará el propósito de la intervención.
          p.mb-0 Si se logra el propósito y se conforman los supuestos a este nivel, se habrá contribuido de manera significativa a alcanzar el fin.
    
    p.mt-5 El conjunto objetivo-indicadores-medios de verificación define lo que se conoce como lógica horizontal en la matriz de marco lógico (MML), esta puede comprobarse en su lógica a través de los siguientes aspectos:

    .row.mb-5
      figure(data-aos="flip-right")
        img.d-lg-block.d-none(src="@/assets/curso/temas/tema1/img36.png", alt='Imagen decorativa')
        img.d-lg-none.d-block(src="@/assets/curso/temas/tema1/img61.png", alt='Imagen decorativa')

    .row.pt-4
      p La gráfica que sigue nos enseña la forma de lectura global de la MML, la relación entre las distintas partes que componen la matriz y cómo en una sola herramienta se logra visualizar de manera general todo un proyecto, sin duda uno de los aspectos positivos de la metodología:

    figure(data-aos="slide-up")
      img(src="@/assets/curso/temas/tema1/img37.svg", alt="Podemos apreciar de manera global los aspectos positivos de la metodología: FIN: supuestos sobre sostenibilidad. PROPÓSITO: supuestos propósitos- fin. COMPONENTES: supuestos componentes-propósito. ACTIVIDADES: supuestas actividades- componentes.")

    .row.mt-5
      .col-lg-4.m-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Matriz_de_evaluacion_de_riesgo.png')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-bold Anexo.  Matriz de marco lógico
    
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.3. Evaluación técnica
    
    p El estudio técnico puede subdividirse en cuatro partes, que son: 

    TabsA.color-acento-contenido
      .tarjeta.color-acento-contenido--borde.p-4(style="background: #FFE9E1",titulo="Tamaño óptimo")
        .row
          .col-lg-8
            p La determinación de un tamaño óptimo es fundamental en esta parte del estudio. Cabe aclarar que tal determinación es difícil, las técnicas existentes para su determinación son subjetivas en su gran mayoría y no existe un método preciso y directo para hacer el cálculo. El tamaño también depende de los turnos a trabajar, ya que para cierto equipo la producción varía directamente de acuerdo con el número de turnos que se trabaje.
          .col-lg-4
            figure
              img(src="@/assets/curso/temas/tema1/img38.png", alt='Imagen decorativa')
      .tarjeta.color-acento-contenido--borde.p-4(style="background: #FFE9E1", titulo="Localización óptima")
        .row
          .col-lg-8
            strong Localización óptima <br>
            | Acerca de la determinación de la localización óptima del proyecto, “es necesario tomar en cuenta no sólo factores cuantitativos, como los costos de transporte de materia prima y del producto terminado, sino también los factores cualitativos, tales como apoyos fiscales, el clima, la actitud de la comunidad” Baca (2013), y otros. 

          .col-lg-4
            figure
              img(src="@/assets/curso/temas/tema1/img65.png", alt='Imagen decorativa')
      .tarjeta.color-acento-contenido--borde.p-4(style="background: #FFE9E1", titulo="Ingeniería")
        .row
          .col-lg-8
            strong Ingeniería <br>
            | En términos técnicos, existen diversos procesos productivos opcionales, que son los muy automatizados y los manuales. La elección de alguno de ellos dependerá en gran parte de la disponibilidad de capital. En esta misma parte se engloban otros estudios, como el análisis y la selección de los equipos necesarios, dada la tecnología elegida; en seguida, la distribución física de tales equipos en la planta, así como la propuesta de la distribución general.

          .col-lg-4
            figure
              img(src="@/assets/curso/temas/tema1/img64.png", alt='Imagen decorativa')
      .tarjeta.color-acento-contenido--borde.p-4(style="background: #FFE9E1", titulo="Organización")
        .row
          .col-lg-8
            strong Organización <br>
            | Algunos de los aspectos que no se analizan con profundidad en los estudios de factibilidad son el organizativo, el administrativo y el legal. Esto se debe a que son considerados aspectos que por su importancia y delicadeza merecen ser tratados a fondo en la etapa de proyecto definitivo. Esto no implica que deba pasarse por alto, sino, simplemente, se hace una relación general de la empresa en términos organizacionales.

          .col-lg-4
            figure
              img(src="@/assets/curso/temas/tema1/img66.png", alt='Imagen decorativa')
    p.my-3 Para ayudar a la realización de este análisis se trabajan los conceptos que se tratan a continuación en los que se establece la claridad de lo que se puede hacer a la hora de hacer el análisis financiero:

    ImagenInfografica.color-primario(data-aos="zoom-out-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img22.png', alt='Es importante a la hora de hacer un análisis financiero tener en cuenta los conceptos que se explican a continuación de la imagen.')

      .tarjeta.color-acento-botones.p-3(x="25%" y="44%" numero="1")
        .h5.mb-2 Tamaño:
        p Se analiza el tamaño óptimo de la planta, es su capacidad instalada, y se expresa en unidades de producción por año. Se considera óptimo cuando opera con los menores costos totales o la máxima rentabilidad económica. Se tiene en cuenta para el tamaño general el tamaño del proyecto y la demanda; el tamaño del proyecto y los suministros e insumos; el tamaño del proyecto, la tecnología y los equipos; el tamaño del proyecto y el financiamiento; y el tamaño del proyecto y la organización. 

      .tarjeta.color-acento-botones.p-3(x="45%" y="44%" numero="2")
        .h5.mb-2 Ingeniería:
        p Es el características que identifica el proceso de producción, la tecnología de fabricación, el análisis del proceso, ahí se presentan las opciones de adquisición por parte de la empresa de tecnología. Si se va a comprar un equipo nuevo se deben revisar los proveedores, precios, capacidad, costo mantenimiento, consumo de energía, facilidad de uso o capacitación y otros elementos que faciliten la toma de decisión de compras.

      .tarjeta.color-acento-botones.p-3(x="64%" y="44%" numero="3")
        .h5.mb-2 Localización:
        p La localización óptima de un proyecto es lo que contribuye en mayor medida a que se logre la mayor tasa de rentabilidad sobre el capital (criterio privado) o a obtener el costo unitario mínimo (criterio social). Se puede usar un método de observación en el que la persona revisa las variables de donde está la planta y si es posible o no cambiarla, de no ser posible cambiarla de sitio se intenta gestionar toda la logística necesaria para economizar los trayectos pera la entrega de materiales entre otros factores que se dificultan por la localización.
      
      .tarjeta.color-acento-botones.p-3(x="83%" y="44%" numero="4")
        .h5.mb-2 Producción:
        p Es la sumatoria de las anteriores características permitiendo ver el nivel de real de uso de los recursos y su posible optimización.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.4. Evaluación financiera

    p La evaluación financiera de proyectos puede considerarse como

    .row.mb-5(data-aos="fade-down")
      .col-lg-7
        .bloque-texto-c.p-4(style="background: rgba(255, 166, 134, 0.25);")
          i.fas.fa-quote-right(style="color: #CEE284;")
          h4.mb-2 "el ejercicio mediante el cual se identifican los costos y beneficios de un proyecto, con la finalidad de tomar la decisión más acertada"
      .col-lg-5
        p La evaluación financiera, permite identificar si el proyecto es viable, dada sus inversiones, sus ingresos y egresos durante un periodo de tiempo, reconociendo sus pérdidas o ganancias; esta evaluación se efectúa a través de criterios como el valor presente neto (VPN), la Tasa Interna de Retorno (TIR) y la relación Costo – Beneficio, esto lo podemos apreciar en la figura que se propone a continuación:

    .row.mb-3
      .col-lg-3
          div.bgr-tarjeta-numero(data-aos="fade-up", style='display: flex; align-items: center; ')
            img.img-ajuste(src='@/assets/curso/temas/tema1/img8.svg', width='24px',height='24px', alt='La evaluación de criterios se evalúa de la siguientes maneras: 1.Flujo de inversión')
            span(style='width:100%') Flujo de inversión

      .col-lg-3
          div.bgr-tarjeta-numero(data-aos="fade-down", style='display: flex; align-items: center; ')
            img.img-ajuste(src='@/assets/curso/temas/tema1/img9.svg', width='24px',height='24px', alt='2.Flujo de producción')
            span(style='width:100%') Flujo de producción
      
      .col-lg-3
          div.bgr-tarjeta-numero(data-aos="fade-left", style='display: flex; align-items: center; ')
            img.img-ajuste(src='@/assets/curso/temas/tema1/img10.svg', width='24px',height='24px', alt='3.Adopción de criterios TIR, VPN, B/C')
            span(style='width:100%') Adopción de criterios TIR, VPN, B/C
      
      .col-lg-3
          div.bgr-tarjeta-numero(data-aos="fade-down", style='display: flex; align-items: center; ')
            img.img-ajuste(src='@/assets/curso/temas/tema1/img11.svg', width='24px',height='24px', alt='4.Análisis')
            span(style='width:100%') Análisis
    
    .row.mt-4
      p.mt-4 La imagen anterior esquematiza el proceso de la evaluación financiera, la cual parte de un flujo de inversiones, ya sean de índole público o privado, pasando por una evaluación de indicadores financieros (VAN, TIR, R B/C), finalizando con el análisis respectivo, que permita tomar la decisión de llevar a cabo o no la ejecución del proyecto.

    div.my-4
      span.bgr-tarjeta--verde Indicadores financieros para evaluar proyectos

    .row.mb-5
      .col-lg-6
        p A la hora de hablar de indicadores financieros, “es importante decir, que un indicador es aquella variable que intenta medir de forma cuantitativa o cualitativa características o comportamientos reales” Baca (2013). En el momento de analizar si es pertinente realizar o no un proyecto de inversión, es necesario utilizar ciertos indicadores financieros, los cuales permitirán establecer la viabilidad del proyecto.

        p Para efectuar un correcto análisis de la situación financiera del proyecto, es necesario efectuar los tres indicadores propuestos, aunque estos de manera individual tienen sus pros y sus contras, analizados de manera conjunta permite tomar decisiones basadas en los resultados.

        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto(data-aos="fade-up-left")
            i.fas.fa-quote-left
            h3.mb-0 Los indicadores financieros que se utilizan con mayor frecuencia para la evaluación de proyectos de inversión son: valor Presente Neto (VAN), Tasa Interna de Retorno (TIR) y la Relación Costo - Beneficio. 
            i.fas.fa-quote-right
      .col-lg-6
        figure(data-aos="fade-down-left")
          img(src='@/assets/curso/temas/tema1/img39.svg')
      
    div.my-4
      span.bgr-tarjeta--verde Valor actual neto o valor presente neto (VAN)

    p El Valor Presente Neto es el valor que resulta de traer los flujos netos al valor presente con la tasa de interés de oportunidad y restarle las inversiones; esta función se puede calcular en el programa de office Excel, con la función financiera llamada VNA.

    .row.mb-2
      p.mb-4 Para interpretar el valor presente neto se dice que:

    .row.my-4.text-center
      .col-lg-4.p-3
        .tarjeta--boton.color-primario.p-4(style="max-height: 90%; background: #EFF5D6")
          .col-lg-7.m-auto(style='position:relative;top:-50px')
            figure(data-aos="fade-up-left")
              img(src='@/assets/curso/temas/tema1/img5.svg', width='75px',height='75px', alt='Para interpretar el valor neto se dice que: 1. Si el valor presente neto es mayor a 0 se acepta el proyecto.')
          .row.justify-content-center.mb-3
              p Si el valor presente neto es mayor a cero se acepta el proyecto.
      .col-lg-4.p-3
        .tarjeta--boton.color-primario.p-4(style="max-height: 90%; background: #FFE9E1")
          .col-lg-7.m-auto(style='position:relative;top:-50px')
            figure(data-aos="fade-down-right")
              img(src='@/assets/curso/temas/tema1/img6.svg', width='75px',height='75px', alt='2. Si el valor presente neto es menor a 0 se rechaza el proyecto.')
          .row.justify-content-center.mb-3
              p Si el valor presente neto es menor a cero se rechaza el proyecto.
      .col-lg-4.p-3
        .tarjeta--boton.color-primario.p-4(style="max-height: 90%; background: #ffc1071f")
          .col-lg-7.m-auto(style='position:relative;top:-50px')
            figure(data-aos="fade-up-left")
              img(src='@/assets/curso/temas/tema1/img7.svg', width='75px',height='75px', alt='3. Si el valor presente neto es igual a 0 se es diferente el proyecto y queda a criterio del evaluador aceptarlo.')
          .row.justify-content-center.mb-3
              p Si el valor presente neto es igual a cero se es indiferente el proyecto y queda a criterio del evaluador aceptarlo.

    p La valoración como se ha dicho desde antes se hace para facilitar la toma de decisiones como se muestra en la siguiente tabla:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2. 
      span Valoración VNA

    .row
      table.text-center.mb-4(data-aos="zoom-out")
        thead
          tr
            th(style="background:#EFF5D6") Valor	
            th(style="background:#DEEBAD") Significado
            th(style="background:#ADCE32") Decisión
        tbody
          tr 
            td VNA > 0
            td La inversión producirá ganancias
            td Se acepta el proyecto
          tr
            td VNA < 0
            td La inversión no producirá ganancias
            td Se rechaza el proyecto
          tr
            td VNA = 0
            td La inversión no producirá ni ganancias ni pérdidas
            td El proyecto es indiferente y si se hace es porque se basan en otros criterios.

    p.mb-4 La descripción de los indicadores de la tabla son los siguientes:
  
    .tabla-b
      table.my-4
          tr
            th 
            th(style="background:#FFE9E1") Valor	
            th(style="background:#FFD3C3") Periodo 1
            th(style="background:#FFBCA4") Periodo 2
            th(style="background:#FFA686") Periodo 3
            th(rowspan="3", style="background: #EFF5D6") Tasa de oportunidad 18%.
          tr 
            td Inversión inicial
            td $10.000.000
            td 
            td 
            td 
          tr
            td Flujo neto
            td $-10.000.000
            td $12.000.00
            td $6.500.000
            td $8.700.000
    
    div.mt-4.mb-4
      span.bgr-tarjeta--verde ¿Cómo calcular el Valor Presente Neto?

    p.my-4 Para calcular lo primero que deben hacer es pasar los datos al archivo en Excel, como se muestra en el siguiente recurso. 

    .row.my-2
      SlyderA(data-aos="zoom-in-left", tipo="b")
        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 Paso 1
            p Para calcular lo primero que deben hacer es pasar los datos al archivo en Excel, como se muestra en la siguiente figura.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img40.png', alt='Imagen decorativa')
        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 Paso 2
            p Después de tener los datos en el archivo de Excel se procede a digitar igual seguido de la palabra VAN y se le da clic en insertar función, como lo ilustra la figura.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img41.png', alt='Imagen decorativa')
        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 Paso 3
            p Ahora se debe dar clic en insertar función aparece en el cuadro de diálogo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img42.png', alt='Imagen decorativa')

        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 Paso 4
            p En la celda de Tasa se refiere a la tasa de oportunidad, la celda de valores, corresponden a los flujos netos, como se ilustra en la presente imagen.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img43.png', alt='Imagen decorativa')

        .row.align-items-center.p-5(style="background:#FFE9E1;")
          .col-md-6.mb-4.mb-md-0
            h4 Paso 5
            p Finalmente, al resultado se le suma el flujo neto de la inversión, correspondiente al periodo 0.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img44.png', alt='Imagen decorativa')

    div.my-4
      span.bgr-tarjeta--verde Tasa Interna de Retorno (TIR)

    .row.mb-5
      .col-lg-6
        p La Tasa Interna de Retorno (TIR), es el reflejo de la tasa de interés o de rentabilidad que el proyecto arrojará periodo a periodo durante su vida útil.
        p La TIR se compara con la tasa de oportunidad y se aceptan aquellos proyectos en los que la TIR es igual o superior.
        p Para interpretar la TIR se debe trabajar la decisión según el valor:

      .col-lg-6
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/img45.png', alt='Imagen decorativa')

    .row
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 4. 
        span Valoración VNA

    table.tabla-cebra.text-center(data-aos="zoom-in-right")
      caption.mt-5.mb-4 Nota. SENA 2022
      thead
        tr
          th(colspan=2,style="background:#FFA686") Valoración VNA
        tr
          th(style="background:#FFE9E1") Valor 
          th(style="background:#FFD3C3") Decisión
      tbody
        tr
          td TIR > tasa interés de oportunidad
          td Se acepta el proyecto.
        tr
          td TIR <tasa interés de oportunidad
          td Se rechaza el proyecto.
        tr
          td TIR = tasa interés de oportunidad
          td Se es indiferente frente al proyecto, y la decisión del si se acepta o se rechaza, debería ser tomada basada en otros criterios.
      
    .row.my-2
      .col-lg-4
        p Un ejemplo sería el siguiente: 
        | Para realizar un proyecto, una empresa tiene que realizar una inversión inicial de $10.000, de la que espera obtener dos flujos de caja, uno de $4.000 el primer año y otro de $9.000 el segundo año. Para calcular la tasa interna de retorno se iguala VAN a cero:
      .col-lg-8
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema1/img46.svg', alt='Imagen decorativa')
    .row.mt-4
      p La TIR es la incógnita que hay que calcular y resolver. Por lo tanto, la tasa interna de retorno es igual a 0,17, por lo que la rentabilidad de la inversión será del 17%.
      p Otra forma de calcular la TIR pero esta vez en Excel es la siguiente, para este caso se trabaja otro ejemplo :


    SlyderA.mt-5(data-aos="fade-down", tipo="b")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 1
          p Para calcular lo primero que deben hacer es pasar los datos al archivo en Excel, como se muestra en la siguiente figura.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img47.png', alt='Imagen decorativa')

      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 2
          p Después de tener los datos en el archivo de Excel se procede a digitar igual seguido de la palabra TIR y se le da clic en insertar función, como lo ilustra la figura.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img48.png', alt='Imagen decorativa')
      
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 3
          p Después de dar clic en insertar función aparece el siguiente cuadro de diálogo.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img49.png', alt='Imagen decorativa')
      
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 4
          p En la celda de Valores se deben seleccionar todos los flujos netos incluyendo el periodo 0, como se ilustra en la presente figura
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img50.png', alt='Imagen decorativa')
      
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 5
          p Finalmente, se le da enter y se obtiene el resultado correspondiente a la TIR, como se muestra en la siguiente figura.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img51.png', alt='Imagen decorativa')

    div.my-4
      span.bgr-tarjeta--verde Relación Beneficio - Costo R B/C

    p Un ejemplo sería el siguiente:  Para realizar un proyecto, una empresa tiene que realizar una inversión inicial de $10.000, de la que espera obtener dos flujos de caja, uno de $4.000 el primer año y otro de $9.000 el segundo año. 

    p Para calcular la tasa interna de retorno se iguala VAN a cero:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 6. 
      span Flujo neto para cálculo de la R B/C
    
    .row.my-2
      .col-lg-8
        table.text-center(data-aos="fade-down")
          caption.mt-5.mb-4 Nota. SENA 2022
          thead
            tr
              th(colspan=4, style="background: #EFF5D6") Flujo de caja
            tr
              th(style="background: #DEEBAD") Periodo
              th(style="background: #CEE284") Inversión
              th(style="background: #ADCE32") Ingresos
              th(style="background: #0B481E; color: #FFF") Egresos 
          tbody
            tr
              td 0
              td $ 10.000.000
              td 0
              td 0
            tr
              td 1
              td 
              td 8.500.000
              td 2.500.000
            tr
              td 2
              td 
              td 5.00.000
              td 3.200.000
            tr
              td 3
              td 
              td 12.500.000
              td 5.800.000
            tr
              td 4
              td 
              td 10.200.000
              td 7.400.000
            tr
              td 5
              td 
              td 8.700.000
              td 4.250.000
            
      .col-lg-4
        table.mb-4
          tr
            td(style="background:#CEE284") Inversión
            td(style="background:#EFF5D6") $ 10.000.000
          tr
            td(style="background:#FFBCA4") Tasa de descuento
            td(style="background:#FFE9E1") 18%

        table
          tr
            td(style="background:#FFE9E1") VNA Ingresos
            td
          tr
            td(style="background:#FFD3C3") VNA Egresos
            td
          tr
            td(style="background:#FFBCA4") VNA + Inversión
            td
          tr
            td(style="background:#FFA686") Beneficio - Costo
            td

    div.my-4
      span.bgr-tarjeta--verde Relación Beneficio - Costo R B/C

    p ¿Cómo calcular la relación Beneficio - Costo?:

    SlyderA(data-aos="zoom-in", tipo="b")
      .row.align-items-center.p-5
        .col-md-6.mb-4.mb-md-0
          h4 Paso 1
          p Para calcular lo primero que deben hacer es pasar los datos al archivo en Excel, como se muestra en la siguiente figura:	
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img52.png', alt='Imagen decorativa')
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 2
          p Se procede a efectuar el VNA de los ingresos como se muestra a continuación:
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img53.png', alt='Imagen decorativa')
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 3
          p Se oprime la celda enter y se obtiene el resultado respectivo.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img54.png', alt='Imagen decorativa')
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 4
          p Se procede a efectuar el mismo procedimiento con los egresos.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img55.png', alt='Imagen decorativa')
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 5
          p Al darle enter se obtiene el valor del VNA de los Egresos.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img56.png', alt='Imagen decorativa')
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 6
          p Luego se procede a sumar el VNA de los Egresos con la inversión
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img57.png', alt='Imagen decorativa')
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          h4 Paso 7
          p Finalmente, la R B/C, se determina dividiendo el VNA de los Ingresos con el VNA de los Egresos + Inversión.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img58.png', alt='Imagen decorativa')
      
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.5. Evaluación económica y social
    
    .row.py-3
      .col-lg-8
        p La evaluación económica y social, es aquella que permite identificar las cualidades que tiene un proyecto, indiferente de la situación financiera, por lo que no es un factor relevante, la distribución de las utilidades, tiene como propósito, identificar el impacto que del proyecto sobre el bienestar económico del país. Revisando el aporte de Puentes (2011) la evaluación económica difiere de la evaluación financiera, la primera pretende medir el rendimiento del proyecto en términos de recursos reales para la sociedad, la segunda se estima el rendimiento de un proyecto.

        p Para efectuar la evaluación económica y social se deben utilizar la Tasa Social de Descuento (TSD), que para el caso de Colombia se ha calculado en el 12%, queriendo decir con esto, que la rentabilidad esperada en el proyecto de inversión pública debe estar por encima de este valor. De igual forma, para la evaluación económica y social se debe medir con los costos verdaderos de oportunidad y no con los costos del mercado, estos se conocen como precios sombra o precios cuenta.

        p Para proceder a realizar la evaluación económica y social se deben tener en cuenta, el anexo: Actualización de la estimación de los indicadores “Razón Precio-Cuenta”.
      .col-lg-4
        figure(data-aos="fade-up-right")
          img(src='@/assets/curso/temas/tema1/img59.png', alt='Imagen decorativa')
    
    div.my-4
      span.bgr-tarjeta--verde Diferencias entre el análisis financiero y el económico y social

    p De acuerdo a lo evidenciado en la evaluación de un proyecto, se denotan diferencias significativas entre la evaluación financiera y la evaluación económica y social, como se muestra a continuación :

    figure(data-aos="zoom-in-right")
      img(src='@/assets/curso/temas/tema1/img60.svg', alt='3. Si el valor presente neto es igual a 0 se es diferente el proyecto y queda a criterio del evaluador aceptarlo.')
    
    p Finalmente, la evaluación de proyectos permite estimar los costos y beneficios desde la óptica financiera y los costos y beneficios económicos desde la óptica económica, se construyen los indicadores financieros, los cuales de acuerdo a los resultados obtenidos (viable o no viable), permiten tomar la decisión de continuar con el proyecto.

    .row
      .col-lg-4.m-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Infografia_analisis_economico_social.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.text-bold Anexo. Infografía análisis económico social
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data() {
    return {
      rating: 1, // Inicializamos con la primera estrella seleccionada
      activeStar: require('@/assets/curso/temas/tema1/img62.svg'), // Ruta de la imagen de estrella encendida
      inactiveStar: require('@/assets/curso/temas/tema1/img63.svg'), // Ruta de la imagen de estrella apagada
      ratingTexts: [
        '1=muy bajo',
        '2=bajo',
        '3=moderado',
        '4=alto',
        '5=muy alto',
      ],
    }
  },
  computed: {
    ratingText() {
      return this.rating > 0 ? this.ratingTexts[this.rating - 1] : ''
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    setRating(star) {
      this.rating = star
    },
  },
}
</script>

<style lang="sass">
.rating-component
  text-align: center
  font-family: Arial, sans-serif
  padding: 20px

.stars
  display: flex
  justify-content: space-around
  cursor: pointer
  max-width: 90vw
  margin: 0 auto

.star
  flex: 1 // Permitir que las estrellas crezcan uniformemente
  max-width: 50px
  height: auto
  margin: 0 5px


.rating-text
  margin-top: 10px
  font-size: 1.2rem
</style>
