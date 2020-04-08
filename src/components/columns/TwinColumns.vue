<template>
  <div class="twin-columns">
    <div class="twins-section twins-section--start">
      <div class="twins-column twins-column--start">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="twins-section twins-section--end">
      <div class="twins-column twins-column--end">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  .twin-columns {
    width: 100%;
    display: grid;

    @include respond-to("medium and down") {
      grid-template-columns: 1fr;
    }
    @include respond-to("large and up") {
      grid-template-columns: repeat(2, 1fr);
    }

    .twins-section {
      display: grid;
      background-color: $docufiel-green-color;
    }
    

    .twins-column {
      $responsive-breakpoints: (
              "xxsmall": 100%,
              "xsmall": 100%,
              "small": 100%,
              "medium": 100%,
              "large": $twin-column-breakpoint-large,
              "xlarge": $twin-column-breakpoint-xlarge,
              "xxlarge": $twin-column-breakpoint-xxlarge,
              "xxxlarge": $twin-column-breakpoint-xxxlarge
      );

      @each $breakpoint, $breakpoint-width in $responsive-breakpoints {
        @include respond-to($breakpoint) {
          width: $breakpoint-width;
        }
      }

      @include respond-to("large and up") {
        &--start {
          color: white;
          justify-self: end;
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          h2, h3 {
          color: white;
          grid-column: span 4;
          }
        }
        &--end {
          justify-self: start;
        }
      }

      @include remove-last-elem-margin();
    }
  }
</style>
