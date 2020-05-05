<template>
  <header class="header">
    <no-column class="header__content">
      <button class="header__nav-toggle" @click="toggleNav">
        <slot name="nav-toggle"></slot>
      </button>
      <g-link class="header__logo" to="/">
        <slot name="logo"></slot>
      </g-link>
      <nav class="main-nav" :class="{ 'main-nav--open': isNavOpen }">
        <div class="main-nav__primary">
          <slot name="navigation"></slot>
          <button class="main-nav__close-button" @click="toggleNav">Close</button>
        </div>
      </nav>
      <div class="header__actions">
        <slot name="actions"></slot>
      </div>
    </no-column>
  </header>
</template>

<script>
  export default {
    name: 'SimpleHeader',
    data () {
      return {
        isNavOpen: false
      }
    },
    methods: {
      toggleNav () {
        this.isNavOpen = !this.isNavOpen
      }
    }
  };
</script>

<style lang="scss">
  .header {
    position: fixed;
    z-index: 10000;
    top: 0;
    color: $header-text-default-color;
    width: 100%;
    height: rem($header-height);
    background-color: $header-background-color;

    &__content {
      height: 100%;
      display: grid;
      padding: 0 $gutter;
      grid-template-columns: rem($header-logo-space-width) 1fr rem($header-actions-space-width);
      grid-template-rows: 100%;

      @include respond-to("medium and down") {
        grid-template-columns: rem($header-nav-icon-width) 1fr rem(46px);
      }
    }

    &__nav-toggle {
      padding: 0;

      @include respond-to("large and up") {
        display: none;
      }
    }

    &__logo {
      place-self: center left;

      @include respond-to("medium and down") {
        place-self: center center;
      }

      img {
        height: rem($header-logo-height);
        width: auto;
      }
    }

    &__actions {
      place-self: center right;
    }

    .main-nav {
      @include respond-to("medium and down") {
        display: none;

        &--open {
          position: fixed;
          top: 0;
          left: 0;
          display: block;
          background-color: $header-nav-default-color;
          width: calc(100% - #{$gutter-xxxlarge});
          height: 100%;
          z-index: 1;
          border-right: 1px solid black;
        }

        &__primary {
          padding: $gutter;
          display: grid;
          grid-auto-flow: row;
          grid-row-gap: rem($header-nav-spacing);
          align-items: center;
        }
      }
      @include respond-to("large and up") {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr min-content;
        align-self: center;

        &__primary {
          justify-content: $header-nav-primary-justify;
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: repeat(auto-fit, rem($header-nav-items-width));
          grid-column-gap: rem($header-nav-spacing);
          align-items: center;
        }

        &__close-button {
          display: none;
        }
      }
    }
  }
</style>
