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
  },
  mutations: {
    updateImages(state, images) {
      state.images = images;
    },
  },
  getters: {
    allImages(state) {
      return state.images;
    },
  },
};
