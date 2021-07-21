<template>
  <div class="home">
    <div class="container-fuid mt-5 text-center">
      <h1 class="text-center">Restaurant hub</h1>
      <span>
        Listado de restaurantes disponibles para visitar y opinar sobre ellos
      </span>
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
