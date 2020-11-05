<template>
  <div class="main">
    <h2 class="history__name">&larr; История</h2>
    <HistoryCard v-for="history in paginatedHistory" :key="history.id" v-bind:history="history" />
    <div class="pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{ page__selected: page === pageNumber }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HistoryCard from '@/components/HistoryCard.vue';

export default {
  data() {
    return {
      perPage: 5,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapGetters(['allHistory', 'pages']),
    paginatedHistory() {
      const from = (this.pageNumber - 1) * this.perPage;
      const to = from + this.perPage;
      return this.allHistory.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
  },
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
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto 30px;
}
.page {
  padding: 8px;
  margin-right: 10px;
  border: solid 1px grey;
  border-radius: 8px;
}
.page:hover {
  background: #267dd4;
  cursor: pointer;
}
.page__selected {
  background: #267dd4;
}
</style>
