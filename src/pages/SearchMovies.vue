<template>
 <div id='movies' class="bg-red-800 min-h-screen">
  <movie-search/>
 </div>
</template>
<script>
import MovieSearch from '../components/movies/MovieSearch.vue';

export default {
  name: 'SearchMovies',
  components: {
    MovieSearch,
  },
};
</script>
