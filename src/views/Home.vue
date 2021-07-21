<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container-fuid mt-5">
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
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import RestaurantList from "@/components/RestaurantList.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    RestaurantList,
  },
};
</script>
