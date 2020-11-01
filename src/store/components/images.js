export default {
  actions: {
    async fetchImages(ctx) {
      const res = await fetch(
        'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA',
      );
      const images = await res.json();

      ctx.commit('updateImages', images);
    },
  },
  state: {
    images: [],
    history: [],
  },
  mutations: {
    updateImages(state, image) {
      state.images = image;
      state.history.push(image.data);
    },
  },
  getters: {
    allImages(state) {
      return state.images;
    },
    allHistory(state) {
      return state.history;
    },
    imagesCount(state) {
      return state.history.length;
    },
  },
};
