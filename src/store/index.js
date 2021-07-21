import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    restaurantList: null,
    restaurant: null,
  },
  mutations: {
    setRestaurantsList(state, list) {
      state.restaurantList = list;
    },
    setRestaurant(state, restaurant) {
      state.restaurant = restaurant;
    },
  },
  getters: {
    getRestaurantList(state) {
      return state.restaurantList;
    },
    getRestaurant(state) {
      return state.restaurant;
    },
  },
  actions: {
    async getRestaurantListAction({ commit, state }) {
      const url = `http://localhost:3000/restaurant`;
      console.log(url);
      return await fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((r) => {
          commit("setRestaurantsList", r);
          return r;
        });
    },
  },
  modules: {},
});
