<template>
  <section class="min-h-screen bg-red-800">
    <div class="w-3/4 bg-white my-8 rounded-lg p-4 justify-space inline-block">
      <div class="w-1/3 p-4 inline-block">
        <img :src="img" :alt="title" />
      </div>
      <div class="w-1/2 p-4 inline-block align-top">
        <h1 class="text-3xl font-extrabold text-red-800 ">{{ title }}</h1>
        <br />
        <p class="text-justify">{{ overview }}</p>
        <br />
        <h3 class="text-lg"><b>Released:</b> {{ date }}</h3>
        <br />
        <h4>
          <span class="text-5xl font-bold text-red-800">{{ vote }}</span
          >/10
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedMovie: null,
    }
  },
  computed: {
    img() {
      return process.env.VUE_APP_PICT + this.selectedMovie.poster_path
    },
    title() {
      return this.selectedMovie.title
    },
    overview() {
      return this.selectedMovie.overview
    },
    vote() {
      return this.selectedMovie.vote_average
    },
    date() {
      return this.selectedMovie.release_date
    },
  },
  created() {
    // This functions finds the movie information in State by comparing
    // the inherited id with the IDs in the array in State
    console.log(typeof this.id)
    this.selectedMovie = this.$store.getters["topMovies"].find(
      (movie) => movie.id == this.id
    )
  },
  mounted() {
    console.log(process.env.VUE_APP_API)
  },
}
</script>
