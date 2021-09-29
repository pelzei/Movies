<template>
 <div class='py-2'>
  <h1 class='font-sans text-3xl font-bold text-yellow-300'>Search</h1>
  <!-- An input field to search for movies,
  it creates a new query for each keyup -->
  <input type='text' v-model='query' @keyup='getResult(query)' class='p-2 m-2 rounded-lg'>
  <ul class='flex-wrap justify-between bg-red-800 min-w-full'>
    <!-- Only id, titl and img are actually needed for the current design of the app,
    the rest could be deleted (or used if the app is redesigned) -->
      <movie-item
      v-for='movie in movies'
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
        movies() {
            return this.$store.getters['movies'];
        },
    },
  data() {
    return {
      query: '',
    };
  },
  methods: {
    getResult(query) {
        this.$store.dispatch('getResults', query);
        },
    }
  };
</script>
