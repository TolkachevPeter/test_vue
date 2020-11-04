<template>
  <div>
    <h2 class="history__name">Главная</h2>
    <div class="main">
      <Loader v-if="loading" class="loader" />
      <HomeImage v-else v-for="image in allImages" :key="image.id" v-bind:image="image" />
      <v-btn class="home__btn" v-on:click="fetchImages" color="primary" elevation="2"
        >Загрузить</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/Loader.vue';
import HomeImage from '@/components/HomeImage.vue';

export default {
  computed: mapGetters(['allImages', 'loading']),
  methods: mapActions(['fetchImages']),
  async mounted() {
    this.fetchImages();
  },
  components: {
    Loader,
    HomeImage,
  },
};
</script>

<style scoped>
.main {
  max-width: 500px;
  min-width: 320px;
  justify-content: center;
  text-align: center;
  margin: 30px auto 79px;
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
.history__name {
  margin-top: 67px;
  margin-left: 65px;
  font-size: 22px;
}
</style>
