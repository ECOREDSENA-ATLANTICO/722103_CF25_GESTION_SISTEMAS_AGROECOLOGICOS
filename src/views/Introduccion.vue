<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      p Los proyectos pueden evaluarse desde dos perspectivas, una para proyectos de inversión privada y la segunda para proyectos sociales, esto dependerá de quien efectúe la inversión. Los resultados de la evaluación del proyecto determinarán su tipología, es decir rentabilidad o beneficios, a continuación, se da la introducción al temario:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xuq1NmLb9Q8?si=TewvOK_qLdEq4-H3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
