<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-2">
          <img :src="restaurant.logo" alt="" style="width: 100%;" />
        </div>
        <div class="col-md-8">
          <h1 style="text-align: left;">{{ restaurant.name }}</h1>
          <p style="text-align: left;">{{ restaurant.description }}</p>
        </div>
      </div>
      <div class="mt-5">
        <h3 class="orange-color" style="text-align: left;">Fotografias</h3>
      </div>
      <div class="row">
        <div class="col-md-12 text-center" v-if="restaurant.photos.length == 0">
          <p>Este sitio no tiene imagenes disponibles!</p>
        </div>
        <div
          class="col-md-3"
          v-for="photo in restaurant.photos"
          :key="photo.id"
          else
        >
          <img :src="photo.url" alt="" style="width:100%; height: 100%;" />
        </div>
      </div>
      <div class="mt-5">
        <h3 class="orange-color" style="text-align: left;">Commentarios</h3>
      </div>
      <div class="row">
        <div
          class="col-md-12 text-center"
          v-if="restaurant.comments.length == 0"
        >
          <p>Aun no hay reviews para este sitio se el primero!</p>
          <hr />
        </div>
        <div
          class="col-md-12"
          v-for="comment in restaurant.comments"
          :key="comment.id"
          else
        >
          <div style="text-align: left;">
            <h6>
              <strong class="orange-color"> {{ comment.userName }} </strong> el
              {{ comment.date }}
            </h6>
            <p>
              {{ comment.userText }}
            </p>
          </div>
          <hr />
        </div>
        <div>
          <div class="mt-3">
            <h5 class="orange-color" style="text-align: left;">
              Escribir un nuevo comentario
            </h5>
          </div>
          <div class="row">
            <div class="col-md-2">
              <p class="orange-color">Nombre</p>
              <input type="text" v-model="commentData.userName" />
            </div>
            <div class="col-md-12">
              <p class="orange-color">Comentario</p>
              <textarea
                name="comment"
                id="comment"
                cols="100"
                rows="5"
                v-model="commentData.userText"
              ></textarea>
            </div>
            <div class="col-md-10 mt-2">
              <button
                class="btn btn-md float-right"
                @click="loadComment"
                style="background: orange;"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  async mounted() {
    const url = `http://localhost:3000/restaurant/${this.$route.params.id}`;

    axios.get(url).then((r) => {
      this.restaurant = r.data;
      return r;
    });
  },
  data() {
    return {
      restaurant: {},
      commentData: {
        userName: "",
        userText: "",
        restaurantId: this.$route.params.id,
      },
    };
  },
  methods: {
    loadComment() {
      const url = `http://localhost:3000/restaurant/comment`;

      axios.post(url, this.commentData).then((r) => {
        this.restaurant.comments.push({
          userName: r.data.userName,
          userText: r.data.userText,
          id: r.data.id,
          date: r.data.date,
        });
        return r;
      });
    },
  },
};
</script>
