import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      searchInput: "",
      images: [],
      loading: false,
    };
  },
  mutations: {
    pending(state, payload) {
      state.loading = payload;
    },
    setSearchVal(state, input) {
      state.searchInput = input;
    },
    setNewImagesData(state, fetchedData) {
      state.loading = false;
      state.images = fetchedData;
    },
    addImagesData(state, fetchedData) {
      state.images = [...state.images, ...fetchedData];
    },
  },
  getters: {
    searchInput: (state) => state.searchInput,
    images: (state) => state.images,
    loading: (state) => state.loading,
  },
});
