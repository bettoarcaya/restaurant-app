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
        <h3 style="text-align: left;">Fotografias</h3>
      </div>
      <div class="row">
        <div
          class="col-md-3"
          v-for="photo in restaurant.photos"
          :key="photo.id"
        >
          <img :src="photo.url" alt="" style="width:100%; height: 70%;" />
        </div>
      </div>
      <div class="mt-5">
        <h3 style="text-align: left;">Commentarios</h3>
      </div>
      <div class="row">
        <div
          class="col-md-12"
          v-for="comment in restaurant.comments"
          :key="comment.id"
        >
          <div style="text-align: left;">
            <h6>
              <strong> {{ comment.userName }} </strong> el {{ comment.date }}
            </h6>
            <p>
              {{ comment.userText }}
            </p>
          </div>
          <hr />
        </div>
        <div>
          <div class="mt-3">
            <h5 style="text-align: left;">Escribir un nuevo comentario</h5>
          </div>
          <div class="row">
            <div class="col-md-2">
              <p>Nombre</p>
              <input type="text" v-model="commentData.userName" />
            </div>
            <div class="col-md-12">
              <p>Comentario</p>
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
                class="btn btn-primary btn-sm float-right"
                @click="loadComment"
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
        });
        return r;
      });
    },
  },
};
</script>
