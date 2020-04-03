<template>
  <footer class="footer">
    <single-column><slot></slot></single-column>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    color: $footer-text-color;
    background-color: $footer-background-color;
    min-height: $footer-min-height;
    padding: $footer-vertical-padding 0;
    text-align: right;
  }
</style>


<script>
  export default {
    name: 'SimpleFooter',
  };
</script>
