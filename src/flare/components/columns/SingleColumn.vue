<template>
  <div class="single-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SingleColumn',
  };
</script>

<style lang="scss" scoped>
  .single-column {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;

    margin: 0 auto;
    max-width: 100%;
    $responsive-breakpoints: (
            "xxsmall":  $column-width-xxsmall,
            "xsmall":   $column-width-xsmall,
            "small":    $column-width-small,
            "medium":   $column-width-medium,
            "large":    $column-width-large,
            "xlarge":   $column-width-xlarge,
            "xxlarge":  $column-width-xxlarge,
            "xxxlarge": $column-width-xxxlarge);

    @each $breakpoint, $breakpoint-width in $responsive-breakpoints {
      @include respond-to($breakpoint) {
        width: $breakpoint-width;
      }
    }
  }
</style>
