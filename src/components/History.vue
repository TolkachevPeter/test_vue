<template>
  <div class="main">
    <div v-for="image in allHistory" :key="image.id">
      <div class="main__container">
      <h2>{{ image.title }}</h2>
      <p>{{ image.import_datetime }}</p>
      <v-img max-height="253" max-width="453" v-bind:src="image.image_url"></v-img>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['allHistory']),
};
</script>

<style scoped>
.main {
  max-width: 500px;
  justify-content: center;
  text-align: center;
  margin: 79px auto 79px;
}
.main__container {
  display: flex;
  flex-direction: row;
  margin: 30px auto 30px;
}
</style>
