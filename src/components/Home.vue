<template>
  <div class="main">
    <div v-for="image in allImages" :key="image.id">
      <h2>{{ image.title }}</h2>
      <p>{{ image.import_datetime }}</p>
      <v-img max-height="253" max-width="453" v-bind:src="image.image_url"></v-img>
    </div>
    <v-btn class='home__btn'
    v-on:click="fetchImages" color="primary" elevation="2">Загрузить</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  async mounted() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.main {
  max-width: 500px;
  justify-content: center;
  text-align: center;
  margin: 79px auto 79px;
}
.home__btn {
  margin: 40px auto 79px;
  max-width: 200px;
}
</style>
