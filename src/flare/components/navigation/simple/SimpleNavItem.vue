<template>
  <g-link :to="to" class="nav-item">
    <slot></slot>
  </g-link>
</template>

<script>
  export default {
    name: 'SimpleNavItem',
    props: {
      to: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .nav-item {
    color: $navigation-text-color;
    text-decoration: $navigation-text-decoration;
    text-align: center;

    &:hover {
      color: $navigation-text-color-hover;
    }
  }
</style>
