<template>
  <div>
    <div class="main" v-for="image in allImages" :key="image.id">
      <h2>{{ image.title }}</h2>
      <p>{{ image.import_datetime }}</p>
      <v-img max-height="253" max-width="453" v-bind:src="image.image_url"></v-img>
    </div>
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
  margin: 79px auto 79px;
}
</style>
