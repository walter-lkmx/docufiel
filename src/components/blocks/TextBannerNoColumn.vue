<template>
  <section class="text-banner-no-column">
    <no-column>
      <slot></slot>
    </no-column>
  </section>
</template>

<script>
  export default {
    name: 'TextBannerNoColumn',
  };
</script>

<style lang="scss">
  .text-banner-no-column {
    $text-banner-align: center !default;
    text-align: $text-banner-align;
    padding: $gutter-xlarge;

    p:last-child {
      margin-bottom: 0;
    }
  }

</style>
