// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/DefaultLayout.vue';

import DefaultPage from '~/layouts/pages/DefaultPage.vue';
import SingleColumnPage from '~/layouts/pages/SingleColumnPage.vue';
import BookPage from '~/layouts/pages/BookPage.vue'

// docufiel components
import TwinColumns from '~/components/columns/TwinColumns.vue';
import TextBannerNoColumn from '~/components/blocks/TextBannerNoColumn.vue';

// Flare components
// Columns
import SingleColumn from '~/flare/components/columns/SingleColumn.vue';
import SlimColumn from '~/flare/components/columns/SlimColumn.vue';
import NoColumn from '~/flare/components/columns/NoColumn.vue';

// Structure
import SimpleHeader from '~/flare/components/headers/simple/SimpleHeader.vue';
import SimpleFooter from '~/flare/components/footers/simple/SimpleFooter.vue';
import SimpleCard from '~/flare/components/blocks/SimpleCard.vue';
import CardHolder from '~/flare/components/blocks/CardHolder.vue';
import SimpleHero from '~/flare/components/heroes/SimpleHero.vue';
import TextBanner from '~/flare/components/blocks/TextBanner.vue';

import SimpleNavItem from '~/flare/components/navigation/simple/SimpleNavItem';

import '~/sass/styles.scss';


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  Vue.component('DefaultLayout', DefaultLayout);
  Vue.component('DefaultPage', DefaultPage);
  Vue.component('SingleColumnPage', SingleColumnPage);
  Vue.component('BookPage', BookPage);

  Vue.component('SingleColumn', SingleColumn);
  Vue.component('SlimColumn', SlimColumn);
  
  Vue.component('SimpleHeader', SimpleHeader);
  Vue.component('SimpleFooter', SimpleFooter);
  Vue.component('SimpleHero', SimpleHero);
  
  Vue.component('SimpleCard', SimpleCard);
  Vue.component('CardHolder', CardHolder);
  Vue.component('TextBanner', TextBanner);
  Vue.component('TextBannerNoColumn', TextBannerNoColumn);
  
  Vue.component('SimpleNavItem', SimpleNavItem);
  
  // docufiel components
  Vue.component('TwinColumns', TwinColumns);
  Vue.component('NoColumn', NoColumn);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap'
  })
}
