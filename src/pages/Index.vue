<template>
  <default-layout>
    <default-page>
      <simple-hero>
      </simple-hero>
      <text-banner-no-column class="text-banner-no-column">
          <h1 class=""><span>En DOCUFIEL, brindamos los servicios de Digitalización de documentos;</span> <span>Inventario y conciliación de activos. Etiquetado y plaqueo de activos;</span> <span>y Valuación de activos tangibles e intangibles.</span></h1>
      </text-banner-no-column>
      
      <card-holder-mixed-columns class="three-columns no-icons">
        <simple-card>
          <h4>Digitalización de documentos</h4>
          <p>Digitalizamos todos los tamaños de documentos en forma masiva, como carta, oficio y doble carta; así como tamaños especiales, ya sean pedimentos, facturas cheques, boletos, entre otros. Así mismo, nos especializamos en la digitalización de todo tipo de planos arquitectónicos, industriales, eléctricos, entre otros.</p>
        </simple-card>
        <simple-card>
          <h4>Inventario y conciliación de activos, etiquetado y plaqueo de activos</h4>
            <p>Tener un buen y completo inventario brinda información contable confiable para la toma de decisiones y permite establecer planes de optimización y gestión de usos de activos. </p>
            <p>El inventario se puede realizar sobre todos los activos identificables de la compañía: propiedades inmobiliarias, instalaciones, maquinarias, equipos de cómputo, muebles y útiles, accesorios y enseres diversos, obras civiles, existencias, entre otros.</p>
        </simple-card>
        <simple-card>
          <h4>Valuación de activos tangibles e intangibles</h4>
          <p>Una correcta valoración contable de los activos en el balance de las compañías es clave desde un punto de vista financiero y fiscal. Valuamos todo tipo de activos, maquinaria y equipo, inmuebles, intangibles, entre otros.</p>
        </simple-card>
      </card-holder-mixed-columns>

      <text-banner class="beneficios">
        <h2 class="beneficios__title">Ventajas de los servicios de DOCUFIEL</h2>
      </text-banner>
      
      <card-holder-mixed-columns class="three-columns">
        <simple-card>
          <g-image src="~/assets/images/validez-juridica.png" alt="Validez jurídica"></g-image>
          <h4>Validez jurídica</h4>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/almacenamiento.png" alt="Almacenamiento NOM151"></g-image>
          <h4>Almacenamiento NOM151</h4>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/mejora-tiempos.png" alt="Mejora de tiempos"></g-image>
          <h4>Mejora de tiempos</h4>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/reduccion-costos.png" alt="Reducción de costos"></g-image>
          <h4>Reducción de costos de almacenamiento</h4>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/destruccion-legal.png" alt="Nav Destrucción legal"></g-image>
          <h4>Destrucción legal de documentos físicos</h4>
        </simple-card>

        <simple-card>
          <g-image src="~/assets/images/mayor-seguridad.png" alt="Nav Mayor seguridad"></g-image>
          <h4>Mayor seguridad sobre los documentos</h4>
        </simple-card>
      </card-holder-mixed-columns>

      <text-banner class="como-funciona">
        <h2 class="como-funciona__title">¿Cómo funciona?</h2>
        <h3 class="como-funciona__description">Ofrecemos un servicio que permite la destrucción legal de grandes <span>lotes de documentos en papel, conforme a siguiente esquema:</span></h3>
      </text-banner>

      <card-holder-mixed-columns class="four-columns">
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
      </card-holder-mixed-columns>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3779634246475!2d-116.63094294928199!3d31.869137981163615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d892604bf5ac19%3A0x22090ab138fd3817!2sAv.%20Ryerson%20454%2C%20Zona%20Centro%2C%2022800%20Ensenada%2C%20B.C.!5e0!3m2!1sen!2smx!4v1586384926850!5m2!1sen!2smx" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </template>
      </twin-columns>

    </default-page>
  </default-layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'En esta era digital, ya es tiempo de dejar el papel atrás; en DOCUFIEL llevamos a tu empresa al mundo digital, paperless.'
    }
  }
</script>


<style lang="scss" scoped>

.default-page {
  margin-top: 0;
  padding: 0;
  padding-top: $header-height;
}

.simple-hero {
  background-image: url("../assets/images/hero.jpg");
  background-size: cover;
  background-position: center center;
}

.text-banner-no-column {
  padding: $gutter-xxxlarge 0;
  @include respond-to("small and down") {
    padding: $gutter-xlarge $gutter-small;
  }
  h1 {
    display: block;
    margin: 0 auto;
    color: $docufiel-green-color;
    font-weight: 400;
    line-height: 1.5;
    font-size: $h2-text-size;
    text-transform: initial;
    @include respond-to("small and down") {
      font-size: $h4-text-size;
    }
    span {
      display: block;
      @include respond-to("medium and down") {
        display: inline;
      }
    }
  }
}

.beneficios {
  &__title {
    margin-bottom: $gutter-xxxlarge;
    font-weight: 700;
    color: $docufiel-blue-color;
    @include respond-to("small and down") {
      margin-bottom: 0;
    } 
  }
}

.three-columns {
  @include respond-to("small and down") {
    padding: $gutter-xlarge $gutter-small;
  }
  &/deep/.card-holder__content {
    @include respond-to("small and down") {
      grid-row-gap: $gutter-large * 2;
    }
    .simple-card {
      @include respond-to("small and down") {
        grid-row-gap: $gutter;
      }
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

.no-icons {
  &/deep/.card-holder__content {
    @include respond-to("small and down") {
      grid-gap: $card-holder-gap;
    }
    .simple-card {
      @include respond-to("medium and up") {
        grid-template-rows: rem($gutter-xxlarge) minmax(120px, auto);
      }
    }
  }
}

.como-funciona {
  &__title {
    margin-bottom: $gutter-xlarge;
    font-weight: 700;
    color: $docufiel-blue-color;
    @include respond-to("small and down") {  
      margin-bottom: 0;
    }
  }

  &__description {
    color: $docufiel-gray-color;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: $gutter-xxxlarge;
    @include respond-to("small and down") {
      margin-bottom: 0;
      padding: $gutter-xlarge $gutter-small;
      font-size: $h4-text-size;
    }

    span {
      display: block;
      @include respond-to("small and down") {
        display: inline;
      }
    }
  }
}


.four-columns {
  margin-bottom: $gutter-xxxlarge;
  &/deep/.card-holder__content {

    .simple-card {
      grid-template-rows: $card-template-rows;
      text-align: center;
      justify-content: center;

      img {
        width: auto;
        height: rem(88px);
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
    h3 {
    color: white;
    }
    li {
      color: white;
      list-style-type: none;
      margin-bottom: rem(0px);
      margin-left: rem(0px);
    }

    &/deep/.twins-column--end {
      width: 100%;
    }

}

</style>