<template class='bg-red-800'>
 <div class='py-8 bg-red-800'>
  <h1 class='font-sans text-3xl font-bold text-yellow-300 py-4'>Top 100 Movies</h1>
  <ul class='flex-wrap justify-between bg-red-800 min-w-full'>
      <!-- Only id, title and img are actually needed for the current design of the app,
    the rest could be deleted (or used if the app is redesigned) -->
      <movie-item
      v-for='movie in topMovies'
      :key='movie.id'
      :id='movie.id'
      :title='movie.title'
      :vote='movie.vote_average'
      :date='movie.release_date'
      :overview='movie.overview'
      :img="'http://image.tmdb.org/t/p/w500' + movie.poster_path"
      ></movie-item>
  </ul>
 </div>
</template>
<script>

import MovieItem from './MovieItem.vue';

export default {
    components: {
        MovieItem,
    },
    computed: {
        topMovies() {
            return this.$store.getters['topMovies'];
        },
    },
  };
</script>
