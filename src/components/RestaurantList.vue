<template>
  <div class="row">
    <div
      class="col-md-4 mb-5"
      style="cursor: pointer;"
      @click="goToDetail(restaurant.id)"
      v-for="restaurant in restaurantList"
      :key="restaurant.id"
    >
      <div class="">
        <img
          :src="restaurant.logo"
          alt=""
          style="width: 100%; height: 210px;"
        />
      </div>
      <div class="text-center">
        <h3>{{ restaurant.name }}</h3>
      </div>
      <div class="text-left">
        <span> {{ restaurant.description }} </span>
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
