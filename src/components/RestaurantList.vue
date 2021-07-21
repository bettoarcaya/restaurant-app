<template>
  <div class="row">
    <div v-for="restaurant in restaurantList" :key="restaurant.id">
      <div
        class="col-md-4"
        style="cursor: pointer"
        @click="goToDetail(restaurant.id)"
      >
        <div class="p-3">
          <img :src="restaurant.logo" alt="" />
        </div>
        <div class="text-center">
          <h3>{{ restaurant.name }}</h3>
        </div>
        <div class="text-center">
          <span> {{ restaurant.description }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RestaurantList",
  async mounted() {
    const url = `http://localhost:3000/restaurant`;

    axios.get(url).then((r) => {
      this.restaurantList = r.data;
      return r;
    });
  },
  data() {
    return {
      restaurantList: [],
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ path: `/restaurant/${id}` });
    },
  },
};
</script>
