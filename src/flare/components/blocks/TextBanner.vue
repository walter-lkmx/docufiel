<template>
  <section class="text-banner">
    <slim-column>
      <slot></slot>
    </slim-column>
  </section>
</template>

<script>
  export default {
    name: 'TextBanner',
  };
</script>

<style lang="scss">
  .text-banner {
    $text-banner-align: center !default;
    text-align: $text-banner-align;
    padding: $gutter-xlarge;

    p:last-child {
      margin-bottom: 0;
    }
  }

</style>
