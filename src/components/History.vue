<template>
<div>
  <v-card class="mx-auto mt-8" max-width="344" v-for="image in allHistory" :key="image.id">
    <v-img v-bind:src="image.image_url" height="200px">
      <v-btn class='card__btn' absolute icon @click="removeHistory(image.id)">
        <v-icon >mdi-bucket</v-icon >
      </v-btn></v-img>
    <v-card-title>
      {{ image.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ image.import_datetime }}
    </v-card-subtitle>
  </v-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: mapGetters(['allHistory']),
  methods: {
    ...mapMutations(['removeHistory']),
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
.main__container {
  display: flex;
  flex-direction: row;
  margin: 30px auto 30px;
}
.card__btn {
  display: absolute;
  bottom: 0px;
  right: 0px;
}
</style>
