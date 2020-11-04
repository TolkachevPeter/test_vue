<template>
  <div class="main">
    <Loader v-if='loading' class="loader" />
    <div v-else v-for="image in allImages" :key="image.id">
      <v-img max-height="253" max-width="453" v-bind:src="image.image_url"></v-img>
    </div>
    <v-btn class='home__btn'
    v-on:click="fetchImages" color="primary" elevation="2">Загрузить</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/Loader.vue';

export default {
  computed: mapGetters(['allImages', 'loading']),
  methods: mapActions(['fetchImages']),
  async mounted() {
    this.fetchImages();
  },
  components: {
    Loader,
  },
};
</script>

<style scoped>
.main {
  max-width: 500px;
  justify-content: center;
  text-align: center;
  margin: 79px auto 79px;
  display: flex;
  flex-direction: column;
}
.home__btn {
  margin: 40px auto 79px;
  max-width: 200px;
}
.loader {
  margin: auto;
}
</style>
