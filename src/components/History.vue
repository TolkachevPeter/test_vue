<template>
<div class='main'>
  <h2 class='history__name'>&larr; История</h2>
  <HistoryCard v-for="history in allHistory"
  :key="history.id" v-bind:history='history' />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HistoryCard from '@/components/HistoryCard.vue';

export default {
  computed: mapGetters(['allHistory']),
  components: {
    HistoryCard,
  },
};
</script>

<style scoped>
.main {
  min-width: 320px;
}
.history__name {
  margin-top: 67px;
  margin-left: 65px;
  font-size: 22px;
  }
</style>
