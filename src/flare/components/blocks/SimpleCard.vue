<template>
  <div class="simple-card">
    <slot></slot>
  </div>
</template>


<style lang="scss">
  .simple-card {
    display: grid;
    grid-auto-flow: row;

    @include respond-to("medium and up") {
      grid-template-rows: $card-template-rows;
    }
  }
</style>
