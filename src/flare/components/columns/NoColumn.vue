<template>
  <div class="no-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SingleColumn',
  };
</script>

<style lang="scss" scoped>
  .no-column {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    width: 100%;
  }
</style>
