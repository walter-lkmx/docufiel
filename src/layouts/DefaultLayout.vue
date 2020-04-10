<template>
  <div class="default-layout">
    <simple-header class="header">
      <template v-slot:nav-toggle>
        <g-image src="~/assets/images/nav-icon.png" alt="Nav Toggle"></g-image>
      </template>
      <template v-slot:logo>
        <g-image src="~/assets/images/docufiel.png" alt="Docufiel"></g-image>
      </template>
      <template v-slot:navigation>
        <simple-nav-item :to="item.link" v-for="item in navigation.main" :key="item.key">
          {{item.name}}
        </simple-nav-item>
      </template>
    </simple-header>
    <slot/>
    <simple-footer class="footer">
      <no-column class="container">
        <g-image src="~/assets/images/docufiel-footer.png" alt="Docufiel"></g-image>
        <div class="link-block">
          <div class="link-item">
            <h3>Compañía</h3>
            <a>Nosotros</a>
            <a>Publicaciones</a>
            <a>Blog</a>
          </div>
          <div class="link-item">
            <h3>Soporte</h3>
            <a>NOM-151-SCFI-2016</a>
            <a>FAQ</a>
          </div>
          <div class="link-item">
            <h3>Legal</h3>
            <a href="/legal/terminos-condiciones">Términos y condiciones</a>
            <a href="/legal/privacidad">Aviso de privacidad</a>
          </div>
        </div>
        <div class="social-media">
          <g-image src="~/assets/images/facebook.svg" alt="Facebook"></g-image>
          <g-image src="~/assets/images/twitter.svg" alt="Twitter"></g-image>
          <g-image src="~/assets/images/instagram.svg" alt="Instagram"></g-image>
        </div>
      </no-column>
    </simple-footer>
  </div>
</template>

<script>
  import navigation from '../../content/nav.json';

  export default {
    data() {
      return {
        navigation,
      };
    },
  }
</script>


<style lang="scss" scoped>
  .default-layout {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr min-content;
    .header__actions {
      display: none;
    }
    .header {
      &__nav-toggle {
        @include respond-to("medium and down") {
          padding-left: $gutter;
          img {
            height: $gutter-large;
            width: auto;
          }
        }
      }
      @include respond-to("medium and down") {
        padding: 0 $gutter;
      }
    }
    .footer {
      .container {
        display: grid;
        grid-template-columns: 0.5fr 1fr 0.5fr;
        grid-template-rows: 100%;
        grid-gap: $gutter;
        text-align: left;
        .link-block {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: $gutter;
          @include respond-to("small and down") {
            grid-template-columns: 100%;
            grid-template-rows: auto auto auto;
          }
        }
        .social-media {
          img {
            display: inline;
            margin-left: $gutter;
          }
          @include respond-to("small and down") {
            grid-template-columns: 100%;
            padding-top: $gutter;
          }
        }
        @include respond-to("small and down") {
          text-align: center;
          grid-template-columns: 100%;
          grid-template-rows: 50px 1fr 50px;
          grid-gap: 0;
          img {
            margin: 0 auto;
          }
        }
      }
      h3 {
        color: white;
        margin-bottom: $gutter;
        font-weight: 700;
      }
      a {
        display: block;
        color: white;
        text-decoration: none;
        margin-bottom: 0.5rem;
      }
    }
  }

</style>
