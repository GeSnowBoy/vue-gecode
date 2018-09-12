// import GeCode from 'ge-test';
import GeCode from './vue-gecode.vue';
// import GeCode from './vue-countTo.vue';
export default GeCode;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ge-code', GeCode);
}

