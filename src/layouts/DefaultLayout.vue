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
      <div>
        <g-image src="~/assets/images/docufiel-footer.png" alt="Docufiel"></g-image>
        <div>
          <p>Compañía</p>
          <a>Nosotros</a>
          <a>Publicaciones</a>
          <a>Blog</a>
        </div>
        <div>
          <p>Soporte</p>
          <a>NOM-151-SCFI-2016</a>
          <a>FAQ</a>
        </div>
        <div>
          <p>Legal</p>
          <a href="/legal/terminos-condiciones">Términos y condiciones</a>
          <a href="/legal/privacidad">Políticas de privacidad</a>
        </div>
      </div>
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
      display:none;
    }
    .footer {
      a {
        display: block;
        color: white;
        text-decoration: none;
        margin-bottom: 1rem;
      }
    }
  }

</style>
