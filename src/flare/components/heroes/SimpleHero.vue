<template>
  <section class="simple-hero">
    <single-column class="simple-hero__content">
      <runtime-remark>
        <slot></slot>
      </runtime-remark>
    </single-column>
  </section>
</template>

<script>
  export default {
    name: 'SimpleHero',
  };
</script>

<style lang="scss">
  .simple-hero {
    max-width: 100%;
    @include respond-to("small and down") { height: $hero-mobile-height; }
    @include respond-to("medium") { height: $hero-tablet-height; }
    @include respond-to("large and up") { height: $hero-desktop-height; }

    @include respond-to("small and down") { margin-bottom: $hero-mobile-margin; }
    @include respond-to("medium") { margin-bottom: $hero-tablet-margin; }
    @include respond-to("large and up") { margin-bottom: $hero-desktop-margin; }


    &__content {
      height: 100%;
      display: grid;
      position: relative;

      @include respond-to("small and down") {
        grid-template-columns: $hero-mobile-columns;
        grid-template-rows:    $hero-mobile-rows;
        grid-template-areas:   $hero-mobile-areas;
      }
      @include respond-to("medium") {
        grid-template-columns: $hero-tablet-columns;
        grid-template-rows:    $hero-tablet-rows;
        grid-template-areas:   $hero-tablet-areas;
      }
      @include respond-to("large and up") {
        grid-template-columns: $hero-desktop-columns;
        grid-template-rows:    $hero-desktop-rows;
        grid-template-areas:   $hero-desktop-areas;
      }
    }

    img {
      grid-area: cover;
      max-height: 100%;
      width: auto;
      place-self: $hero-cover-place;
    }

    .message {
      grid-area: message;
      place-self: $hero-message-place;
    }

  }
</style>
