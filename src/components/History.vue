<template>
<div class='main'>
  <h2 class='history__name'>&larr; История</h2>
  <History v-for="history in allHistory"
  :key="history.id" v-bind:history='history' />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import History from '@/components/HistoryCard.vue';

export default {
  computed: mapGetters(['allHistory']),
  components: {
    History,
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
