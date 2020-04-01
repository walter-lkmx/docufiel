// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// Flare components
// Columns
import SingleColumn from '~/flare/components/columns/SingleColumn.vue';
import SlimColumn from '~/flare/components/columns/SlimColumn.vue';

// Structure
import SimpleHeader from '~/flare/components/headers/simple/SimpleHeader.vue';
import SimpleFooter from '~/flare/components/footers/simple/SimpleFooter.vue';


import '~/sass/styles.scss';


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.component('SingleColumn', SingleColumn);
  Vue.component('SlimColumn', SlimColumn);
  Vue.component('SimpleHeader', SimpleHeader);
  Vue.component('SimpleFooter', SimpleFooter);
}
