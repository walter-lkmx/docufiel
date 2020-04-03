<template>
  <main class="default-page">
    <slot></slot>
  </main>
</template>

<style lang="scss">
  .default-page {
    background-color: $page-background-color;
    display: grid;
    grid-auto-flow: row;

    @include respond-to("small and down") {
      margin-top: $page-mobile-margin-top;
      padding-top: $page-mobile-padding-top;
      padding-bottom: $page-mobile-padding-bottom;
    }
    @include respond-to("medium") {
      margin-top: $page-tablet-margin-top;
      padding-top: $page-tablet-padding-top;
      padding-bottom: $page-tablet-padding-bottom;
    }
    @include respond-to("large and up") {
      margin-top: $page-desktop-margin-top;
      padding-top: $page-desktop-padding-top;
      padding-bottom: $page-desktop-padding-bottom;
    }
  }
</style>
