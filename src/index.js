import GeCode from './vue-gecode';
export default GeCode;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ge-code', GeCode);
}

