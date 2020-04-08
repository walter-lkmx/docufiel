<template>
  <default-layout>
    <default-page>

      <simple-hero>
      </simple-hero>

      <text-banner-no-column class="text-banner-no-column">
        <h1 class=""><span>Tus documentos digitalizados son comparados en con el original para verificar</span> <span>su fidelidad y así mantener su valor probatorio. Esta verificación es</span>
          <span>certificada por la Secretaría de Economía y conforme</span> <span>a la Norma Oficial Mexicana NOM-151-SCFI-2016.</span></h1>
      </text-banner-no-column>
      
      <text-banner class="beneficios">
        <h2 class="beneficios__title">Beneficios de Docufiel</h2>
      </text-banner>
      
      <card-holder class="three-columns">
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

      <text-banner class="como-funciona">
        <h2 class="como-funciona__title">¿Cómo funciona?</h2>
        <h3 class="como-funciona__description">Ofrecemos un servicio que permite la destrucción legal de grandes <span>lotes de documentos en papel, conforme a siguiente esquema:</span></h3>
      </text-banner>

      <card-holder class="four-columns">
        <simple-card>
          <g-image src="~/assets/images/documentos.png" alt="Documentos"></g-image>
          <h4>Documentos</h4>
          <p>Entrega de documentos en soporte físico.</p>
        </simple-card>
        <simple-card>
          <g-image src="~/assets/images/digitalizacion.png" alt="Digitalización"></g-image>
          <h4>Digitalización</h4>
          <p>Proceso de duplicación de documento físico o documento digital.</p>
        </simple-card>
        <simple-card>
          <g-image src="~/assets/images/cotejo.png" alt="Cotejo"></g-image>
          <h4>Cotejo</h4>
          <p>Proceso de comparación entre el documento físico y el documento digital por la Secretaría de Economía para garantizar la fidelidad.</p>
        </simple-card>
        <simple-card>
          <g-image src="~/assets/images/certificacion.png" alt="Certificación"></g-image>
          <h4>Certificación</h4>
          <p>Emisión de constancia de conservación a aquellas digitalizaciones que aprueben el proceso de cotejo.</p>
        </simple-card>
      </card-holder>

      <twin-columns class="contact">
        <template v-slot:left>
          <g-image class="contact__logo-icon" src="~/assets/images/icono-logo.png" alt="Docufiel ícono"></g-image>
          <h2>¡Búscanos! <span>Te podemos ayudar</span></h2>
            <div class="contact__address">
              <h3>Dirección</h3>
              <ul>
                <li>Av. Ryerson #454</li>
                <li>Zona Centro, CP 22800</li>
                <li>Ensenada, B.C.</li>
              </ul>
            </div>
            <div class="contact__phone">
              <h3>Teléfono</h3>
              <ul>
                <li>(646) 204 0553</li>
                <li>(646) 204 0659</li>
              </ul>
            </div>
        </template>
        <template class="contact__map" v-slot:right>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3779634212647!2d-116.63093758484698!3d31.869137981255623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d892604bf5ac19%3A0x22090ab138fd3817!2sAv.%20Ryerson%20454%2C%20Zona%20Centro%2C%2022800%20Ensenada%2C%20B.C.!5e0!3m2!1sen!2smx!4v1586291307615!5m2!1sen!2smx" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </template>
      </twin-columns>

    </default-page>
  </default-layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Digitaliza tus documentos y accede a ellos en cualquier lugar'
    }
  }
</script>

<style lang="scss" scoped>
.default-page {
  padding-bottom: 0;
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

.text-banner-no-column {
  padding: $gutter-xxxlarge 0;

  h1 {
    display: block;
    margin: 0 auto;
    color: $docufiel-green-color;
    font-weight: 400;
    line-height: 1.5;
    font-size: $h2-text-size;
    text-transform: initial;

    span {
      display: block;
    }
  }
}

.beneficios {
  &__title {
    margin-bottom: $gutter-xxxlarge;
    font-weight: 700;
    color: $docufiel-blue-color;
  }
}

.three-columns {
  &/deep/.card-holder__content {
    .simple-card {
      img {

        align-self: center;
      }

      h4 {
        align-self: center;
        margin-bottom: 0;
      }
    }

  }
}

.como-funciona {
  &__title {
    margin-bottom: $gutter-xlarge;
    font-weight: 700;
    color: $docufiel-blue-color;
  }

  &__description {
    color: $docufiel-gray-color;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: $gutter-xxxlarge;

    span {
      display: block;
    }
  }
}


.four-columns {
  margin-bottom: $gutter-xxxlarge;
  &/deep/.card-holder__content {
    grid-template-columns: $four-columns;

    .simple-card {
      // grid-row-gap: rem(16px);
      grid-template-rows: $card-template-rows;
      text-align: center;
      justify-content: center;

      img {
        width: auto;
        height: rem(116px);
        margin: 0 auto;
        align-self: center;
      }

      h4 {
        align-self: center;
        margin-bottom: 0;
      }
    }
  }
}

.contact {
  &__logo-icon {
    margin-bottom: $gutter-xlarge;
  }

  h2 {
    margin: 0 0 $gutter-xlarge 0;
    color: $docufiel-blue-color;

    span {
      padding-top: rem(8px);
      display: block;
      font-weight: 400;
    }
  }

  li {
    list-style-type: none;
    margin-bottom: rem(2px);
  }
}

</style>