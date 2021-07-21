<template>
  <div class="home">
    <div class="container mt-5">
      <h1 class="text-center">Restaurant hub</h1>
      <div class="text-center">
        <span>
          Listado de restaurantes disponibles para visitar y opinar sobre ellos
        </span>
      </div>
      <div class="mt-5">
        <RestaurantList />
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantList from "@/components/RestaurantList.vue";

export default {
  name: "Home",
  components: {
    RestaurantList,
  },
};
</script>
