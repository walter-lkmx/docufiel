<template>
  <default-layout>
    <default-page>

      <simple-hero>
      </simple-hero>

      <text-banner>
        <h2>Tus documentos son comparados en con el original y así mantener su valor probatorio. Esta verificación es
          certificada por la Secretaría de Economía y conforme a la Norma Oficial Mexicana NOM-151-SCFI-2016.</h2>
      </text-banner>

      <text-banner>
        <h3>Beneficios de Docufiel</h3>
      </text-banner>
      
      <card-holder>
        <simple-card>
          <g-image src="~/assets/images/reduccion-costos.png" alt="Reducción de costos"></g-image>
          <h4>Reducción de costos de almacenamiento</h4>
          <p>El servicio permite mejorar la organización y gestión de las presentaciones digitales cotejadas según
          criterios de almacenamiento electrónico ocasionando una reducción de los costos derivados del almacenamiento
          físico.</p>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/destruccion-legal.png" alt="Nav Destrucción legal"></g-image>
          <h4>Destrucción legal de documentos físicos</h4>
          <p>Los archivos cotejados podrán ser preservados por un PSC bajo las condiciones técnicas de conservación
          definidas por la Secretaría de Economía permitiendo la destrucción legal de documentos originales en papel.
          </p>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/mayor-seguridad.png" alt="Nav Mayor seguridad"></g-image>
          <h4>Mayor seguridad sobre los documentos</h4>
          <p>Las digitalizaciones cotejadas son fiel reflejo del contenido original y con plenas garantías de autenticidad e integridad de los datos a lo largo del tiempo.</p>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/validez-juridica.png" alt="Validez jurídica"></g-image>
          <h4>Validez jurídica</h4>
          <p>El servicio permite equiparar los documentos en soporte físico	 y sus representaciones digitales conforme a la normativa regulada por la Secretaría de Economía, dotando a los archivos digitales cotejadas de validez legal ante cualquier requerimiento de terceros</p>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/almacenamiento.png" alt="Almacenamiento NOM151"></g-image>
          <h4>Almacenamiento NOM151</h4>
          <p>Las digitalizaciones cotejadas de los documentos físicos pueden ser conservados bajo un servicio de almacenamiento certificado de larga duración que somete los mensajes de datos y sus constancias NOM151 a permanentes auditorías de conservación.</p>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/mejora-tiempos.png" alt="Mejora de tiempos"></g-image>
          <h4>Mejora de tiempos</h4>
          <p>La automatización de los procesos de cotejo y almacenamiento electrónico controlados por un PSC acreditado como TLA, aumenta la eficiencia de las compañías en términos de productividad y rendimiento relacionados con la gestión interna de documentos.</p>
        </simple-card>
      </card-holder>

    </default-page>
  </default-layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Hello, world!'
    }
  }
</script>

<style lang="scss" scoped>

  .text-banner {
    padding: 32px 0;
    h2 {
      color: $docufiel-green-color;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Cabin', sans-serif;
    }
  }

  .default-page {
    margin-top: 0;
    padding-top: $header-height;
  }

  .simple-hero {
    background-image: url("../assets/images/hero.jpg");
    background-size: cover;
    background-position: center center;
  }
</style>