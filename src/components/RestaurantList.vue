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
import { mapGetters } from "vuex";

export default {
  name: "RestaurantList",
  computed: {
    ...mapGetters["getRestaurantList"],
  },
  async mounted() {
    const url = `http://localhost:3000/restaurant`;

    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((r) => {
        this.restaurantList = r;
        console.log(r);
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
