<template>
  <div class="card-holder">
    <single-column class="card-holder__content">
      <slot></slot>
    </single-column>
  </div>
</template>

<script>
  export default {
    name: 'CardHolder',
  };
</script>

<style lang="scss" scoped>
  .card-holder {
    margin: $card-holder-margin 0;

    &__content {
      display: grid;

      @include respond-to("small and down") {
        grid-template-columns: repeat(1, 1fr);
      }
      @include respond-to("medium") {
        grid-template-columns: repeat(3, 1fr);
      }
      @include respond-to("large and up") {
        grid-template-columns: $large-and-up;
      }
      grid-gap: $card-holder-gap;
    }
  }
</style>
