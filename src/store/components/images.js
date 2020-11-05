export default {
  actions: {
    async fetchImages(ctx) {
      ctx.commit('updateLoading', true);
      const res = await fetch(
        'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA',
      );
      const images = await res.json();

      ctx.commit('updateImages', images);
      ctx.commit('updateLoading', false);
    },
  },
  state: {
    images: [],
    history: [],
    loading: false,
  },
  mutations: {
    updateImages(state, image) {
      state.images = image;
      state.history.push(image.data);
    },
    updateLoading(state, loading) {
      state.loading = loading;
    },
    removeHistory(state, id) {
      state.history = state.history.filter((t) => t.id !== id);
    },
  },
  getters: {
    allImages(state) {
      return state.images;
    },
    allHistory(state) {
      return state.history;
    },
    loading(state) {
      return state.loading;
    },
    pages(state) {
      return Math.ceil(state.history.length / 5);
    },
  },
};
