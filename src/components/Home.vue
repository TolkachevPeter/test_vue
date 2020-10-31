<template>
  <div>
    <div class="main" v-for="color in colors" :key="color.id">
      <h2>{{ color.title }}</h2>
      <p>{{ color.import_datetime }}</p>
      <v-img max-height="253" max-width="453" v-bind:src="color.image_url"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [],
    };
  },
  async mounted() {
    const res = await fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA',
    );
    const colors = await res.json();
    this.colors = colors;
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
