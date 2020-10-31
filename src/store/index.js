import Vue from 'vue';
import Vuex from 'vuex';
import images from './components/images';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    images,
  },
});
